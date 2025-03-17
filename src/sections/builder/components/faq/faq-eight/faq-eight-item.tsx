import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import { alpha, darken, useTheme } from '@mui/material/styles';
import { useMemo } from 'react';
import Iconify from 'src/components/iconify';
import { getPaletteColorsMap } from 'src/sections/builder/editors/common/colors';
import { FAQItemData } from '../types';

type Props = {
  data: FAQItemData;
  questionColor: string;
  answerColor: string;
};

export function FAQEightItem({ data, answerColor, questionColor }: Props) {
  const { question, answer } = data;
  const theme = useTheme();
  const paletteColorsMap = useMemo(() => getPaletteColorsMap(theme.palette), [theme.palette]);
  const baseColor = paletteColorsMap['common.neutral'];
  const lighterColor = alpha(baseColor, 0.5);
  const darkenColor = darken(baseColor, 0.1);

  return (
    <Accordion
      sx={{
        background: 'none',
        '&:before': { display: 'none' },
        borderBottom: 1,
        borderBottomColor: darkenColor,
        paddingY: 1,
      }}
      elevation={0}
      disableGutters
    >
      <AccordionSummary expandIcon={<Iconify icon="mingcute:up-fill" color="black" width={24} />}>
        <Typography fontWeight={400} variant="h5" color={questionColor}>
          {question}
        </Typography>
      </AccordionSummary>

      <AccordionDetails>
        <Typography fontWeight={300} variant="body1" color={answerColor}>
          {answer}
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
}
