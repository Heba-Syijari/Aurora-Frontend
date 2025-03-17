import { Grid, Stack } from '@mui/material';
import { useEffect, useState } from 'react';
import { useGetProjectTargetTypes } from 'src/api/project';
import { ActionsGroup, SectionTitle } from '../common';
import PurposeItem from './purpose-item';

export type PurposeProps = {
  onSubmitClicked: (purpose: string) => void;
  purpose: string;
  onCancelClicked: () => void;
};

export default function Purpose({ onSubmitClicked, purpose, onCancelClicked }: PurposeProps) {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }, []);

  const { targetTypes, isLoading } = useGetProjectTargetTypes();

  const [selectedType, setSelectedType] = useState<string>('');

  useEffect(() => {
    if (!isLoading) {
      setSelectedType(purpose || targetTypes?.[0]?.title);
    }
  }, [isLoading, purpose, targetTypes]);

  const renderLoading = <div>Loading...</div>;

  const renderTargetTypes = (
    <Grid container spacing={2}>
      {targetTypes.map((type, i) => (
        <Grid key={type.title + i} item xs={12} sm={6} md={3}>
          <PurposeItem
            key={type.title}
            selected={selectedType === type.title}
            onClick={() => {
              setSelectedType(type.title);
            }}
            {...type}
          />
        </Grid>
      ))}
    </Grid>
  );

  return (
    <Stack spacing={4}>
      <SectionTitle title="Step 2" description="What is the target of creating this website?" />

      <Stack justifyContent="space-between">
        {isLoading ? renderLoading : renderTargetTypes}
        <ActionsGroup
          primaryButtonProps={{
            onClick: () => {
              onSubmitClicked(selectedType);
            },
          }}
          secondaryButtonProps={{
            onClick: () => {
              onCancelClicked();
            },
          }}
        />
      </Stack>
    </Stack>
  );
}
