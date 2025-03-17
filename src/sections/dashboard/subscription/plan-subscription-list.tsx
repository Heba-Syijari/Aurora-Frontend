import { Grid, Stack, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useCallback, useMemo, useState } from 'react';
import { useAuthContext } from 'src/auth/hooks';
import Iconify from 'src/components/iconify';
import { BaseButton } from 'src/components/styled/button';
import { useRouter } from 'src/routes/hook';
import { paths } from 'src/routes/paths';
import { IPlan, PlanPeriodType, planPeriodTypes } from 'src/types/plan';
import { formatEnumValue } from 'src/utils/format-string';
import PlanItem from './plan-item';

// ------------------------------------------------

const Tabs = styled('div')(({ theme }) => ({
  display: 'flex',
  borderRadius: theme.spacing(6),
  padding: theme.spacing(1),
  backgroundColor: theme.palette.background.default,
  gap: theme.spacing(1),
  textTransform: 'capitalize',
  boxShadow: theme.shadows[6],
  alignSelf: 'center',
}));

// ----------------------------------------------------------------------

type Props = {
  plans: IPlan[];
};

export default function PlanSubscriptionList({ plans }: Props) {
  const [selectedPlanType, setSelectedPlanType] = useState<PlanPeriodType>(planPeriodTypes[0]);

  const { subscription } = useAuthContext();

  const router = useRouter();

  const handleSubscribeClick = useCallback(
    (planId: number) => {
      router.push(`${paths.dashboard.subscriptions.subscribe}?planId=${planId}`);
    },
    [router]
  );

  const renderPlans = useMemo(() => {
    const filteredPlans = plans.filter((plan) => plan.periodType === selectedPlanType);

    return filteredPlans.map((plan) => {
      const isCurrent = subscription?.planId === plan.id;
      const isCurrentExpired = subscription?.isExpired;

      return (
        <Grid item xs={12} sm={6} md={4} key={plan.id}>
          <PlanItem
            plan={plan}
            isCurrent={isCurrent}
            isCurrentExpired={isCurrentExpired}
            onAction={() => {
              if (!isCurrent || isCurrentExpired) {
                handleSubscribeClick(plan.id);
              }
            }}
          />
        </Grid>
      );
    });
  }, [handleSubscribeClick, plans, selectedPlanType, subscription]);

  return (
    <Stack spacing={4}>
      <Stack direction="row" alignItems="center" gap={1} justifyContent="space-between">
        <Stack direction="row" alignItems="center" gap={1} justifyContent="flex-start">
          <Iconify icon="icon-park-twotone:plan" width={30} color="primary.main" />
          <Typography variant="h5" color="common.black">
            Plans
          </Typography>
        </Stack>
        <Tabs
          sx={{
            boxShadow: 0,
            borderRadius: '15px',
            padding: 0.5,
          }}
        >
          {planPeriodTypes.map((type) => (
            <BaseButton
              key={type}
              onClick={() => setSelectedPlanType(type)}
              variant={type === selectedPlanType ? 'outlined' : 'text'}
              color={type === selectedPlanType ? 'primary' : 'inherit'}
              sx={{
                textTransform: 'capitalize',
                fontSize: 14,
                borderRadius: '15px',
                height: 40,
                bgcolor: type === selectedPlanType ? 'background.secondary' : 'transparent',
              }}
            >
              {`${formatEnumValue(type)}ly`}
            </BaseButton>
          ))}
        </Tabs>
      </Stack>
      <Grid container spacing={2}>
        {renderPlans}
      </Grid>
    </Stack>
  );
}
