import { Chip } from '@mui/material';
import { styled } from '@mui/material/styles';
import PaginatedItemsList from 'src/components/items-list/paginated-items-list';

type DomainNameChipProps = {
  selected?: boolean;
};

const DomainNameChip = styled(Chip)<DomainNameChipProps>(({ theme, selected }) => {
  const selectedAttributes = {
    backgroundColor: theme.palette.background.neutral,
    color: theme.palette.primary.main,
    borderColor: theme.palette.primary.main,
  };

  return {
    width: '100%',
    backgroundColor: theme.palette.background.neutral,
    color: theme.palette.text.primary,
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: theme.spacing(0.5),
    transition: 'all 0.15s',
    '&:hover': { ...selectedAttributes },
    ...(selected ? selectedAttributes : {}),
  };
});

type DomainNamesResultListProps = {
  selectedDomainName: string;
  domainNames: string[];
  onDomainClick: (domain: string) => void;
  onClearClick?: () => void;
};

export default function DomainNamesResultList({
  selectedDomainName,
  domainNames,
  onDomainClick,
  onClearClick,
}: DomainNamesResultListProps) {
  return (
    <PaginatedItemsList
      items={domainNames}
      itemsPerChunk={8}
      itemsInRow={2}
      renderItem={(item) => (
        <DomainNameChip
          label={item}
          onClick={() => {
            onDomainClick(item);
          }}
          selected={selectedDomainName === item}
        />
      )}
      onClearClick={onClearClick}
    />
  );
}
