import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import Iconify from 'src/components/iconify';
import { FAQItemData } from '../types';

type Props = {
  data: FAQItemData;
  questionColor: string;
  answerColor: string;
};

export function FAQFourItem({ data, answerColor, questionColor }: Props) {
  const { question, answer } = data;

  return (
    <Accordion
      sx={{
        boxShadow: '0px 1px 2px 0px #5569871A',
        backgroundColor: 'background.secondary',

        borderRadius: '6px',
        p: 5,
        '&:before': { display: 'none' },
        '&.Mui-expanded': { margin: 0 },
      }}
    >
      <AccordionSummary
        expandIcon={<Iconify icon="uil:arrow-circle-up" color="primary.main" width={24} />}
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
