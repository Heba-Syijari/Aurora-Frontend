import { ImageData, TextData } from '../../types';

export enum OurClientsComponentName {
  OUR_CLIENTS_ONE = 'OUR_CLIENTS_ONE',
}


export type OurClientsItemData = {
  image: string
  link: string
};

export type OurClientsConfig = {
  clients: OurClientsItemData[];
};

export type OurClientsData = {
  image: ImageData; // backGround
  titlePartOne: TextData;
  titlePartTwo: TextData;
  config: OurClientsConfig;
};



export type OurClientsOneData = OurClientsData




export type OurClientsComponentNameType = `${OurClientsComponentName}`;
