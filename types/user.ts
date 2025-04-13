export interface User {
  id: string;
  email: string;
  name: string | null;
  password?: string;
  profileImage?: string | null;
  googleId?: string | null;
  lastLogin?: Date | string | null;
  createdAt?: Date | string | null;
  registrationDate?: Date | string | null;
  created_at?: Date | string | null;
}