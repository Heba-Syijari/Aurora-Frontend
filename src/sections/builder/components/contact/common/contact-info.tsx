import { Typography } from '@mui/material';
import { ReactNode } from 'react';
import { EditTextWrapper } from 'src/sections/builder/editors/text';
import { ConatctInfo } from '../types';

// -------------------------------------------------

type ItemType = 'email' | 'number' | 'address';

type Props = {
  itemType: ItemType;
  setLocalData: (v: Partial<ConatctInfo>) => void;
  defaultValues: ConatctInfo;
  editMode?: boolean;
};

export function ContactInfo({ itemType, setLocalData, defaultValues, editMode }: Props) {
  const renderAdress = (
    <>
      <EditTextWrapper
        label="City"
        defaultValue={defaultValues.address.city}
        onSave={(v) => {
          setLocalData({ address: { ...defaultValues?.address, city: v } });
        }}
        editMode={editMode}
        getMetadataInfo={() => ({ itemType: 'city', sectionType: 'contact' })}
      >
        <Typography variant="body2" color={defaultValues?.address.city.color}>
          {defaultValues?.address.city.text}
        </Typography>
      </EditTextWrapper>
      <EditTextWrapper
        label="Street Address"
        defaultValue={defaultValues?.address.streetAddress}
        onSave={(v) => {
          setLocalData({
            address: {
              ...defaultValues?.address,
              streetAddress: v,
            },
          });
        }}
        editMode={editMode}
        getMetadataInfo={() => ({ itemType: 'streetAddress', sectionType: 'contact' })}
      >
        <Typography variant="body2" color={defaultValues?.address.streetAddress.color}>
          {defaultValues?.address.streetAddress.text}
        </Typography>
      </EditTextWrapper>
    </>
  );
  const renderEmail = (
    <EditTextWrapper
      label="Email"
      defaultValue={defaultValues?.email}
      onSave={(v) => {
        setLocalData({ email: v });
      }}
      editMode={editMode}
      getMetadataInfo={() => ({ itemType: 'email', sectionType: 'contact' })}
    >
      <Typography variant="body2" color={defaultValues?.email.color}>
        {defaultValues?.email.text}
      </Typography>
    </EditTextWrapper>
  );
  const renderNumber = (
    <EditTextWrapper
      label="Number"
      defaultValue={defaultValues?.number}
      onSave={(v) => {
        setLocalData({ number: v });
      }}
      editMode={editMode}
      getMetadataInfo={() => ({ itemType: 'number', sectionType: 'contact' })}
    >
      <Typography variant="body2" color={defaultValues?.number.color}>
        {defaultValues?.number.text}
      </Typography>
    </EditTextWrapper>
  );

  const contactEnum: Record<ItemType, ReactNode> = {
    address: renderAdress,
    email: renderEmail,
    number: renderNumber,
  };

  return contactEnum[itemType];
}
