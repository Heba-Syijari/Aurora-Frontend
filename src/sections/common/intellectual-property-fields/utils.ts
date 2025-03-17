import {
  IIntellectualProperty,
  IntellectualPropertyVariation,
  IntellectualPropertyVariationType,
} from 'src/types/intellectual-property';
import * as Yup from 'yup';

interface IntellectualPropertyValues {
  type: IntellectualPropertyVariationType;
  contactEmail: string;
  relatedLinks: { value: string }[];
  bio: string | undefined;
  about: string | undefined;
  location: string | undefined;
  contactNumber: string | undefined;
}

export function getIntellectualPropertySchema() {
  const schema = Yup.object().shape({
    type: Yup.mixed<IntellectualPropertyVariationType>()
      .oneOf(Object.values(IntellectualPropertyVariation))
      .required('The type is required'),

    // common
    contactEmail: Yup.string().required('The contact email is required'),
    relatedLinks: Yup.array()
      .of(
        Yup.object().shape({
          value: Yup.string()
            .url('The filed should be a valid link')
            .required('This field is required'),
        })
      )
      .required('The related links are required'),

    // personal
    bio: Yup.string().when('type', {
      is: (type: IntellectualPropertyVariationType) =>
        type === IntellectualPropertyVariation.PERSONAL,
      then: (sch) => sch.required('The bio is required'),
      otherwise: (sch) => sch,
    }),

    // organizational
    about: Yup.string().when('type', {
      is: (type: IntellectualPropertyVariationType) =>
        type === IntellectualPropertyVariation.ORGANIZATIONAL,
      then: (sch) => sch.required('The about is required'),
      otherwise: (sch) => sch,
    }),
    location: Yup.string().when('type', {
      is: (type: IntellectualPropertyVariationType) =>
        type === IntellectualPropertyVariation.ORGANIZATIONAL,
      then: (sch) => sch.required('The location is required'),
      otherwise: (sch) => sch,
    }),

    // personal || organizational
    contactNumber: Yup.string().when('type', {
      is: (type: IntellectualPropertyVariationType) =>
        IntellectualPropertyVariation.PERSONAL === type ||
        IntellectualPropertyVariation.ORGANIZATIONAL === type,
      then: (sch) => sch.required('The contact number is required'),
      otherwise: (sch) => sch,
    }),
  });

  return schema;
}

export function getIntellectualPropertyDefaultValues(
  values: IIntellectualProperty
): IntellectualPropertyValues {
  const { type, contactEmail, relatedLinks } = values;

  const defaultValues = {
    type: type || IntellectualPropertyVariation.GENERAL,
    contactEmail: contactEmail || '',
    relatedLinks: relatedLinks.map((value) => ({ value })),

    // personal
    ...(type === IntellectualPropertyVariation.PERSONAL ? { bio: values.bio || '' } : { bio: '' }),

    // organizational
    ...(type === IntellectualPropertyVariation.ORGANIZATIONAL
      ? { about: values.about || '', location: values.location || '' }
      : { about: '', location: '' }),

    // personal - organizational
    ...(type === IntellectualPropertyVariation.PERSONAL ||
    type === IntellectualPropertyVariation.ORGANIZATIONAL
      ? { contactNumber: values.contactNumber || '' }
      : { contactNumber: '' }),
  };

  return defaultValues;
}

export function getIntellectualPropertyPayload(
  values: IntellectualPropertyValues
): IIntellectualProperty {
  const common = {
    contactEmail: values.contactEmail,
    relatedLinks: values.relatedLinks.map(({ value }) => value),
  };

  switch (values.type) {
    case IntellectualPropertyVariation.PERSONAL:
      return {
        type: IntellectualPropertyVariation.PERSONAL,
        bio: values.bio || '',
        contactNumber: values.contactNumber || '',
        ...common,
      };

    case IntellectualPropertyVariation.ORGANIZATIONAL:
      return {
        type: IntellectualPropertyVariation.ORGANIZATIONAL,
        about: values.about || '',
        location: values.location || '',
        contactNumber: values.contactNumber || '',
        ...common,
      };

    case IntellectualPropertyVariation.GENERAL:
    default:
      return { type: IntellectualPropertyVariation.GENERAL, ...common };
  }
}
