import { Avatar, Box, Button, Stack, Typography } from '@mui/material';
import { useMemo } from 'react';
import Iconify from 'src/components/iconify/iconify';
import { useBoolean } from 'src/hooks/use-boolean';
import { IPlugin, PluginVariation } from 'src/types/project';
import EditAdamWidgetConfigDialog from './edit-adam-widget-config-dialog';
import { RHFPluginCheckboxes } from './styled';
import { IAdamWidgetConfig } from './types';

type PluginOption = {
  title: string;
  variation: PluginVariation;
  iconURL?: string;
  description: string;
  action: () => void;
};

type WebsitePluginsFieldsProps = {
  edit?: boolean;
  plugins?: IPlugin[];
  onAdamConfigSuccess?: VoidFunction;
};

export default function WebsitePluginsFields({
  edit,
  plugins,
  onAdamConfigSuccess,
}: WebsitePluginsFieldsProps) {
  const adamConfigDialog = useBoolean();

  const pluginsData = useMemo(() => {
    const pluginAttributes: Record<PluginVariation, Record<string, string | number>> = {
      IADAM: {},
    };

    (plugins || []).forEach((plugin) => {
      pluginAttributes[plugin.variation][plugin.key] = plugin.value;
    });

    return pluginAttributes;
  }, [plugins]);

  const adamConfig = useMemo(() => {
    const adamAttributes = pluginsData.IADAM;

    const config: IAdamWidgetConfig = {
      fontSize: adamAttributes.fontSize as number,
      primaryColor: adamAttributes.primaryColor as string,
      secondaryColor: adamAttributes.secondaryColor as string,
    };

    return config;
  }, [pluginsData.IADAM]);

  const pluginsOptions: PluginOption[] = useMemo(
    () => [
      {
        title: 'Adam ai',
        variation: 'IADAM',
        description:
          'Meet Adam - your new virtual AI friend and companion. Adam is designed with one clear purpose',
        iconURL: 'https://widget.iadam.ai/static/client-logos/logo1.png',
        action: adamConfigDialog.onTrue,
      },
    ],
    [adamConfigDialog]
  );

  const handleAdamConfigSuccess = () => {
    adamConfigDialog.onFalse();
    if (onAdamConfigSuccess) onAdamConfigSuccess();
  };

  return (
    <Box
      sx={{
        '.MuiFormGroup-root': {
          gap: 2,
          display: 'grid',
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            md: 'repeat(2, 1fr)',
          },
        },
      }}
    >
      <RHFPluginCheckboxes
        name="plugins"
        row
        options={pluginsOptions.map((option) => ({
          value: option.variation,
          label: <PluginItem {...option} edit={edit} />,
        }))}
      />

      {edit && (
        <EditAdamWidgetConfigDialog
          config={adamConfig}
          open={adamConfigDialog.value}
          onCloseClicked={adamConfigDialog.onFalse}
          onSuccess={handleAdamConfigSuccess}
        />
      )}
    </Box>
  );
}

type PluginItemProps = Omit<PluginOption, 'variation'> & {
  edit?: boolean;
};

function PluginItem({ action, description, title, iconURL, edit }: PluginItemProps) {
  return (
    <Stack spacing={2} flexDirection="row">
      <Avatar
        alt={title}
        src={iconURL}
        variant="rounded"
        sx={{
          width: 48,
          height: 48,
          bgcolor: '#FFFFFF',
          borderRadius: (theme) => theme.spacing(1),
        }}
      >
        <Iconify icon="ri:plug-line" width={32} color="text.primary" />
      </Avatar>
      <Stack spacing={2} alignItems="flex-start">
        <Box>
          <Typography variant="h6">{title}</Typography>
          <Typography variant="body2" color="text.tertiary">
            {description}
          </Typography>
        </Box>

        {edit && (
          <Button
            variant="text"
            size="small"
            onClick={action}
            endIcon={<Iconify icon="ri:arrow-drop-right-line" width={24} />}
            color="secondary"
            sx={{ height: 24 }}
          >
            Edit
          </Button>
        )}
      </Stack>
    </Stack>
  );
}
