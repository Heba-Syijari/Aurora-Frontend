'use client';

import { Stack } from '@mui/material';
import Typography from '@mui/material/Typography';
import { m } from 'framer-motion';
import { PageNotFoundIllustration } from 'src/assets/illustrations';
import { MotionContainer, varBounce } from 'src/components/animate';
import { BaseButton } from 'src/components/styled/button';
import CompactLayout from 'src/layouts/compact';

// ----------------------------------------------------------------------

type Props = {
  redirectURL?: string;
};

export default function ProjectHasNoPagesView({ redirectURL }: Props) {
  return (
    <CompactLayout>
      <MotionContainer>
        <m.div variants={varBounce().in}>
          <Typography variant="h3" paragraph>
            Sorry, This project doesn’t have pages!
          </Typography>
        </m.div>

        <m.div variants={varBounce().in}>
          <Typography sx={{ color: 'text.secondary' }}>
            Sorry, we couldn’t find any page for this project. Please go to the project dashboard to
            add/generate a new page.
          </Typography>
        </m.div>

        <m.div variants={varBounce().in}>
          <PageNotFoundIllustration sx={{ height: 260, my: { xs: 5, sm: 10 } }} />
        </m.div>

        <Stack spacing={1} direction="row" justifyContent="center">
          <BaseButton href="/" size="large" variant="outlined">
            Go to Home
          </BaseButton>

          <BaseButton href={redirectURL || '/'} size="large" variant="contained" color="primary">
            Go to Pages
          </BaseButton>
        </Stack>
      </MotionContainer>
    </CompactLayout>
  );
}
