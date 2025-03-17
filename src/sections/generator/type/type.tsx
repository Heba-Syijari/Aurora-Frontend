import { Grid, Stack } from '@mui/material';
import { useEffect, useState } from 'react';
import { useGetProjectTypes } from 'src/api/project';
import { ActionsGroup, SectionTitle } from '../common';
import TypeItem from './type-item';

export type TypeProps = {
  onSubmitClicked: (type: string) => void;
  projectType: string;
};

export default function Type({ onSubmitClicked, projectType }: TypeProps) {
  const { projectTypes, isLoading } = useGetProjectTypes();

  const [selectedType, setSelectedType] = useState<string>('STATIC');
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }, []);

  useEffect(() => {
    if (!isLoading) {
      setSelectedType((prev) => {
        if (!prev) {
          return projectType || projectTypes?.[0]?.value;
        }
        return prev;
      });
    }
  }, [isLoading, projectType, projectTypes]);

  const renderLoading = <div>Loading...</div>;

  const renderTargetTypes = (
    <Grid container spacing={2}>
      {projectTypes.map((type, i) => (
        <Grid key={type.title + i} item xs={12} sm={6} md={4}>
          <TypeItem
            key={type.title}
            selected={selectedType === type.value}
            onClick={() => {
              setSelectedType(type.value === 'DYNAMIC' ? 'STATIC' : type.value);
            }}
            {...type}
          />
        </Grid>
      ))}
    </Grid>
  );

  return (
    <Stack spacing={4}>
      <SectionTitle title="Step 1" description="What is the type of this website?" />

      <Stack justifyContent="space-between">
        {isLoading ? renderLoading : renderTargetTypes}
        <ActionsGroup
          primaryButtonProps={{
            onClick: () => {
              onSubmitClicked(selectedType);
            },
          }}
        />
      </Stack>
    </Stack>
  );
}
