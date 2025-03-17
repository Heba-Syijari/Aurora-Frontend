import { Stack, Typography } from '@mui/material';
import { EditTextWrapper } from 'src/sections/builder/editors/text';
import { HowItWorksOneData, HowItWorksOneItemData } from '../types';
import { StageImage, StageType } from './stage-image';

type Props = {
  data: HowItWorksOneItemData[];
  index: number;
  editMode?: boolean;
  setLocalData: (v: Partial<HowItWorksOneData>) => void;
};

export default function HowItWorksOneDataItem({ data, setLocalData, editMode, index }: Props) {
  const { description, title } = data[index];

  const stagesEnum: Record<number, StageType> = {
    0: 'one',
    1: 'two',
    2: 'three',
    3: 'four',
  };
  return (
    <Stack spacing={1} alignItems="center" justifyContent="center" minHeight={210}>
      <StageImage stage={stagesEnum[index]} />
      <EditTextWrapper
        label="Title"
        defaultValue={title}
        onSave={(v) => {
          const currentStages = data[index];
          currentStages.title = v;
          const updatedStages = [...data, ...[currentStages]];
          setLocalData({ stages: { ...data, ...updatedStages } });
        }}
        editMode={editMode}
        getMetadataInfo={() => ({ itemType: 'title', sectionType: 'Feature' })}
      >
        <Typography
          variant="body1"
          color={title.color}
          fontWeight={600}
          sx={{
            display: '-webkit-box',
            overflow: 'hidden',
            WebkitBoxOrient: 'vertical',
            WebkitLineClamp: 1,
            textOverflow: 'ellipsis',
            overflowY: 'hidden',
            textTransform: 'capitalize',
          }}
        >
          {title.text}
        </Typography>
      </EditTextWrapper>
      <EditTextWrapper
        label="Description"
        defaultValue={description}
        onSave={(v) => {
          const currentStages = data[index];
          currentStages.description = v;
          const updatedStages = [...data, ...[currentStages]];
          setLocalData({ stages: { ...data, ...updatedStages } });
        }}
        editMode={editMode}
        getMetadataInfo={() => ({ itemType: 'description', sectionType: 'how it works' })}
      >
        <Typography
          variant="body2"
          color={description.color}
          sx={{
            display: '-webkit-box',
            overflow: 'hidden',
            WebkitBoxOrient: 'vertical',
            WebkitLineClamp: 3,
            textOverflow: 'ellipsis',
            overflowY: 'hidden',
            textAlign: 'center',
          }}
        >
          {description.text}
        </Typography>
      </EditTextWrapper>
    </Stack>
  );
}
