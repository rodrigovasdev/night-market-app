import { API_URL } from './api.config';

export interface DiscountMailPayload {
    username: string;
    email: string;
}

export interface DemoVersionMailPayload {
    username: string;
    email: string;
}

export async function sendDiscountMail(payload: DiscountMailPayload): Promise<void> {
    const response = await fetch(`${API_URL}/mail/discount`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
    });

    if (!response.ok) {
        throw new Error(`Failed to send discount mail: ${response.status}`);
    }
}

export async function sendDemoVersionMail(payload: DemoVersionMailPayload): Promise<void> {
    const response = await fetch(`${API_URL}/mail/keep-in-touch`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
    });

    if (!response.ok) {
        throw new Error(`Failed to send demo version mail: ${response.status}`);
    }
}