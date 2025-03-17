import React, { useMemo } from 'react';
import { ContentTypeVariation, ContentTypeVariationType } from 'src/types/website-content-type';
import { CategoryOptionType } from './types';
import SpecialistCategories from './specialist-categories';
import DiversifiedCategories from './diversified-categories';

type ContentTypeCategoriesListProps = {
  type: ContentTypeVariationType;
  options: CategoryOptionType[];
  mainCategoryId?: number;
};

export default function ContentTypeCategoriesList({
  type,
  options,
  mainCategoryId,
}: ContentTypeCategoriesListProps) {
  const filteredOptions = useMemo(
    () => options.filter((option) => option.type === type),
    [options, type]
  );

  if (type === ContentTypeVariation.DIVERSIFIED) {
    return <DiversifiedCategories options={filteredOptions} />;
  }

  return <SpecialistCategories mainCategoryId={mainCategoryId} options={filteredOptions} />;
}
