import { Box, Container, Typography } from '@mui/material';
import { m } from 'framer-motion';
import { ForbiddenIllustration } from 'src/assets/illustrations';
import { MotionContainer, varBounce } from 'src/components/animate';

type Props = {
  title: string;
  description: string;
  actions: React.ReactNode;
};

export function SubscriptionErrorContent({ description, title, actions }: Props) {
  return (
    <Box>
      <Container component={MotionContainer} sx={{ textAlign: 'center' }}>
        <m.div variants={varBounce().in}>
          <Typography variant="h3" paragraph>
            {title}
          </Typography>
        </m.div>

        <m.div variants={varBounce().in}>
          <Typography sx={{ color: 'text.secondary' }}>{description}</Typography>
        </m.div>

        <m.div variants={varBounce().in}>
          <ForbiddenIllustration
            sx={{
              height: 260,
              my: { xs: 5, sm: 10 },
            }}
          />
        </m.div>

        {actions}
      </Container>
    </Box>
  );
}
