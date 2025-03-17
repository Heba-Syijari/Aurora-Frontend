'use client';

import { m } from 'framer-motion';
import Typography from '@mui/material/Typography';
import CompactLayout from 'src/layouts/compact';
import { ForbiddenIllustration } from 'src/assets/illustrations';
import { MotionContainer, varBounce } from 'src/components/animate';
import { BaseButton } from 'src/components/styled/button';

// ----------------------------------------------------------------------

export default function View403() {
  return (
    <CompactLayout>
      <MotionContainer>
        <m.div variants={varBounce().in}>
          <Typography variant="h3" paragraph>
            No permission
          </Typography>
        </m.div>

        <m.div variants={varBounce().in}>
          <Typography sx={{ color: 'text.secondary' }}>
            The page you&apos;re trying access has restricted access.
            <br />
            Please refer to your system administrator
          </Typography>
        </m.div>

        <m.div variants={varBounce().in}>
          <ForbiddenIllustration sx={{ height: 260, my: { xs: 5, sm: 10 } }} />
        </m.div>

        <BaseButton href="/" size="large" variant="contained" color="primary">
          Go to Home
        </BaseButton>
      </MotionContainer>
    </CompactLayout>
  );
}
