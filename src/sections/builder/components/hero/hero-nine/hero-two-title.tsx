import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { TextData } from 'src/sections/builder/types';

// ------------------------------------------------

const ColoredText = styled('span')(({ theme }) => ({
  color: theme.palette.primary.main,
  textTransform: 'capitalize',
  display: 'inline-block',
}));

type HeroTwoTitleProps = {
  title: TextData;
};

export function HeroNineTitle({ title }: HeroTwoTitleProps) {
  const { text } = title;

  const textParts = text.split(' ');
  const lines = [];

  for (let i = 0; i < textParts.length; i += 2) {
    const pair = textParts.slice(i, i + 2);
    lines.push(pair);
  }

  return (
    <Typography variant="h3" letterSpacing="-0.88px" color={title.color} textTransform="capitalize">
      {lines.map((line, index) => (
        <div key={index}>
          <span>{line[0]}</span>
          {line[1] && <ColoredText>&nbsp;{`${line[1]}`}</ColoredText>}
        </div>
      ))}
    </Typography>
  );
}
