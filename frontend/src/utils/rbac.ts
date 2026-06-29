// Primary roles matching the backend UserRole enum
export type UserRole = 'Admin' | 'Manager' | 'Viewer' | 'Driver' | 'company' | 'customer';

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

const PERMISSIONS: Record<UserRole, Action[]> = {
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
  Driver: [
    'shipment:upload-proof',
  ],
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

export function can(role: UserRole | null, action: Action): boolean {
  if (!role) return false;
  return (PERMISSIONS[role] ?? []).includes(action);
}

export function hasRole(role: UserRole | null, ...roles: UserRole[]): boolean {
  if (!role) return false;
  return roles.includes(role);
}
