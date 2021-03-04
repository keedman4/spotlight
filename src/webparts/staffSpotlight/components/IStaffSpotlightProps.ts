import { IStaffSpotlightWebPartProps } from '../StaffSpotlightWebPart';
import { WebPartContext } from "@microsoft/sp-webpart-base"; 

import { DisplayMode } from '@microsoft/sp-core-library';

export interface IStaffSpotlightProps extends IStaffSpotlightWebPartProps {

  // displayMode: DisplayMode;

  // fUpdateProperty: (value: string) => void;
  // fPropertyPaneOpen: () => void;
  context:WebPartContext; 
  
}
