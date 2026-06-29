import type { ShipmentStatus as APIShipmentStatus } from '../services/api/endpoints/shipments';

export type ShipmentStatus = APIShipmentStatus;

// Extended to include all statuses from the Soroban contract and backend
export type FullShipmentStatus =
  | 'CREATED'
  | 'IN_TRANSIT'
  | 'AT_CHECKPOINT'
  | 'PARTIALLY_DELIVERED'
  | 'DELIVERED'
  | 'DISPUTED'
  | 'CANCELLED';

const DISPLAY_LABELS: Record<string, string> = {
    CREATED: 'Pending Approval',
    IN_TRANSIT: 'In Transit',
    AT_CHECKPOINT: 'At Checkpoint',
    PARTIALLY_DELIVERED: 'Partially Delivered',
    DELIVERED: 'Delivered',
    DISPUTED: 'Disputed',
    CANCELLED: 'Cancelled',
};

const BADGE_CLASSES: Record<string, string> = {
    CREATED: 'bg-[rgba(245,158,11,0.1)] text-[#f59e0b] border border-[rgba(245,158,11,0.12)]',
    IN_TRANSIT: 'bg-[rgba(59,130,246,0.1)] text-[#3b82f6] border border-[rgba(59,130,246,0.12)]',
    AT_CHECKPOINT: 'bg-[rgba(139,92,246,0.1)] text-[#8b5cf6] border border-[rgba(139,92,246,0.12)]',
    PARTIALLY_DELIVERED: 'bg-[rgba(14,165,233,0.1)] text-[#0ea5e9] border border-[rgba(14,165,233,0.12)]',
    DELIVERED: 'bg-[rgba(16,185,129,0.1)] text-[#10b981] border border-[rgba(16,185,129,0.12)]',
    DISPUTED: 'bg-[rgba(245,158,11,0.1)] text-[#f59e0b] border border-[rgba(245,158,11,0.12)]',
    CANCELLED: 'bg-[rgba(239,68,68,0.1)] text-[#ef4444] border border-[rgba(239,68,68,0.12)]',
};

const DOT_CLASSES: Record<string, string> = {
    CREATED: 'bg-[#f59e0b]',
    IN_TRANSIT: 'bg-[#3b82f6]',
    AT_CHECKPOINT: 'bg-[#8b5cf6]',
    PARTIALLY_DELIVERED: 'bg-[#0ea5e9]',
    DELIVERED: 'bg-[#10b981]',
    DISPUTED: 'bg-[#f59e0b]',
    CANCELLED: 'bg-[#ef4444]',
};

// Terminal statuses — no further transitions allowed from frontend
export const TERMINAL_STATUSES: FullShipmentStatus[] = ['DELIVERED', 'CANCELLED'];

// Statuses where escrow is locked
export const DISPUTED_STATUSES: FullShipmentStatus[] = ['DISPUTED'];

export function getStatusDisplayLabel(status: ShipmentStatus | string): string {
    if (!status) return 'Unknown';
    return DISPLAY_LABELS[status] ?? String(status);
}

export function getStatusBadgeClass(status: ShipmentStatus | string): string {
    return BADGE_CLASSES[status] ?? 'bg-text-secondary/10 text-text-secondary border border-text-secondary/10';
}

export function getStatusDotClass(status: ShipmentStatus | string): string {
    return DOT_CLASSES[status] ?? 'bg-text-secondary';
}

export function isTerminalStatus(status: string): boolean {
    return TERMINAL_STATUSES.includes(status as FullShipmentStatus);
}

export function isDisputedStatus(status: string): boolean {
    return DISPUTED_STATUSES.includes(status as FullShipmentStatus);
}

export default {
    getStatusDisplayLabel,
    getStatusBadgeClass,
    getStatusDotClass,
    isTerminalStatus,
    isDisputedStatus,
};
