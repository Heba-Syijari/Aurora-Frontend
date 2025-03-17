'use client';

import { m } from 'framer-motion';
import Typography from '@mui/material/Typography';
import CompactLayout from 'src/layouts/compact';
import { SeverErrorIllustration } from 'src/assets/illustrations';
import { MotionContainer, varBounce } from 'src/components/animate';
import { BaseButton } from 'src/components/styled/button';

// ----------------------------------------------------------------------

export default function Page500() {
  return (
    <CompactLayout>
      <MotionContainer>
        <m.div variants={varBounce().in}>
          <Typography variant="h3" paragraph>
            500 Internal Server Error
          </Typography>
        </m.div>

        <m.div variants={varBounce().in}>
          <Typography sx={{ color: 'text.secondary' }}>
            There was an error, please try again later.
          </Typography>
        </m.div>

        <m.div variants={varBounce().in}>
          <SeverErrorIllustration sx={{ height: 260, my: { xs: 5, sm: 10 } }} />
        </m.div>

        <BaseButton href="/" size="large" variant="contained" color="primary">
          Go to Home
        </BaseButton>
      </MotionContainer>
    </CompactLayout>
  );
}
