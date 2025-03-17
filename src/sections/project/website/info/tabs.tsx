import React from 'react';
import { Box, Tab as MuiTab, Tabs } from '@mui/material';
import type { TabProps as MuiTabProps } from '@mui/material';

type Props = {
  tabs: {
    label: string;
    panel: React.ReactNode;
  }[];
};

export default function TabsWrapper({ tabs }: Props) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box>
        <Tabs value={value} onChange={handleChange}>
          {tabs.map((tab, i) => (
            <Tab key={i} index={i} label={tab.label} />
          ))}
        </Tabs>
      </Box>

      {tabs.map((tab, i) => (
        <TabPanel key={i} value={value} index={i}>
          {tab.panel}
        </TabPanel>
      ))}
    </Box>
  );
}

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tab-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ py: 3 }}>{children}</Box>}
    </div>
  );
}

interface TabProps extends MuiTabProps {
  index: number;
}

function Tab({ index, sx, ...props }: TabProps) {
  return <MuiTab label="Info" id={`tab-${index}`} aria-controls={`tab-${index}`} {...props} />;
}
