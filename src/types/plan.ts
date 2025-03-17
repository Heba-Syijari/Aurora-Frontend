export const planPeriodTypes = ['YEAR', 'MONTH'] as const;

export enum PlanPeriod {
  YEAR = 'YEAR',
  MONTH = 'MONTH',
}

export type PlanPeriodType = (typeof planPeriodTypes)[number];

export interface IDomainFeatureLimitation {
  tld: string;
  years: number;
}

export interface IPlanFeatureLimitation {
  id: number;
  description: string;
  limitation?: IDomainFeatureLimitation & Record<string, any>;
  planId: number;
  featureId: number;
  createdAt: string;
  feature?: {
    key: string;
  };
}

export interface IPlan {
  id: number;
  name: string;
  description: string;
  periodType: PlanPeriodType;
  period: number;
  price: number;
  discount?: number;
  createdAt: string;
  updatedAt: string;
  features: IPlanFeatureLimitation[];
  extraFeatures?: string[];
}

export interface IPlanFeature {
  id: number;
  title: string;
  limitation?: any;
  createdAt: string;
}

export interface IPlanInfo {
  id: number;
  name: string;
  periodType: PlanPeriodType;
  period: number;
}

export enum AvailablePlanFeatures {
  MAX_ALLOWED_PROJECTS = 'max_allowed_projects',
  MAX_PAGES_PER_PROJECT = 'max_pages_per_project',
  EXPORT_PROJECT = 'export_project',
  GOOGLE_ANALYTICS_INTEGRATION = 'google_analytics_integration',
  FREE_DOMAIN_NAME = 'free_domain_name',
  IMAGE_MODELS = 'image_models',
  TEXT_MODELS = 'text_models',
}
