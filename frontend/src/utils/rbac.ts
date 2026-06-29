// Roles matching the backend UserRole enum (Admin/Manager/Viewer/Driver)
export type UserRole = 'Admin' | 'Manager' | 'Viewer' | 'Driver';

// Legacy role strings used in existing JWT tokens and some older components
export type LegacyRole = 'company' | 'customer';

// Union for useAuth / AuthContext which may receive either format from JWT
export type AnyRole = UserRole | LegacyRole;

export type Action =
  | 'shipment:create'
  | 'shipment:upload-proof'
  | 'shipment:confirm-milestone'
  | 'shipment:delete'
  | 'shipment:bulk-update'
  | 'settlement:release-payment'
  | 'settlement:dispute'
  | 'user:manage-team'
  | 'user:invite'
  | 'user:change-role'
  | 'analytics:view'
  | 'api-keys:manage'
  | 'settings:company';

const PERMISSIONS: Record<AnyRole, Action[]> = {
  Admin: [
    'shipment:create',
    'shipment:upload-proof',
    'shipment:confirm-milestone',
    'shipment:delete',
    'shipment:bulk-update',
    'settlement:release-payment',
    'settlement:dispute',
    'user:manage-team',
    'user:invite',
    'user:change-role',
    'analytics:view',
    'api-keys:manage',
    'settings:company',
  ],
  Manager: [
    'shipment:create',
    'shipment:upload-proof',
    'shipment:confirm-milestone',
    'shipment:bulk-update',
    'settlement:release-payment',
    'settlement:dispute',
    'analytics:view',
  ],
  Viewer: [],
  Driver: ['shipment:upload-proof'],
  // Legacy aliases
  company: [
    'shipment:create',
    'shipment:upload-proof',
    'shipment:confirm-milestone',
    'shipment:delete',
    'shipment:bulk-update',
    'settlement:release-payment',
    'settlement:dispute',
    'user:manage-team',
    'user:invite',
    'user:change-role',
    'analytics:view',
    'api-keys:manage',
    'settings:company',
  ],
  customer: [],
};

export function can(role: AnyRole | null, action: Action): boolean {
  if (!role) return false;
  return (PERMISSIONS[role] ?? []).includes(action);
}

export function hasRole(role: AnyRole | null, ...roles: AnyRole[]): boolean {
  if (!role) return false;
  return roles.includes(role);
}
