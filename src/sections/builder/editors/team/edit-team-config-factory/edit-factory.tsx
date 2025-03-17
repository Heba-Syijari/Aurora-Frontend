import { Theme } from '@mui/material/styles';
import dynamic from 'next/dynamic';
import {
  TeamComponentName,
  TeamConfig,
  TeamOneConfig,
  TeamTwoConfig,
} from 'src/sections/builder/components/team/types';

const EditTeamOneConfig = dynamic(() => import('./edit-team-one-config'), { ssr: false });
const EditTeamTwoConfig = dynamic(() => import('./edit-team-two-config'), { ssr: false });
const EditTeamThreeFourConfig = dynamic(() => import('./edit-team-three-four-config'), {
  ssr: false,
});
type TeamComponentMapping = {
  [TeamComponentName.TEAM_ONE]: TeamOneConfig;
  [TeamComponentName.TEAM_TWO]: TeamTwoConfig;
  [TeamComponentName.TEAM_THREE]: TeamConfig;
  [TeamComponentName.TEAM_FOUR]: TeamConfig;
};

type ComponentProps<T extends TeamComponentName> = {
  name: T;
  defaultValue: TeamComponentMapping[T];
  onSave: (value: TeamComponentMapping[T]) => void;
  onCloseClicked: () => void;
  theme: Theme;
};

export default function EditFactory<T extends TeamComponentName>({
  name,
  defaultValue,
  onSave,
  onCloseClicked,
  theme,
}: ComponentProps<T>) {
  switch (name) {
    case TeamComponentName.TEAM_ONE:
      return (
        <EditTeamOneConfig
          defaultValue={defaultValue as TeamOneConfig}
          onSave={onSave as (value: TeamOneConfig) => void}
          onCloseClicked={onCloseClicked}
          theme={theme}
        />
      );
    case TeamComponentName.TEAM_TWO:
      return (
        <EditTeamTwoConfig
          defaultValue={defaultValue as TeamTwoConfig}
          onSave={onSave as (value: TeamTwoConfig) => void}
          onCloseClicked={onCloseClicked}
          theme={theme}
        />
      );
    case TeamComponentName.TEAM_THREE:
      return (
        <EditTeamThreeFourConfig
          defaultValue={defaultValue as TeamConfig}
          onSave={onSave as (value: TeamConfig) => void}
          onCloseClicked={onCloseClicked}
          theme={theme}
        />
      );
    case TeamComponentName.TEAM_FOUR:
      return (
        <EditTeamThreeFourConfig
          defaultValue={defaultValue as TeamConfig}
          onSave={onSave as (value: TeamConfig) => void}
          onCloseClicked={onCloseClicked}
          theme={theme}
        />
      );
    default:
      // eslint-disable-next-line react/jsx-no-useless-fragment
      return <></>;
  }
}
