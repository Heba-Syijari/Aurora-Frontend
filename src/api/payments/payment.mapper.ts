import { IPayment, IPaymentDetails } from 'src/types/payment';

export class PaymentMapper {
  static fromApi(data: any): IPayment {
    return {
      id: data.id,
      cost: data.cost,
      type: data.type,
      status: data.status,
      createdAt: data.createdAt,
      userId: data.userId,
      user: data.User,

      subscriptionId: data.subscriptionId,
      domainRegistrationId: data.domainRegistrationId,
      donationId: data.donationId,
    };
  }

  static fromApiWithDetails(data: any): IPaymentDetails {
    const payment: IPaymentDetails = PaymentMapper.fromApi(data);

    if (data.Subscription) {
      payment.subscription = {
        expireAt: data.Subscription.expireAt,
        status: data.Subscription.status,
        plan: data.Subscription.Plan,
      };
    }

    if (data.DomainRegistration) {
      payment.domainRegistration = {
        domainName: data.DomainRegistration.domainName,
        status: data.DomainRegistration.status,
        years: data.DomainRegistration.years,
      };
    }

    if (data.Donation) {
      payment.donation = {
        status: data.Donation.status,
        type: data.Donation.type,
      };
    }

    return payment;
  }
}
