import { IconButton } from '@mui/material';
import { RouterLink } from 'src/routes/components';

// -------------------------------------------------

type SocialIconButtonProps = {
  link: string;
  hovercolor?: string;
  children: React.ReactElement;
};

export function SocialIconButton({ link, hovercolor, children }: SocialIconButtonProps) {
  return (
    <IconButton
      LinkComponent={RouterLink}
      href={link}
      sx={{
        color: 'text.secondary',
        '&:hover': { color: hovercolor },
      }}
    >
      {children}
    </IconButton>
  );
}
