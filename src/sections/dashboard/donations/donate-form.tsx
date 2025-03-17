import { Box, Card, CardContent, CardHeader, Stack, Typography } from '@mui/material';
import { useMemo } from 'react';
import { useCreateDonation } from 'src/api/donation';
import { useSnackbar } from 'src/components/snackbar';
import { useRouter } from 'src/routes/hook';
import { DonationCategoryVariation } from 'src/types/donation';
import { formatEnumValue } from 'src/utils/format-string';
import PaymentInfoForm, { IPaymentInfo } from '../../payments/payment-info-form';

type Props = {
  amount: number;
  type: DonationCategoryVariation;
};

export default function DonateForm({ amount, type }: Props) {
  const { donate } = useCreateDonation();

  const { enqueueSnackbar } = useSnackbar();

  const router = useRouter();

  const handleDonation = async (data: IPaymentInfo) => {
    try {
      const result = await donate({
        ...data,
        amount,
        type,
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
    if (type && amount) {
      return [
        {
          title: 'Donate for',
          value: (
            <Typography component="span" textTransform="capitalize">
              {formatEnumValue(type)}
            </Typography>
          ),
        },
        {
          title: 'Amount:',
          value: `$${amount}`,
        },
      ];
    }

    return [];
  }, [amount, type]);

  return (
    <PaymentInfoForm
      onSubmitSuccss={handleDonation}
      paymentDetails={
        <Card>
          <CardHeader title="Donation information" />

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
