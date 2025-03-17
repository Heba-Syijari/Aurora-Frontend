import { Box, Card, CardContent, CardHeader, Stack, Typography } from '@mui/material';
import { useMemo } from 'react';
import { useGetPlanDetails } from 'src/api/plan';
import { useCreateSubscription } from 'src/api/subscription';
import { useSnackbar } from 'src/components/snackbar';
import { useRouter } from 'src/routes/hook';
import { formatEnumValue } from 'src/utils/format-string';
import PaymentInfoForm, { IPaymentInfo } from '../../payments/payment-info-form';

type Props = {
  planId: number;
};

export default function SubscribeForm({ planId }: Props) {
  const { plan } = useGetPlanDetails(planId);

  const { subscribe } = useCreateSubscription();

  const { enqueueSnackbar } = useSnackbar();

  const router = useRouter();

  const handleSubscribe = async (data: IPaymentInfo) => {
    try {
      console.info('DATA', data);

      const { redirectURL } = await subscribe({ ...data, planId });

      enqueueSnackbar('Create success!');

      redirectToPaymentForm(redirectURL);
    } catch (error) {
      console.error(error);
      enqueueSnackbar(error.message, { variant: 'error' });
    }
  };

  function redirectToPaymentForm(redirectURL: string) {
    router.replace(redirectURL);
  }

  const details = useMemo(() => {
    if (!plan) return [];

    return [
      {
        title: 'Plan:',
        value: plan.name,
      },
      {
        title: 'Description:',
        value: plan.description,
      },
      {
        title: 'Period:',
        value: `${plan.period} ${formatEnumValue(plan.periodType)}${plan.period > 1 ? 's' : ''}`,
      },
      {
        title: 'Price:',
        value: `$${plan.price}`,
      },
      {
        title: 'Discount:',
        value: `%${(plan.discount || 0) * 100}`,
      },
      {
        title: 'Final price:',
        value: `$${plan.price - plan.price * (plan.discount || 0)}`,
      },
    ];
  }, [plan]);

  return (
    <PaymentInfoForm
      onSubmitSuccss={handleSubscribe}
      paymentDetails={
        <Card>
          <CardHeader title="Plan subscription information" />

          <CardContent>
            <Box
              rowGap={1}
              columnGap={2}
              display="grid"
              gridTemplateColumns={{
                xs: 'repeat(1, 1fr)',
                sm: 'repeat(2, 1fr)',
              }}
            >
              {details.map((item, i) => (
                <Stack key={i} flexDirection="row" spacing={1}>
                  <Typography variant="subtitle1">{item.title}</Typography>
                  <Typography variant="body2">{item.value}</Typography>
                </Stack>
              ))}
            </Box>
          </CardContent>
        </Card>
      }
    />
  );
}
