import { Box, FormControlLabel, Grid, Radio, Stack, Tabs, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { useGetComponents } from 'src/api/component';
import Iconify from 'src/components/iconify';
import Image from 'src/components/image';
import { BaseLoadingButton } from 'src/components/styled/button';
import { StyledRadioGroupReact } from 'src/components/styled/radio';
import { IconWrapper, StyledTab } from 'src/sections/builder/editors/section/add-section/styled';
import {
  TabItem,
  TabPanel,
  a11yProps,
  tabs,
} from 'src/sections/builder/editors/section/add-section/tabs';
import { ComponentVariation, ComponentVariationType, IComponent } from 'src/types/project';
import { ActionsGroup, SectionTitle } from '../common';
import { WebsiteSectionsType } from '../view/types';

export type IntellectualPropertyProps = {
  data: WebsiteSectionsType;
  onSubmitClicked: (data: WebsiteSectionsType) => void;
  onCancelClicked: () => void;
  withActionsGroup?: boolean;
};

export default function SectionSelection({
  data,
  onSubmitClicked,
  onCancelClicked,
  withActionsGroup = true,
}: IntellectualPropertyProps) {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }, []);

  const [tabIndex, setTabIndex] = useState(0);
  const [orderedTabs, setOrderedTabs] = useState<TabItem[]>(tabs);
  const [selectedTabs, setSelectedTabs] = useState<WebsiteSectionsType>(data);

  const { components } = useGetComponents();
  const updateTabComponent = (typeToUpdate: ComponentVariationType, newComponent: number) => {
    setSelectedTabs((prev) =>
      prev.map((tab) => (tab.type === typeToUpdate ? { ...tab, component: newComponent } : tab))
    );
  };

  const handleTabChange = (event: React.SyntheticEvent, newIndex: number) => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
    setTabIndex(newIndex);
    const firstComponent = components.find((c: IComponent) => c.type === tabs[newIndex].type);
    const selectedTab = orderedTabs[newIndex];
    setSelectedTabs((prev) => {
      const isTabSelected = prev.some((tab) => tab.type === selectedTab.type);
      if (isTabSelected) return prev.filter((tab) => tab.type !== selectedTab.type);
      return [...prev, { type: selectedTab.type, component: firstComponent?.id ?? 0 }];
    });
  };

  const handleComponentChange = (
    event: React.SyntheticEvent,
    newValue: string,
    currentTabType: ComponentVariationType
  ) => {
    setSelectedTabs((prev) =>
      prev.map((tab) =>
        tab.type === currentTabType ? { ...tab, component: Number(newValue) } : tab
      )
    );
  };

  const handleDragEnd = (result: any) => {
    if (!result.destination) return;
    const reorderedTabs = reorderTabs(result);
    setOrderedTabs(reorderedTabs);

    const updatedSelectedTabs = reorderedTabs
      .map((tab) => selectedTabs.find((selected) => selected.type === tab.type))
      .filter(Boolean) as WebsiteSectionsType;
    setSelectedTabs(updatedSelectedTabs);
  };

  const reorderTabs = (result: any) => {
    const items = Array.from(orderedTabs);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    return items;
  };

  const moveFooterToEnd = (sections: WebsiteSectionsType) => {
    const firstFooterLayout = components.find(
      (component) => component.type === ComponentVariation.FOOTER
    )!;
    const footer = sections.find((tab) => tab.type === ComponentVariation.FOOTER);
    const filteredTabs = sections.filter(
      (tab) => tab.type !== ComponentVariation.FOOTER
    ) as WebsiteSectionsType;
    if (footer) {
      filteredTabs.push(footer);
      return filteredTabs;
    }
    return [...filteredTabs, { component: firstFooterLayout?.id, type: firstFooterLayout?.type }];
  };

  return (
    <Stack spacing={4}>
      <SectionTitle
        title="Step 8"
        description={
          withActionsGroup
            ? 'The section selection allows you to customize your project by selecting the sections you want to include.'
            : ''
        }
      />

      <Stack justifyContent="space-between">
        <Grid container sx={{ backgroundColor: (theme) => theme.palette.background.paper }}>
          <Grid item sm={12} md={4}>
            <DragDropContext onDragEnd={handleDragEnd}>
              <Droppable droppableId="tabs">
                {(provided) => (
                  <Tabs
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    orientation="vertical"
                    value={tabIndex}
                    aria-label="component-tabs"
                    TabIndicatorProps={{ sx: { display: 'none' } }}
                    sx={{ borderRight: 1, borderColor: 'divider' }}
                  >
                    {orderedTabs.map((tab, index) => (
                      <DraggableTab
                        key={tab.type}
                        tab={tab}
                        index={index}
                        selectedTabs={selectedTabs}
                        tabIndex={tabIndex}
                        onTabChange={handleTabChange}
                      />
                    ))}
                    {provided.placeholder}
                  </Tabs>
                )}
              </Droppable>
            </DragDropContext>
          </Grid>

          <Grid
            item
            sm={12}
            md={8}
            sx={{
              '& .MuiFormControlLabel-root': {
                justifyContent: 'center!important',
              },
            }}
          >
            {orderedTabs.map((tab, index) => (
              <TabPanel value={tabIndex} index={index} key={index}>
                <StyledRadioGroupReact
                  name="componentId"
                  value={
                    selectedTabs.find((selectedTab) => selectedTab.type === tab.type)?.component
                  }
                  onChange={(e, v) => handleComponentChange(e, v, tab.type)}
                  sx={{ gap: (theme) => theme.spacing(2) }}
                >
                  {generateTabOptions(tab)}
                </StyledRadioGroupReact>
              </TabPanel>
            ))}
          </Grid>
        </Grid>
        {!withActionsGroup ? (
          <BaseLoadingButton
            variant="contained"
            color="primary"
            onClick={() => {
              const updatedTabs = moveFooterToEnd(selectedTabs);
              onSubmitClicked(updatedTabs);
            }}
            type="button"
          >
            save selected section
          </BaseLoadingButton>
        ) : (
          <ActionsGroup
            primaryButtonProps={{
              type: 'button',
              onClick: () => {
                const updatedTabs = moveFooterToEnd(selectedTabs);
                console.log({ updatedTabs });

                onSubmitClicked(updatedTabs);
              },
            }}
            secondaryButtonProps={{ onClick: onCancelClicked }}
          />
        )}
      </Stack>
    </Stack>
  );

  function generateTabOptions(tab: TabItem) {
    return components
      .filter((component: IComponent) => component.type === tab.type)
      .map((component: IComponent) => (
        <FormControlLabel
          key={component.id}
          value={component.id}
          control={<Radio />}
          label={
            <Box key={component.id} onClick={() => updateTabComponent(tab.type, component.id)}>
              <Image
                src={component.image}
                alt={component.name}
                width="100%"
                sx={{ borderRadius: '8px' }}
              />
            </Box>
          }
        />
      ));
  }
}

