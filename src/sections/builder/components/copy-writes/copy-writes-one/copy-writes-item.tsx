import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import { useState } from 'react';
import Iconify from 'src/components/iconify';
import { CopyWriteItemData } from '../types';

type Props = {
  data: CopyWriteItemData;
  titleColor: string;
  descriptionColor: string;
};

export function CopyWriteItem({ data, titleColor, descriptionColor }: Props) {
  const { description, title } = data;

  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Accordion
      sx={{
        boxShadow: '0px 1px 2px 0px #5569871A',
        borderRadius: '6px',
        p: 5,
        '&:before': { display: 'none' },
        '&.Mui-expanded': { margin: 0 },
      }}
      onChange={(event, expanded) => setIsExpanded(expanded)}
    >
      <AccordionSummary
        expandIcon={
          <Iconify
            icon={isExpanded ? 'tabler:minus' : 'tabler:plus'}
            color="primary.main"
            width={24}
          />
        }
      >
        <Typography variant="h5" color={titleColor}>
          {title}
        </Typography>
      </AccordionSummary>

      <AccordionDetails>
        <Typography variant="body1" color={descriptionColor}>
          {description}
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
}
