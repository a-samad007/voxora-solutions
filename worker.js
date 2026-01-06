export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // Handle CORS preflight requests
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
        },
      });
    }

    // API endpoint for contact form
    if (url.pathname === '/api/contact' && request.method === 'POST') {
      try {
        const formData = await request.json();

        // Validate form data
        if (!formData.name || !formData.email || !formData.message) {
          return new Response(JSON.stringify({ error: 'Missing required fields' }), {
            status: 400,
            headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*',
            },
          });
        }

        // Send email using Resend API
        const emailResponse = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${env.RESEND_API_KEY}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            from: 'Voxora Contact Form <noreply@voxorasolution.com>', // Resend's test email
            to: ['HELLO@voxorasolution.com'],
            reply_to: formData.email,
            subject: `New Contact Form Submission - ${formData.type}`,
            html: `
              <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                <h2 style="color: #9333ea;">New Contact Form Submission</h2>
                <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
                  <p><strong>From:</strong> ${formData.name}</p>
                  <p><strong>Email:</strong> ${formData.email}</p>
                  <p><strong>Inquiry Type:</strong> ${formData.type}</p>
                </div>
                <div style="margin: 20px 0;">
                  <h3 style="color: #333;">Message:</h3>
                  <p style="line-height: 1.6; color: #555;">${formData.message}</p>
                </div>
                <hr style="border: none; border-top: 1px solid #ddd; margin: 30px 0;">
                <p style="color: #999; font-size: 12px;">This email was sent from the Voxora Solutions contact form.</p>
              </div>
            `,
          }),
        });

        if (!emailResponse.ok) {
          const errorData = await emailResponse.text();
          console.error('Resend API error:', errorData);
          throw new Error('Failed to send email');
        }

        return new Response(JSON.stringify({ success: true, message: 'Email sent successfully' }), {
          status: 200,
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          },
        });

      } catch (error) {
        console.error('Error processing contact form:', error);
        return new Response(JSON.stringify({ error: 'Failed to send email' }), {
          status: 500,
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          },
        });
      }
    }

    // Serve static assets for all other requests
    return env.ASSETS.fetch(request);
  }
};