const DraggableTab = ({
  tab,
  index,
  selectedTabs,
  tabIndex,
  onTabChange,
}: {
  tab: TabItem;
  index: number;
  selectedTabs: WebsiteSectionsType;
  tabIndex: number;
  onTabChange: (event: React.SyntheticEvent, newIndex: number) => void;
}) => (
  <Draggable key={tab.type + index} draggableId={tab.type} index={index}>
    {(provided) => (
      <StyledTab
        onClick={(e) => onTabChange(e, index)}
        sx={{ bgcolor: index !== tabIndex ? '#fff' : 'primary.light', maxWidth: 1000 }}
        label={<TabLabel tab={tab} selectedTabs={selectedTabs} />}
        icon={<IconWrapper>{tab.icon}</IconWrapper>}
        iconPosition="start"
        {...a11yProps(index)}
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
      />
    )}
  </Draggable>
);

const TabLabel = ({ tab, selectedTabs }: { tab: TabItem; selectedTabs: WebsiteSectionsType }) => {
  const selectedIndex = selectedTabs.findIndex((selectedTab) => selectedTab.type === tab.type);
  return (
    <Stack flexDirection="row" justifyContent="space-between" alignItems="center" flex={1}>
      <Stack alignItems="flex-start">
        <Typography variant="h6" sx={{ textAlign: 'left !important' }}>
          {tab.title}
        </Typography>
        <Typography
          variant="body2"
          color="text.tertiary"
          fontWeight={500}
          sx={{ textAlign: 'left !important' }}
        >
          {tab.description}
        </Typography>
      </Stack>
      <Iconify icon="ri:arrow-right-s-line" width={24} />
      {selectedIndex >= 0 && (
        <Box
          sx={{
            backgroundColor: 'primary.main',
            width: 35,
            height: 35,
            position: 'absolute',
            top: 0,
            borderRadius: '4px',
            left: 'calc(100% - 35px)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1,
          }}
        >
          <Typography variant="h6" color="background.secondary" fontWeight={600}>
            {selectedIndex + 1}
          </Typography>
        </Box>
      )}
    </Stack>
  );
};
