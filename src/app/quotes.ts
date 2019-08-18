export class Quotes {
   showDateName : boolean;

  constructor(  public upVote:number, public downVote:number,public id:number, public author:string, public name : string,public details:string,public completeDate: Date){
    this.showDateName = false;
  

  }


}
