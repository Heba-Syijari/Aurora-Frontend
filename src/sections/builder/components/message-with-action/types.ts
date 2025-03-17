import { ButtonData, ImageData, TextData } from '../../types';

export enum MessageWithActionComponentName {
  MWSSAGE_WITH_ACTION_ONE = 'MESSAGE_WITH_ACTION_ONE',
}

export type MessageWithActionNameType = `${MessageWithActionComponentName}`;

export type MessageWithActionData = {
  projectTitle: TextData;
  projectDescription: TextData;
  image: ImageData;
  backgroundImage: ImageData;
  button: ButtonData;
};

export type MessageWithActionOneData = MessageWithActionData;
