import nodemailer from 'nodemailer';

export async function sendMail(subject: string, text: string) {
	// Configure the transporter
	const transporter = nodemailer.createTransport({
		service: process.env.SMTP_HOST,
		auth: {
			user: process.env.SMTP_USER, // set in your environment variables
			pass: process.env.SMTP_PASS // set in your environment variables
		}
	});

	// Email options
	const mailOptions = {
		from: process.env.EMAIL_USER,
		to: 'princepappoe@peconsult.org',
		subject,
		text
	};

	// Send the email
	try {
		const info = await transporter.sendMail(mailOptions);
		return info;
	} catch (error) {
		throw new Error(`Failed to send email: ${error}`);
	}
}
