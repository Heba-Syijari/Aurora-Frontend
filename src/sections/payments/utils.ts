import { LabelColor } from 'src/components/label';
import { PaymentStatus, PaymentStatusVariation } from 'src/types/payment';

export const getPaymentStatusColor = (status: PaymentStatusVariation): LabelColor => {
  switch (status) {
    case PaymentStatus.PAID:
      return 'success';
    case PaymentStatus.FAILED:
      return 'error';
    case PaymentStatus.UNPAID:
      return 'warning';
    case PaymentStatus.CANCELLED:
    default:
      return 'default';
  }
};
