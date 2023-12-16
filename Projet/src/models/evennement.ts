export class Evennement{
    id?:number;
    nom!:String;
    photo!:String;
    prix!:number;
    estvalide!:boolean;
    date!:Date;
    createdBy: string;

    constructor() {
      this.createdBy = '';
    }

}
