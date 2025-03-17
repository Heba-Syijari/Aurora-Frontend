import dynamic from 'next/dynamic';
import { TeamFourProps } from './team-four/team-four';
import { TeamOneProps } from './team-one/team-one';
import { TeamThreeProps } from './team-three/team-three';
import { TeamTwoProps } from './team-two/team-two';
import { TeamComponentName } from './types';

const TeamOne = dynamic(() => import('./team-one'), { ssr: false });
const TeamTwo = dynamic(() => import('./team-two'), { ssr: false });
const TeamThree = dynamic(() => import('./team-three'), { ssr: false });
const TeamFour = dynamic(() => import('./team-four'), { ssr: false });

type ComponentProps =
  | (TeamOneProps & {
      name: TeamComponentName.TEAM_ONE;
    })
  | (TeamTwoProps & {
      name: TeamComponentName.TEAM_TWO;
    })
  | (TeamThreeProps & {
      name: TeamComponentName.TEAM_THREE;
    })
  | (TeamFourProps & {
      name: TeamComponentName.TEAM_FOUR;
    });

type Props = ComponentProps & {
  editMode?: boolean;
};

export default function TeamFactory({ name, data, setLocalData, ...rest }: Props) {
  switch (name) {
    case TeamComponentName.TEAM_ONE:
      return <TeamOne data={data} setLocalData={setLocalData} {...rest} />;

    case TeamComponentName.TEAM_TWO:
      return <TeamTwo data={data} setLocalData={setLocalData} {...rest} />;

    case TeamComponentName.TEAM_THREE:
      return <TeamThree data={data} setLocalData={setLocalData} {...rest} />;

    case TeamComponentName.TEAM_FOUR:
      return <TeamFour data={data} setLocalData={setLocalData} {...rest} />;

    default:
      return null;
  }
}
