import { yupResolver } from '@hookform/resolvers/yup';
import { Stack, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import FormProvider from 'src/components/hook-form';
import { RHFRadioGroupRect } from 'src/components/styled/radio';
import { useBoolean } from 'src/hooks/use-boolean';
import * as Yup from 'yup';
import { ActionsGroup, SectionTitle } from '../common';
import {
  MediaContentItem,
  MediaContentItemType,
  WebsiteContentDataType,
  contentTypes,
} from '../view/types';
import { AddContentDialog } from './components';
import ContentItemList from './components/content-item-list';

function checkIfHasContent(hasContentWatch: boolean | string): boolean {
  switch (typeof hasContentWatch) {
    case 'string':
      return hasContentWatch === 'true';
    case 'boolean':
      return hasContentWatch;
    default:
      return false;
  }
}

type WebsiteContentOptionType = {
  value: boolean;
  title: string;
  description: string;
};

const options: WebsiteContentOptionType[] = [
  {
    title: "No, I don't have",
    value: false,
    description: 'Generate content using AI system',
  },
  {
    title: 'Yes, It is ready',
    value: true,
    description: 'Add your content to be used in website generation',
  },
];

export type WebsiteContentProps = {
  data: WebsiteContentDataType;
  onSubmitClicked: (data: WebsiteContentDataType) => void;
  onCancelClicked: () => void;
};

export default function WebsiteContent({
  data,
  onSubmitClicked,
  onCancelClicked,
}: WebsiteContentProps) {
  const [selectedItemIndex, setSelectedItemIndex] = useState<number>();

  const contentDialog = useBoolean();

  const schema = Yup.object().shape({
    hasContent: Yup.boolean().required('This field is required'),
    items: Yup.array()
      .of(
        Yup.object().shape({
          type: Yup.string().oneOf(contentTypes).required(),
          title: Yup.string().required(),
          value: Yup.string()
            .required()
            .when('type', {
              is: (type: MediaContentItemType) => type !== 'text',
              then: (sch) => sch.url(),
              otherwise: (sch) => sch,
            }),
        })
      )
      .when('hasContent', {
        is: (has: boolean) => has,
        then: (sch) => sch.min(1, 'You should add at least 1 content item'),
        otherwise: (sch) => sch,
      })
      .required(),
  });

  const defaultValues = {
    hasContent: data.hasContent,
    items: data.items,
  };

  const methods = useForm({ resolver: yupResolver(schema), defaultValues });

  const hasContent = checkIfHasContent(methods.watch('hasContent'));

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = methods;

  const onSubmit = handleSubmit(async (values) => {
    try {
      console.log({ values });
      onSubmitClicked(values);
    } catch (error) {
      console.error(error);
    }
  });

  const openContentDialog = () => {
    contentDialog.onTrue();
  };

  const closeContentDialog = () => {
    setSelectedItemIndex(undefined);
    contentDialog.onFalse();
  };

  const { fields, append, remove, update } = useFieldArray({
    control,
    name: 'items' as never,
  });

  const handleAddItem = (item: MediaContentItem) => {
    append(item);
  };

  const handleRemoveItem = (index: number) => {
    remove(index);
  };

  const handleUpdateItem = (item: MediaContentItem) => {
    if (typeof selectedItemIndex === 'number') {
      update(selectedItemIndex, item);
    }
  };

  const handleEditItem = (index: number) => {
    setSelectedItemIndex(index);
    openContentDialog();
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }, []);

  useEffect(() => {
    if (!hasContent) {
      methods.setValue('items', []);
    }
  }, [hasContent, methods]);

  const renderAddYourContentSection = (
    <Stack spacing={1}>
      <Typography variant="body1" fontWeight={500}>
        Your content
      </Typography>

      <ContentItemList
        fields={fields as any}
        onDelete={handleRemoveItem}
        onEdit={handleEditItem}
        onAdd={openContentDialog}
      />

      {errors.items?.message && (
        <Typography variant="body2" color="error.main">
          {errors.items.message}
        </Typography>
      )}
    </Stack>
  );

  const selectedItem: MediaContentItem | undefined =
    typeof selectedItemIndex === 'number' ? (fields[selectedItemIndex] as any) : undefined;

  return (
    <>
      <Stack spacing={4}>
        <SectionTitle title="Content" description="Do you have content for your site?" />

        <FormProvider methods={methods} onSubmit={onSubmit}>
          <Stack spacing={4}>
            <RHFRadioGroupRect
              name="hasContent"
              options={options.map((option) => ({
                value: option.value,
                label: (
                  <>
                    <Typography variant="h6">{option.title}</Typography>
                    <Typography variant="body2">{option.description}</Typography>
                  </>
                ),
              }))}
              row
            />

            {hasContent && renderAddYourContentSection}

            <ActionsGroup
              primaryButtonProps={{ type: 'submit' }}
              secondaryButtonProps={{ onClick: onCancelClicked }}
            />
          </Stack>
        </FormProvider>
      </Stack>

      <AddContentDialog
        open={contentDialog.value}
        onClose={closeContentDialog}
        onAdd={handleAddItem}
        onUpdate={handleUpdateItem}
        data={selectedItem}
      />
    </>
  );
}
