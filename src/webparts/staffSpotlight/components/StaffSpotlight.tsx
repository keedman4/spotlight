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
import Modal from './Modal';
//let listItems : any = [];


export default class StaffSpotlight extends React.Component<IStaffSpotlightProps, any> {


  public constructor(props: IStaffSpotlightProps, any) {

    super(props);
    this.state = {
      items: [],
      showDialog: false,
    };
    this._NewsList();
  }

  private _showDialog(): void { this.setState({ showDialog: true }); }
  private _closeDialog(): void { this.setState({ showDialog: false }); }



  public render(): React.ReactElement<IStaffSpotlightProps> {
    jQuery("#workbenchPageContent").prop("style", "max-width: none"); jQuery(".SPCanvas-canvas").prop("style", "max-width: none"); jQuery(".CanvasZone").prop("style", "max-width: none");
    return (
      <Carousel className={styles.staffSpotlight}>
        {
          this.state.items.map((item: IStaffSpotlightProps) => {
            return (
              <div className={styles.birthdays}>
                  <div className={styles.circle}>
                  <img src={item.Picture} />
                </div>
                <h4>{item.Title}</h4>
                <h4>{item.Staff}</h4>

          
{/* Button */}
         <PrimaryButton
            onClick={this._showDialog.bind(this)}>
              View
        </PrimaryButton>
        
        <Modal/>



{/* Modal */}
        {/* <Dialog isOpen={this.state.showDialog}
            type={DialogType.largeHeader}
            onDismiss={this._closeDialog.bind(this)}
          
            subText={item.About}
          
            isBlocking={true}
            containerClassName={styles.container}>
            <DialogFooter>
              <PrimaryButton onClick={this._closeDialog.bind(this)}>OK</PrimaryButton>
            </DialogFooter>
          </Dialog>
 */}

              </div>
            );
          })
        }
      </Carousel>
    );
  }

  public componentDidMount() {

    // debugger;
    this._NewsList();
  }

  private _NewsList(): void {


    let web = new Web(this.props.context.pageContext.web.absoluteUrl);
    web.lists.getByTitle(`Staff Spotlight`).items.get().then

      ((response) => {

        let NewsCollection = response.map(item => new ClassSpotlight(item)).reverse();
        let NewsCard = NewsCollection;
        this.setState({ items: NewsCard });

      }

      );
  }

}


