import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { TextData } from 'src/sections/builder/types';

// ------------------------------------------------

const ColoredText = styled('span')(({ theme }) => ({
  color: theme.palette.common.white,
  backgroundColor: theme.palette.primary.main,
  textTransform: 'capitalize',
  display: 'inline-block',
}));

function getTextParts(text: string) {
  const result = { firstText: '', middleText: '', lastText: '' };

  const textParts = text.split(' ');

  if (textParts.length === 1) {
    result.firstText = text[0];
  } else if (textParts.length === 2) {
    result.firstText = text[0];
    result.middleText = text[1];
  } else if (textParts.length > 2) {
    const chunkLength = Math.round(textParts.length / 3);
    let availableTextPartsCount = textParts.length;

    result.firstText = textParts.slice(0, chunkLength).join(' ');
    availableTextPartsCount -= chunkLength;

    result.middleText = textParts.slice(chunkLength, chunkLength * 2).join(' ');
    availableTextPartsCount -= chunkLength;

    result.lastText = textParts.slice(-availableTextPartsCount).join(' ');
  }

  return result;
}

// ------------------------------------------------

type HeroTwoTitleProps = {
  title: TextData;
};

export function HeroTwoTitle({ title }: HeroTwoTitleProps) {
  const { text } = title;

  const { firstText, lastText, middleText } = getTextParts(text);

  const middleTextChunks = middleText.split(' ');

  return (
    <Typography
      variant="h1"
      fontSize={{ xs: 64, md: 72, lg: 88 }}
      lineHeight="109%"
      letterSpacing="-0.88px"
      color={title.color}
      textTransform="capitalize"
      textAlign="center"
    >
      <span>{firstText}</span>{' '}
      {middleTextChunks.map((t, i) => (
        <ColoredText key={t}>
          {t}
          {i + 1 !== middleTextChunks.length && <>&nbsp;</>}
        </ColoredText>
      ))}{' '}
      <span>{lastText}</span>
    </Typography>
  );
}
