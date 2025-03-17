import { yupResolver } from '@hookform/resolvers/yup';
import { Card, CardContent, CardHeader, Grid, MenuItem, Stack } from '@mui/material';
import { useForm } from 'react-hook-form';
import FormProvider, { RHFSelect } from 'src/components/hook-form';
import { BaseLoadingButton } from 'src/components/styled/button';
import { paymentMethods } from 'src/types/payment';
import * as Yup from 'yup';

// ------------------------------------------------------------

export interface IPaymentInfo {
  method: string;
}

type Props = {
  onSubmitSuccss: (data: IPaymentInfo) => Promise<void>;
  paymentDetails?: React.ReactNode;
};

export default function PaymentInfoForm({ onSubmitSuccss, paymentDetails }: Props) {
  const schema = Yup.object().shape({
    method: Yup.string().required('The payment method is required'),
  });

  const defaultValues = {
    method: '',
  };

  const methods = useForm({
    resolver: yupResolver(schema),
    defaultValues,
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = handleSubmit(async (data) => {
    console.info('DATA', data);
    await onSubmitSuccss(data);
  });

  return (
    <Stack spacing={3}>
      {paymentDetails && paymentDetails}

      <Card>
        <CardHeader title="Payment information" />

        <CardContent>
          <FormProvider id="domain-register-form" methods={methods} onSubmit={onSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <RHFSelect
                  name="method"
                  label="Payment Method"
                  sx={{ textTransform: 'capitalize' }}
                  disabled={isSubmitting}
                >
                  {paymentMethods.map((item) => (
                    <MenuItem value={item.code} key={item.code}>
                      {item.name} {`(${item.code})`}
                    </MenuItem>
                  ))}
                </RHFSelect>
              </Grid>
            </Grid>
          </FormProvider>
        </CardContent>
      </Card>

      <Stack alignItems="flex-end">
        <BaseLoadingButton
          color="primary"
          type="submit"
          variant="contained"
          loading={isSubmitting}
          disabled={isSubmitting}
          size="large"
          form="domain-register-form"
        >
          Send payment request
        </BaseLoadingButton>
      </Stack>
    </Stack>
  );
}
