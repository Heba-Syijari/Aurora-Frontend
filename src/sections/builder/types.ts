export type IPageOption = {
  id: number;
  label: string;
  type: string;
  uid: string;
  component: JSX.Element;
};

// ----- Button Data ----------------------------

export type ButtonData = {
  text: string;
  linkTo: string;
  color: string;
  backgroundColor: string;
  icon: string // hsn edits : some btns have icons In Hero sections default valus is ''
};

// ----- Text Data -------------------------------

export type TextData = {
  text: string;
  color: string;

};

// ----- Image Data -------------------------------

export type ImageData = {
  url: string;
  alt: string;
};

// ----- Video Data -------------------------------

export type VideoData = string;

// ----- Item Metadata -------------------------------

export type ItemMetadata = {
  itemType: string;
  sectionType: string;
};
