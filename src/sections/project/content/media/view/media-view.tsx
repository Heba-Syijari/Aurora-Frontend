'use client';

import { Box, Container, Tab, Tabs } from '@mui/material';
import React, { useState } from 'react';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs/custom-breadcrumbs';
import Label from 'src/components/label/label';
import { useSettingsContext } from 'src/components/settings';
import { paths } from 'src/routes/paths';
import { MediaType, mediaTypes } from 'src/types/media';
import { useMedia } from '../hooks/use-media';
import MediaList from '../media-list';

export default function MediaView() {
  const settings = useSettingsContext();

  const { projectId, projectName, media, handleMediaDelete, handleMediaSubmit } = useMedia();

  const [activeTab, setActiveTab] = useState<MediaType>(mediaTypes[0]);

  const handleTabChange = (event: React.SyntheticEvent, newValue: MediaType) => {
    setActiveTab(newValue);
  };

  return (
    <Container maxWidth={settings.themeStretch ? false : 'xl'}>
      <CustomBreadcrumbs
        heading="Media"
        links={[
          { name: 'Dashboard', href: paths.dashboard.root },
          { name: projectName, href: paths.project(projectId).root },
          { name: 'Media' },
        ]}
        sx={{ mb: { xs: 3, md: 5 } }}
      />

      <Tabs value={activeTab} onChange={handleTabChange} sx={{ mb: { xs: 3, md: 5 } }}>
        {mediaTypes.map((tab) => (
          <Tab
            key={tab}
            iconPosition="end"
            value={tab}
            label={tab.toLowerCase()}
            icon={
              <Label
                size="small"
                shape="rounded"
                variant={tab === 'AUDIO' ? 'filled' : 'soft'}
                color={(tab === 'VIDEO' && 'info') || 'default'}
              >
                {media[tab].length}
              </Label>
            }
            sx={{ textTransform: 'capitalize' }}
          />
        ))}
      </Tabs>

      {mediaTypes.map((type) => (
        <CustomTabPanel value={type} activeValue={activeTab} key={type}>
          {/* {type === 'IMAGE' && (
            <ImageList
              images={media[type]}
              handleMediaDelete={handleMediaDelete}
              handleMediaSubmit={handleMediaSubmit}
            />
          )}

          {type !== 'IMAGE' && (
            <MediaList
              type={type}
              items={media[type]}
              handleMediaDelete={handleMediaDelete}
              handleMediaSubmit={handleMediaSubmit}
            />
          )} */}

          <MediaList
            type={type}
            items={media[type]}
            handleMediaDelete={handleMediaDelete}
            handleMediaSubmit={handleMediaSubmit}
          />
        </CustomTabPanel>
      ))}
    </Container>
  );
}

interface TabPanelProps {
  children?: React.ReactNode;
  value: MediaType;
  activeValue: MediaType;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, activeValue, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={activeValue !== value}
      id={`tabpanel-${value}`}
      aria-labelledby={`tab-${value}`}
      {...other}
    >
      {activeValue === value && <Box>{children}</Box>}
    </div>
  );
}
