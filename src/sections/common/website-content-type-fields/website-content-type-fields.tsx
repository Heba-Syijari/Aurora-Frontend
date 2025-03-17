import { Stack } from '@mui/material';
import { useGetContentTypes } from 'src/api/content';
import { ContentTypeVariationType } from 'src/types/website-content-type';
import { ContentTypeCategoriesList } from './content-type-categories';

// type ContentTypeOptionType = {
//   type: ContentTypeVariationType;
//   title: string;
//   description: string;
// };

// const options: ContentTypeOptionType[] = [
//   {
//     type: ContentTypeVariation.DIVERSIFIED,
//     title: 'Diversified',
//     description: 'Mixed Islamic categories',
//   },
//   {
//     type: ContentTypeVariation.SPECIALIST,
//     title: 'Specialist',
//     description: 'Specific Islamic category',
//   },
// ];

export type ContentTypeProps = {
  type: ContentTypeVariationType;
  mainCategoryId?: number;
};

export default function WebsiteContentTypeFields({ type, mainCategoryId }: ContentTypeProps) {
  const { contentTypes: contentTypeCategories } = useGetContentTypes();

  return (
    <Stack spacing={4}>
      {/* <RHFRadioGroupRect
        name="type"
        options={options.map((option) => ({
          value: option.type,
          label: (
            <>
              <Typography variant="h6">{option.title}</Typography>
              <Typography variant="body2">{option.description}</Typography>
            </>
          ),
        }))}
        row
      /> */}

      <ContentTypeCategoriesList
        type={type}
        options={contentTypeCategories}
        mainCategoryId={mainCategoryId}
      />
    </Stack>
  );
}
