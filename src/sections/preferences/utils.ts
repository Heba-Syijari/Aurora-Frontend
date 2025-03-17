import { AvailablePlanFeatures, IPlan } from 'src/types/plan';
import { IUserPreferences } from 'src/types/user';

export function getFeatureLimitationOptions(
  featureKey: AvailablePlanFeatures,
  plan?: IPlan,
  defaultValue?: string
): string[] {
  const features = plan?.features || [];

  const planFeature = features.find(({ feature }) => feature?.key === featureKey);

  return planFeature?.limitation?.options || (defaultValue ? [defaultValue] : []);
}

export function getImageModels(plan?: IPlan, preferences?: IUserPreferences): string[] {
  return getFeatureLimitationOptions(
    AvailablePlanFeatures.IMAGE_MODELS,
    plan,
    preferences?.imageModel
  );
}

export function getTextModels(plan?: IPlan, preferences?: IUserPreferences): string[] {
  return getFeatureLimitationOptions(
    AvailablePlanFeatures.TEXT_MODELS,
    plan,
    preferences?.textModel
  );
}
