import { User } from '@/types/user.types';

export async function createUser(user: Omit<User, 'id'>): Promise<void> {
  const response = await fetch(`http://localhost:3000/api/users`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  });

  if (!response.ok) {
    throw new Error(`Failed to create user: ${response.status}`);
  }
}
