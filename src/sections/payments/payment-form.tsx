import React from 'react';
import Script from 'next/script';
import { Card, CardContent, CardHeader } from '@mui/material';

type Props = {
  data: { token: string };
};

export default function PaymentForm({ data }: Props) {
  return (
    <>
      <Card>
        <CardHeader title="Payment form" />

        <CardContent>
          <div id="prdg-pay" data-token={data.token} />
        </CardContent>
      </Card>

      <Script src="https://backend-dev.brdgpay.com/payment/v2/prdg/sdk" crossOrigin="anonymous" />
    </>
  );
}
