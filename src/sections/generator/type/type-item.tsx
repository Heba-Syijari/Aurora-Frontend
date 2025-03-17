import { Card, Typography } from '@mui/material';

// ----------------------------------------------------------------------

type PurposeItemProps = {
  title: string;
  onClick: () => void;
  selected?: boolean;
};

export default function TypeItem({ title, onClick, selected = false }: PurposeItemProps) {
  return (
    <Card
      className={selected ? 'selected' : ''}
      sx={{
        height: '120px',
        cursor: 'pointer',
        display: 'grid',
        placeItems: 'center',
        borderRadius: (theme) => theme.spacing(1),
        boxShadow: (theme) => `0 0 0 1px ${theme.palette.divider}`,
        backgroundColor: (theme) => theme.palette.background.neutral,
        '&.selected, &:hover':
          title === 'Static Website'
            ? {
                boxShadow: (theme) => `0 0 0 1px ${theme.palette.primary.main}`,
                backgroundColor: (theme) => theme.palette.background.primary,
                '& p': {
                  color: (theme) => theme.palette.primary.main,
                },
              }
            : {},
      }}
      onClick={onClick}
    >
      <Typography
        className={selected ? 'selected' : ''}
        fontSize={18}
        textTransform="capitalize"
        sx={{
          fontWeight: 500,
          '&.selected': {
            color: (theme) => theme.palette.primary.main,
            fontWeight: 600,
          },
        }}
      >
        {title}
        {title === 'Dynamic Website' && (
          <Typography textTransform="lowercase" textAlign="center" color="#A9B2BC">
            {' '}
            soon{' '}
          </Typography>
        )}
      </Typography>
    </Card>
  );
}
