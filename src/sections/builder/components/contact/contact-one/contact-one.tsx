import { Box, Chip, Container, Grid, Stack, Typography } from '@mui/material';
import { useResponsive } from 'src/hooks/use-responsive';
import { EditMapWrapper } from 'src/sections/builder/editors/map';
import { EditSocialIconWrapper } from 'src/sections/builder/editors/social-icon';
import { EditTextWrapper } from 'src/sections/builder/editors/text';
import { IIntellectualProperty } from 'src/types/intellectual-property';
import Socials from '../../common/socials/socials';
import { ContactInfo } from '../common';
import { ContacMap } from '../common/contact-map';
import { ContactOneData } from '../types';

export type ContactOneProps = {
  data: ContactOneData;
  setLocalData: (v: Partial<ContactOneData>) => void;
  projectId: string;
  intellectualProperty: IIntellectualProperty;
  editMode?: boolean;
};

export default function ContactOne({
  data,
  setLocalData,
  projectId,
  intellectualProperty,
  editMode,
}: ContactOneProps) {
  const { title, openingHours, mapConfig, address, email, number, socialsConfig } = data;
  const mdUp = useResponsive('up', 'md');

  const renderAdress = (
    <Stack
      height={1}
      justifyContent="flex-start"
      alignItems={{ md: 'flex-start', xs: 'center' }}
      spacing={2}
    >
      <Typography
        variant="h6"
        fontWeight={700}
        color="text.primary"
        letterSpacing="-0.02em"
        maxWidth={970}
      >
        Address
      </Typography>
      <ContactInfo
        itemType="address"
        defaultValues={{
          address,
          email,
          number,
        }}
        setLocalData={setLocalData}
        editMode={editMode}
      />
    </Stack>
  );

  const renderContact = (
    <Stack
      height={1}
      justifyContent="flex-start"
      alignItems={{ md: 'flex-start', xs: 'center' }}
      spacing={2}
    >
      <Typography
        variant="h6"
        fontWeight={700}
        color="text.primary"
        letterSpacing="-0.02em"
        maxWidth={970}
      >
        Contact
      </Typography>

      <ContactInfo
        itemType="email"
        defaultValues={{
          address,
          email,
          number,
        }}
        setLocalData={setLocalData}
        editMode={editMode}
      />
      <ContactInfo
        itemType="number"
        defaultValues={{
          address,
          email,
          number,
        }}
        setLocalData={setLocalData}
        editMode={editMode}
      />

      <EditSocialIconWrapper
        defaultValue={socialsConfig}
        onSave={(v) => {
          setLocalData({ socialsConfig: v });
        }}
        editMode={editMode}
      >
        <Socials
          socialsItems={socialsConfig.socials}
          socialIconsColor={socialsConfig.socialIconsColor}
          editMode={editMode}
          isCenter={!mdUp}
        />
      </EditSocialIconWrapper>
    </Stack>
  );

  const renderOpenningHours = (
    <Stack
      height={1}
      justifyContent="flex-start"
      alignItems={{ md: 'flex-start', xs: 'center' }}
      spacing={2}
    >
      <Typography
        variant="h6"
        fontWeight={700}
        color="text.primary"
        letterSpacing="-0.02em"
        maxWidth={970}
      >
        Openning Hours
      </Typography>
      <Stack direction="row" spacing={2}>
        <EditTextWrapper
          label="WorkTimes - Days"
          defaultValue={openingHours.workTimes.days}
          onSave={(v) => {
            setLocalData({
              openingHours: {
                ...openingHours,
                workTimes: {
                  ...openingHours.workTimes,
                  days: v,
                },
              },
            });
          }}
          editMode={editMode}
          getMetadataInfo={() => ({ itemType: 'WorkTimes - Days', sectionType: 'faq' })}
        >
          <Typography variant="body2" color={openingHours.workTimes.days.color} minWidth={100}>
            {openingHours.workTimes.days.text}
          </Typography>
        </EditTextWrapper>

        <EditTextWrapper
          label="WorkTimes - Hours"
          defaultValue={openingHours.workTimes.hours}
          onSave={(v) => {
            setLocalData({
              openingHours: {
                ...openingHours,
                workTimes: {
                  ...openingHours.workTimes,
                  hours: v,
                },
              },
            });
          }}
          editMode={editMode}
          getMetadataInfo={() => ({ itemType: 'WorkTimes - Hours', sectionType: 'faq' })}
        >
          <Typography variant="body2" color={openingHours.workTimes.hours.color} minWidth={150}>
            {openingHours.workTimes.hours.text}
          </Typography>
        </EditTextWrapper>
      </Stack>
      <Stack direction="row" spacing={2}>
        <EditTextWrapper
          label="First Holiday - Days"
          defaultValue={openingHours.firstHoliday.days}
          onSave={(v) => {
            setLocalData({
              openingHours: {
                ...openingHours,
                firstHoliday: {
                  ...openingHours.firstHoliday,
                  days: v,
                },
              },
            });
          }}
          editMode={editMode}
          getMetadataInfo={() => ({ itemType: 'First Holiday - Days', sectionType: 'faq' })}
        >
          <Typography variant="body2" color={openingHours.firstHoliday.days.color} minWidth={100}>
            {openingHours.firstHoliday.days.text}
          </Typography>
        </EditTextWrapper>

        <EditTextWrapper
          label="First Holiday - Hours"
          defaultValue={openingHours.firstHoliday.hours}
          onSave={(v) => {
            setLocalData({
              openingHours: {
                ...openingHours,
                firstHoliday: {
                  ...openingHours.firstHoliday,
                  hours: v,
                },
              },
            });
          }}
          editMode={editMode}
          getMetadataInfo={() => ({ itemType: 'WorkTimes - Hours', sectionType: 'faq' })}
        >
          <Typography variant="body2" color={openingHours.firstHoliday.hours.color} minWidth={150}>
            {openingHours.firstHoliday.hours.text}
          </Typography>
        </EditTextWrapper>
      </Stack>

      <Stack direction="row" spacing={2}>
        <EditTextWrapper
          label="Second Holiday - Days"
          defaultValue={openingHours.secondHoliday.days}
          onSave={(v) => {
            setLocalData({
              openingHours: {
                ...openingHours,
                secondHoliday: {
                  ...openingHours.secondHoliday,
                  days: v,
                },
              },
            });
          }}
          editMode={editMode}
          getMetadataInfo={() => ({ itemType: 'Second Holiday - Days', sectionType: 'faq' })}
        >
          <Typography variant="body2" color={openingHours.secondHoliday.days.color} minWidth={100}>
            {openingHours.secondHoliday.days.text}
          </Typography>
        </EditTextWrapper>

        <EditTextWrapper
          label="WorkTimes - Hours"
          defaultValue={openingHours.secondHoliday.hours}
          onSave={(v) => {
            setLocalData({
              openingHours: {
                ...openingHours,
                secondHoliday: {
                  ...openingHours.secondHoliday,
                  hours: v,
                },
              },
            });
          }}
          editMode={editMode}
          getMetadataInfo={() => ({ itemType: 'Second Holiday - Hours', sectionType: 'faq' })}
        >
          <Typography variant="body2" color={openingHours.secondHoliday.hours.color} minWidth={150}>
            {openingHours.secondHoliday.hours.text}
          </Typography>
        </EditTextWrapper>
      </Stack>
    </Stack>
  );

  return (
    <Box
      sx={{
        py: 11,
        position: 'relative',
        zIndex: 0,
        overflow: 'hidden',
      }}
    >
      <Container>
        <Box sx={{ textAlign: 'center', mb: 2 }}>
          <Chip label="Contact us" />
        </Box>

        <Stack spacing={2.5} alignItems="center" textAlign="center">
          <EditTextWrapper
            label="Title"
            defaultValue={title}
            onSave={(v) => {
              setLocalData({ title: v });
            }}
            editMode={editMode}
            getMetadataInfo={() => ({ itemType: 'title', sectionType: 'faq' })}
          >
            <Typography
              variant="h2"
              fontWeight={700}
              color={title.color}
              letterSpacing="-0.02em"
              maxWidth={970}
            >
              {title.text}
            </Typography>
          </EditTextWrapper>
        </Stack>

        <Grid container spacing={4} sx={{ mt: 9 }} alignItems="center" justifyContent="center">
          <Grid item md={4} xs={12} alignSelf="stretch">
            {renderAdress}
          </Grid>
          <Grid item xs={12} md={4} alignSelf="stretch">
            {renderContact}
          </Grid>
          <Grid item xs={12} md={4} alignSelf="stretch">
            {renderOpenningHours}
          </Grid>
        </Grid>
        <br />
        <EditMapWrapper
          defaultValue={mapConfig}
          onSave={(v) => {
            setLocalData({ mapConfig: v });
          }}
          editMode={editMode}
        >
          <ContacMap data={mapConfig} />
        </EditMapWrapper>
      </Container>
    </Box>
  );
}
