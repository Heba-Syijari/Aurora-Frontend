import { Box } from '@mui/material';
import Iconify from 'src/components/iconify';
import { ComponentVariation, ComponentVariationType } from 'src/types/project';
import { BlogIcon, ContactIcon, ContentIcon, HeroIcon } from './icons';

export type TabItem = {
  type: ComponentVariationType;
  icon: React.ReactElement;
  title: string;
  description: string;
};

export const tabs: TabItem[] = [
  {
    title: 'Hero',
    description: 'Add hero section',
    type: ComponentVariation.HERO,
    icon: <HeroIcon sx={{ width: 32, height: 32 }} />,
  },
  {
    title: 'About',
    description: 'Add about content',
    type: ComponentVariation.ABOUT,
    icon: <ContentIcon sx={{ width: 32, height: 32 }} />,
  },
  {
    title: 'FAQs',
    description: 'Add FAQs section',
    type: ComponentVariation.FAQ,
    icon: <Iconify icon="ri:information-2-line" width={30} sx={{ overflow: 'initial' }} />,
  },
  {
    title: 'Blog',
    description: 'Add blog',
    type: ComponentVariation.BLOGS,
    icon: <BlogIcon sx={{ width: 32, height: 32 }} />,
  },
  // {
  //   title: 'Impact',
  //   description: 'Display the impacts',
  //   type: ComponentVariation.IMPACT,
  //   icon: <Iconify icon="ri:service-line" width={30} sx={{ overflow: 'initial' }} />,
  // },
  {
    title: 'Video',
    description: 'Display video',
    type: ComponentVariation.VIDEO,
    icon: <Iconify icon="ph:video" width={30} sx={{ overflow: 'initial' }} />,
  },
  // {
  //   title: 'Importance of',
  //   description: 'Show topic importance',
  //   type: ComponentVariation.IMPORTANCE,
  //   icon: <FeatureIcon sx={{ width: 32, height: 32 }} />,
  // },
  // {
  //   title: 'Special Time',
  //   description: 'Display a special time',
  //   type: ComponentVariation.SPECIAL_TIMES,
  //   icon: <Iconify icon="ri:star-line" width={30} sx={{ overflow: 'initial' }} />,
  // },
  {
    title: 'Contact',
    description: 'Display contact form',
    type: ComponentVariation.CONTACT,
    icon: <ContactIcon sx={{ width: 32, height: 32 }} />,
  },
  {
    title: 'Team',
    description: 'Add Team Section',
    type: ComponentVariation.TEAM,
    icon: <Iconify icon="ri:team-fill" width={30} sx={{ overflow: 'initial' }} />,
  },
  {
    title: 'Features',
    description: 'Add Features Section',
    type: ComponentVariation.FEATURES,
    icon: <Iconify icon="pajamas:issue-type-feature" width={30} sx={{ overflow: 'initial' }} />,
  },
  {
    title: 'Gallery',
    description: 'Add Gallery Section',
    type: ComponentVariation.GALLERY,
    icon: <Iconify icon="nrk:gallery" width={30} sx={{ overflow: 'initial' }} />,
  },
  {
    title: 'Privacy Policy',
    description: 'Add Privacy Policy Section',
    type: ComponentVariation.PRIVACY_POLICY,
    icon: <Iconify icon="ic:baseline-policy" width={30} sx={{ overflow: 'initial' }} />,
  },
  {
    title: 'Terms And Services',
    description: 'Add Terms And Services Section',
    type: ComponentVariation.TERMS_AND_SERVICES,
    icon: (
      <Iconify
        icon="material-symbols:design-services-outline"
        width={30}
        sx={{ overflow: 'initial' }}
      />
    ),
  },
  {
    title: 'Subscription',
    description: 'Add Subscription Section',
    type: ComponentVariation.SUBSCRIPTION,
    icon: (
      <Iconify
        icon="streamline:subscription-cashflow-solid"
        width={30}
        sx={{ overflow: 'initial' }}
      />
    ),
  },
  {
    title: 'How It Works',
    description: 'Add How It Works Section',
    type: ComponentVariation.HOW_IT_WORKS,
    icon: (
      <Iconify icon="material-symbols-light:work-alert" width={30} sx={{ overflow: 'initial' }} />
    ),
  },
  {
    title: 'Slider',
    description: 'Add Slider Section',
    type: ComponentVariation.SLIDER,
    icon: <Iconify icon="solar:slider-vertical-linear" width={30} sx={{ overflow: 'initial' }} />,
  },
  {
    title: 'Our Clients',
    description: 'Add Our Clients Section',
    type: ComponentVariation.OUR_CLIENTS,
    icon: <Iconify icon="ix:customer-filled" width={30} sx={{ overflow: 'initial' }} />,
  },
  {
    title: 'Our Solution',
    description: 'Add Our Solution Section',
    type: ComponentVariation.OUR_SOLUTION,
    icon: <Iconify icon="ion:bulb-outline" width={30} sx={{ overflow: 'initial' }} />,
  },
  {
    title: 'Message with Action',
    description: 'Add Message with Action Section',
    type: ComponentVariation.MWSSAGE_WITH_ACTION,
    icon: <Iconify icon="tabler:message-pause" width={30} sx={{ overflow: 'initial' }} />,
  },
  {
    title: 'Footer',
    description: 'Add Footer Section',
    type: ComponentVariation.FOOTER,
    icon: <Iconify icon="fluent-mdl2:footer" width={30} sx={{ overflow: 'initial' }} />,
  },
];

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

export function TabPanel({ children, value, index }: TabPanelProps) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
    >
      {value === index && <Box sx={{ p: 2 }}>{children}</Box>}
    </div>
  );
}

export function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}
