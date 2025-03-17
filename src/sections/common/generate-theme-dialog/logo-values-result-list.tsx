import { Chip } from '@mui/material';
import { styled } from '@mui/material/styles';
import PaginatedItemsList from 'src/components/items-list/paginated-items-list';

type LogoValueChipProps = {
  selected?: boolean;
  image?: boolean;
};

const LogoValueChip = styled(Chip)<LogoValueChipProps>(({ theme, selected, image }) => {
  const selectedAttributes = image
    ? {
        boxShadow: `0 0 0 3px ${theme.palette.primary.main}`,
      }
    : {
        backgroundColor: theme.palette.background.primary,
        color: theme.palette.primary.main,
        boxShadow: `0 0 0 1px ${theme.palette.primary.main}`,
      };

  return image
    ? {
        display: 'block',
        height: 'auto',
        borderRadius: theme.spacing(1),
        overflow: 'hidden',
        ...(selected ? selectedAttributes : {}),
        '&:hover': { ...selectedAttributes },
        '& .MuiChip-label': {
          display: 'block',
          padding: 0,
        },
      }
    : {
        width: '100%',
        backgroundColor: theme.palette.background.neutral,
        color: theme.palette.text.primary,
        border: `1px solid ${theme.palette.divider}`,
        borderRadius: theme.spacing(0.5),
        ...(selected ? selectedAttributes : {}),
        '&:hover': { ...selectedAttributes },
      };
});

type LogoValuesResultListProps = {
  selectedValue: string;
  values: string[];
  onValueClick: (value: string) => void;
  onClearClick?: () => void;
  valueType: 'image' | 'text';
};

export function LogoValuesResultList({
  selectedValue,
  values,
  onValueClick,
  onClearClick,
  valueType,
}: LogoValuesResultListProps) {
  const isText = valueType === 'text';

  return (
    <PaginatedItemsList
      items={values}
      itemsPerChunk={isText ? 8 : 4}
      itemsInRow={2}
      renderItem={(item) => (
        <LogoValueChip
          label={
            isText ? (
              item
            ) : (
              <img
                src={item}
                alt="logo"
                style={{ display: 'block', width: '100%', objectFit: 'cover' }}
              />
            )
          }
          onClick={() => {
            onValueClick(item);
          }}
          selected={selectedValue === item}
          image={!isText}
        />
      )}
      onClearClick={onClearClick}
    />
  );
}
