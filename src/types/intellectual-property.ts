export enum IntellectualPropertyVariation {
  GENERAL = 'GENERAL',
  PERSONAL = 'PERSONAL',
  ORGANIZATIONAL = 'ORGANIZATIONAL',
}

export type IntellectualPropertyVariationType = `${IntellectualPropertyVariation}`;

export type IIntellectualProperty = {
  type: IntellectualPropertyVariationType;
  contactEmail: string;
  relatedLinks: string[];
} & (
  | {
      type: `${IntellectualPropertyVariation.GENERAL}`;
    }
  | {
      type: `${IntellectualPropertyVariation.PERSONAL}`;
      bio: string;
      contactNumber: string;
    }
  | {
      type: `${IntellectualPropertyVariation.ORGANIZATIONAL}`;
      about: string;
      location: string;
      contactNumber: string;
    }
);
