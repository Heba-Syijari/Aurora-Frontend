import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import Iconify from 'src/components/iconify';
import { FAQItemData } from '../types';

type Props = {
  data: FAQItemData;
  questionColor: string;
  answerColor: string;
};

export function FAQTwoItem({ data, answerColor, questionColor }: Props) {
  const { question, answer } = data;

  return (
    <Accordion
      sx={{ background: 'none', '&:before': { display: 'none' } }}
      elevation={0}
      disableGutters
    >
      <AccordionSummary
        expandIcon={<Iconify icon="uil:arrow-circle-up" color="background.neutral" width={24} />}
      >
        <Typography variant="h5" color={questionColor}>
          {question}
        </Typography>
      </AccordionSummary>

      <AccordionDetails>
        <Typography variant="body1" color={answerColor}>
          {answer}
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
}
