import { IStaffSpotlightProps } from './IStaffSpotlightProps';
export class ClassSpotlight{
   public description: string;
   public Title: string;
   public DateOfEmployment: string;
   public About: string;
   public Picture: string;
   public StaffMail: string;
   public Name: string;
   public Staff: string;

   constructor(item: IStaffSpotlightProps){
   this.description = item.description;
   this.Title = item.Title;
   this.DateOfEmployment= item.DateOfEmployment;
   this.About = item.About;
   this.Picture = item.Picture;
   this.StaffMail = item.StaffMail;
   this.Name = item.Name;
   this.Staff = item.Staff;
   }
}