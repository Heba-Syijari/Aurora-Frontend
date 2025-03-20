import { IDomainRegistration } from 'src/types/domain';

export class DomainRegistrationMapper {
  static fromApi(domain: any): IDomainRegistration {
    return {
      id: domain.id,
      amount: domain.amount,
      domainName: domain.domainName,
      years: domain.years,
      status: domain.status,
      userId: domain.userId,
      createdAt: domain.createdAt,
      isFree: domain.isFree,
    };
  }
}
