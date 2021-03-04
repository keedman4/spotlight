import * as React from 'react';
import styles from './StaffSpotlight.module.scss';
import { IStaffSpotlightProps } from './IStaffSpotlightProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { ClassSpotlight } from './ClassSpotlight';
import * as jQuery from "jquery";
//import { Carousel, CarouselButtonsLocation, CarouselButtonsDisplay, CarouselIndicatorShape } from "@pnp/spfx-controls-react/lib/Carousel";
import {
  DocumentCard,
  DocumentCardActions,
  DocumentCardActivity,
  DocumentCardLocation,
  DocumentCardPreview,
  DocumentCardTitle,
  IDocumentCardStyles,
  IDocumentCardPreviewProps,
} from 'office-ui-fabric-react/lib/DocumentCard';
import { Dialog, DialogType, DialogFooter } from 'office-ui-fabric-react/lib/Dialog'; 
import { DefaultButton, PrimaryButton, Stack, IStackTokens } from 'office-ui-fabric-react';
import { Web } from "sp-pnp-js";
import Carousel from 'nuka-carousel';
import {StaffSpotlightState} from './StaffSpotlightState';

//let listItems : any = [];


export default class Modal extends React.Component<any, IStaffSpotlightProps> {


  public constructor(props: IStaffSpotlightProps, any) {

    super(props);
    this.state = {
      items: [],
      showDialog: false,
    };
    this._NewsList();
  }

//private _showDialog(): void { this.setState({ showDialog: true }); }
  private _closeDialog(): void { this.setState({ showDialog: false }); }



  public render(): React.ReactElement<IStaffSpotlightProps> {
    jQuery("#workbenchPageContent").prop("style", "max-width: none"); jQuery(".SPCanvas-canvas").prop("style", "max-width: none"); jQuery(".CanvasZone").prop("style", "max-width: none");
    return (
<>
{/* Modal */}
         <Dialog isOpen={this.state.showDialog}
            type={DialogType.largeHeader}
            onDismiss={this._closeDialog.bind(this)}
          
            subText={"this.state.items"}
          
            isBlocking={false}
            containerClassName={styles.container}>
            <DialogFooter>
              <PrimaryButton onClick={this._closeDialog.bind(this)}>OK</PrimaryButton>
            </DialogFooter>
          </Dialog> 


              </>
        
    );
  }

  public componentDidMount() {

    // debugger;
    this._NewsList();
  }

  private _NewsList(): void {

    
    let web = new Web(this.props.context.pageContext.web.absoluteUrl);
    web.lists.getByTitle(`Staff Spotlight`).items.select("Staff").filter(`Staff eq '${this.props.Name}'`).get().then

      ((response) => {

        let NewsCollection = response.map(item => new ClassSpotlight(item)).reverse();
        let NewsCard = NewsCollection;
        this.setState({ items: NewsCard });

      }

      );
  }

}


