import { User } from '@/types/user.types';
import { API_URL } from './api.config';

export async function createUser(name: string, email?: string): Promise<User> {
  const emailValue = email || null;
  const response = await fetch(`${API_URL}/users`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email:emailValue}),
  });

  if (!response.ok) {
    throw new Error(`Failed to create user: ${response.status}`);
  } else {
    console.log('User created successfully');
    return response.json();
  }
}
