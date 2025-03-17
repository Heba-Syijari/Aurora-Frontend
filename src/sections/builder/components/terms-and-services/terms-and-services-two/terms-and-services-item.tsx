import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import Iconify from 'src/components/iconify';
import { TermsAndServicesItemData } from '../types';

type Props = {
  data: TermsAndServicesItemData;
  titleColor: string;
  descriptionColor: string;
};

export function TermsAndServicesItem({ data, titleColor, descriptionColor }: Props) {
  const { description, title } = data;

  return (
    <Accordion
      sx={{
        boxShadow: '0px 1px 2px 0px #5569871A',
        borderRadius: '6px',
        p: 5,
        '&:before': { display: 'none' },
        '&.Mui-expanded': { margin: 0 },
      }}
    >
      <AccordionSummary
        expandIcon={<Iconify icon="uil:arrow-circle-up" color="primary.main" width={24} />}
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
