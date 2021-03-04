import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import * as strings from 'StaffSpotlightWebPartStrings';
import StaffSpotlight from './components/StaffSpotlight';
import { IStaffSpotlightProps } from './components/IStaffSpotlightProps';

export interface IStaffSpotlightWebPartProps {
  description: string;
  Title: string;
  DateOfEmployment: string;
  About: string;
  Picture: string;
  StaffMail: string;
  Name: string;
  Staff: string;
}

export default class StaffSpotlightWebPart extends BaseClientSideWebPart<IStaffSpotlightWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IStaffSpotlightProps> = React.createElement(
      StaffSpotlight,
      {
        description: this.properties.description,
        Title: this.properties.Title,
        DateOfEmployment:this.properties.DateOfEmployment,
        About:this.properties.About,
        Picture:this.properties.Picture,
        StaffMail: this.properties.StaffMail,
        Name: this.properties.Name,
        Staff: this.properties.Staff,
        context: this.context
        // displayMode: this.displayMode,
        // fUpdateProperty: (value: string) => {
        //   this.properties.title = value;
        // },
        // fPropertyPaneOpen: this.context.propertyPane.open

      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
