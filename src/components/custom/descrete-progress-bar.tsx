import React, { useEffect, useReducer } from 'react';
import { LinearProgress, Stack, Typography } from '@mui/material';

type ProgressState = 'initial' | 'error' | 'warning' | 'success';

type State = {
  progressState: ProgressState;
};

type Action = {
  type: 'change-value';
  payload: { value: number };
};

type Props = {
  value: number;
  barsCount?: number;
  message?: string | Record<ProgressState, string>;
};

function reducer(state: State, action: Action): State {
  const { type, payload } = action;

  switch (type) {
    case 'change-value':
      if (payload.value >= 100) {
        return { progressState: 'success' };
      }
      if (payload.value >= 60) {
        return { progressState: 'warning' };
      }
      if (payload.value >= 30) {
        return { progressState: 'error' };
      }
      return { progressState: 'initial' };

    default:
      return { ...state };
  }
}

export default function DescreteProgressBar({ value, barsCount = 3, message }: Props) {
  const [state, dispatch] = useReducer(reducer, { progressState: 'initial' });

  useEffect(() => {
    dispatch({ type: 'change-value', payload: { value } });
  }, [value]);

  return (
    <Stack spacing={1}>
      <Stack
        flexDirection="row"
        alignItems="center"
        gap={1}
        sx={{ color: (theme) => theme.palette.grey[300] }}
      >
        {[...new Array(barsCount)].map((_, i) => {
          const colored = value >= (100 / barsCount) * (i + 1);

          return (
            <LinearProgress
              key={i}
              variant="determinate"
              value={colored ? 100 : 0}
              sx={{ flex: 1, mt: 1, height: 8 }}
              color={
                state.progressState === 'initial' || !colored ? 'inherit' : state.progressState
              }
            />
          );
        })}
      </Stack>

      {message && (
        <Typography
          variant="body2"
          color={typeof message === 'string' ? 'inherit' : `${state.progressState}.main`}
        >
          {typeof message === 'string' ? message : message[state.progressState]}
        </Typography>
      )}
    </Stack>
  );
}
