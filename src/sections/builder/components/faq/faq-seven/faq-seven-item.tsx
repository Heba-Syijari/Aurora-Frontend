import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import { lighten, useTheme } from '@mui/material/styles';
import React, { useMemo } from 'react';
import Iconify from 'src/components/iconify';
import { getPaletteColorsMap } from 'src/sections/builder/editors/common/colors';
import { FAQItemData } from '../types';

type Props = {
  data: FAQItemData;
  questionColor: string;
  answerColor: string;
};

export function FAQSevenItem({ data, answerColor, questionColor }: Props) {
  const { question, answer } = data;

  // to handle the Accordion status if it is expanded or not
  const [expanded, setExpanded] = React.useState<boolean>(false);
  const handleChange = () => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded);
  };
  const expandedIcon = (
    <Iconify icon="emojione-monotone:up-arrow" color="secondary.main" width={24} />
  );
  const unExpandedIcon = <Iconify icon="ei:arrow-right" color="secondary.main" width={35} />;

  const theme = useTheme();
  const paletteColorsMap = useMemo(() => getPaletteColorsMap(theme.palette), [theme.palette]);
  const backgroundColor = paletteColorsMap['background.neutral'];
  const lighterbackgroundColor = lighten(backgroundColor, 0.8);

  const shadowColor = paletteColorsMap['background.secondary'];
  const lightershadowColor = lighten(shadowColor, 0.8);
  return (
    <Accordion
      expanded={expanded}
      onChange={handleChange()}
      sx={{
        boxShadow: `0px 0px 20px 0px ${lightershadowColor}`,
        backgroundColor: lighterbackgroundColor,
        borderRadius: '15px!important',
        p: 1,
        '&:before': { display: 'none' },
        '&.Mui-expanded': {
          border: 2,
          borderColor: 'secondary.main',
          margin: 0,
        },
      }}
    >
      <AccordionSummary
        // {expanded ?:}
        expandIcon={expanded ? expandedIcon : unExpandedIcon}
      >
        <Typography variant="h5" fontWeight={500} color={questionColor}>
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
