import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json()

    // Email configuration for sending to saurabh211saurabh@gmail.com
    const emailData = {
      to: "saurabh211saurabh@gmail.com",
      from: email,
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
        <hr>
        <p><em>Sent from Saurabh's Portfolio Website</em></p>
      `,
    }

    // In a real implementation, you would use a service like:
    // - SendGrid
    // - Nodemailer with SMTP
    // - Resend
    // - AWS SES

    // For now, we'll simulate success and log the data
    console.log("Email would be sent:", emailData)

    // Simulate email sending delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    return NextResponse.json({
      success: true,
      message: "Message sent successfully!",
    })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ success: false, message: "Failed to send message" }, { status: 500 })
  }
}
