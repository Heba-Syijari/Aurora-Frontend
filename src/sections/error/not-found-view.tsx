'use client';

import { m } from 'framer-motion';
import Typography from '@mui/material/Typography';
import CompactLayout from 'src/layouts/compact';
import { MotionContainer, varBounce } from 'src/components/animate';
import { PageNotFoundIllustration } from 'src/assets/illustrations';
import { BaseButton } from 'src/components/styled/button';

// ----------------------------------------------------------------------

type Props = {
  redirectURL?: string;
};

export default function NotFoundView({ redirectURL }: Props) {
  return (
    <CompactLayout>
      <MotionContainer>
        <m.div variants={varBounce().in}>
          <Typography variant="h3" paragraph>
            Sorry, Page Not Found!
          </Typography>
        </m.div>

        <m.div variants={varBounce().in}>
          <Typography sx={{ color: 'text.secondary' }}>
            Sorry, we couldn’t find the page you’re looking for. Perhaps you’ve mistyped the URL? Be
            sure to check your spelling.
          </Typography>
        </m.div>

        <m.div variants={varBounce().in}>
          <PageNotFoundIllustration
            sx={{
              height: 260,
              my: { xs: 5, sm: 10 },
            }}
          />
        </m.div>

        <BaseButton href={redirectURL || '/'} size="large" variant="contained" color="primary">
          Go to Home
        </BaseButton>
      </MotionContainer>
    </CompactLayout>
  );
}
