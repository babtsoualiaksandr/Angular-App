import { IConfig } from '../../models/iconfig';

export interface IConfigState {
  config: IConfig;

}

export const initialConfigState: IConfigState =  {
  config: null
};
