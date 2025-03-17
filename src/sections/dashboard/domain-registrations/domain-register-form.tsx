import { Box, Card, CardContent, CardHeader, Stack, Typography } from '@mui/material';
import { useMemo } from 'react';
import { useCreateDomainRegistration, useGetDomainPricing } from 'src/api/domain';
import { useSnackbar } from 'src/components/snackbar';
import { useRouter } from 'src/routes/hook';
import PaymentInfoForm, { IPaymentInfo } from 'src/sections/payments/payment-info-form';

type Props = {
  domainName: string;
  duration: number;
};

export default function DomainRegisterForm({ domainName, duration }: Props) {
  const { pricing } = useGetDomainPricing(domainName);

  const price = useMemo(
    () => pricing.find((p) => p.duration === duration)?.price,
    [pricing, duration]
  );

  const { createDomainRegistration } = useCreateDomainRegistration();

  const { enqueueSnackbar } = useSnackbar();

  const router = useRouter();

  const handleDomainRegistration = async (data: IPaymentInfo) => {
    try {
      console.info('DATA', data);

      const result = await createDomainRegistration({
        ...data,
        domainName,
        years: duration,
      });

      enqueueSnackbar('Create success!');

      redirectToPaymentForm(result.redirectURL);
    } catch (error) {
      console.error(error);
      enqueueSnackbar(error.message, { variant: 'error' });
    }
  };

  function redirectToPaymentForm(redirectURL: string) {
    router.replace(redirectURL);
  }

  const details = useMemo(() => {
    if (!price) return [];

    return [
      {
        title: 'Domain:',
        value: domainName,
      },
      {
        title: 'Duration:',
        value: `${duration} year${duration > 1 ? 's' : ''}`,
      },
      {
        title: 'Price:',
        value: `$${price}`,
      },
    ];
  }, [domainName, price, duration]);

  return (
    <PaymentInfoForm
      onSubmitSuccss={handleDomainRegistration}
      paymentDetails={
        <Card>
          <CardHeader title="Domain information" />

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
