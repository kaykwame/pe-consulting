import { json } from '@sveltejs/kit';
import { Resend } from 'resend';

const resend = new Resend('re_Hi2AAxhF_JoouXBayAnDpkRXhDTrm8k7z');

export async function POST({ request }) {
	const { name, email, message } = await request.json();

	try {
		await resend.emails.send({
			from: 'contact@peconsult.org',
			to: 'princepappoe@peconsult.org',
			subject: `New message from ${name}`,
			replyTo: `princepappoe@peconsult.org`,
			text: `${message}\n\nFrom: ${email}`
		});

		return json({ success: true });
	} catch (err: any) {
		console.error(err);
		return json({ error: err.message }, { status: 500 });
	}
}
