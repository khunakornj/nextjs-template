export type UserRole = 'ADMIN' | 'USER' | 'MANAGER';
export type UserStatus = 'ACTIVE' | 'INACTIVE' | 'PENDING_REGISTRATION';
export type UserAttributes = {
  id: string;
  createdAt: string;
  updatedAt: string;
  lastSignedInAt: string;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  userStatus: string;
  lineAccountId: string;
};
