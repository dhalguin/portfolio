'use server'

import nodemailer from 'nodemailer'

export const sendEmail = async (name: string, fromEmail: string, message: string) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.NEXT_PUBLIC_NODEMAILER_EMAIL,
      pass: process.env.NEXT_PUBLIC_NODEMAILER_APP_PASSWORD,
    },
  })

  try {
    await transporter.sendMail({
      from: fromEmail,
      to: process.env.NEXT_PUBLIC_NODEMAILER_EMAIL,
      subject: `New message from ${name} - Portfolio Contact`,
      text: `From: ${name} <${fromEmail}>\n\n${message}`,
      html: `<p><strong>From:</strong> ${name} &lt;${fromEmail}&gt;</p><p>${message}</p>`,
    })

    return true
  } catch (err) {
    return `Error has ocurred ${err}`
  }
}
