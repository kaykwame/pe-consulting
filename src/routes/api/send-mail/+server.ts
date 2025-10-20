import type { RequestHandler } from './$types';
import nodemailer from 'nodemailer';

export const POST: RequestHandler = async ({ request }) => {
	// read form data
	const form = await request.formData();
	const name = String(form.get('name') ?? 'No name');
	const email = String(form.get('email') ?? 'no-reply@example.com');
	const message = String(form.get('message') ?? '');

	// minimal config check
	if (!process.env.SMTP_HOST || !import.meta.env.VITE_SMTP_HOST) {
		return new Response(JSON.stringify({ error: 'SMTP not configured' }), {
			status: 500,
			headers: { 'Content-Type': 'application/json' }
		});
	}

	// configure transporter via env vars
	const transporter = nodemailer.createTransport({
		host: process.env.SMTP_HOST ?? import.meta.env.VITE_SMTP_HOST,
		port: Number(process.env.VITE_SMTP_PORT ?? 587),
		secure: true,
		auth: {
			user: process.env.SMTP_USER ?? import.meta.env.VITE_SMTP_USER,
			pass: process.env.SMTP_PASS ?? import.meta.env.VITE_SMTP_PASS
		}
	});

	const htmlBody = `
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, '<br>')}</p>
    `;

	const mailOptions = {
		from: email,
		to: 'princepappoe@peconsult.org',
		subject: `Website contact — ${name}`,
		html: htmlBody,
		replyTo: email
	};

	try {
		const info = await transporter.sendMail(mailOptions);
		return new Response(JSON.stringify({ success: true, messageId: info.messageId }), {
			status: 200,
			headers: { 'Content-Type': 'application/json' }
		});
	} catch (err: any) {
		return new Response(JSON.stringify({ error: err?.message ?? 'Send failed' }), {
			status: 500,
			headers: { 'Content-Type': 'application/json' }
		});
	}
};

function escapeHtml(s: string) {
	return s.replace(
		/[&<>"']/g,
		(c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c] as string
	);
}
