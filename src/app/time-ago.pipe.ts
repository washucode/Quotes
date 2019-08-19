import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeAgo'
})
export class TimeAgoPipe implements PipeTransform {

  transform(value: any): any {
    let now:Date = new Date();
    let nowTime:any = new Date(now.getTime());
    let valueTime:any = new Date(value.getTime());
    var timeDifference = Math.abs(nowTime - valueTime);
    const secondInHour = 3600000;
    var timeDifferenceFinal = timeDifference/secondInHour;


     if(timeDifferenceFinal >=168){
       return   Math.round(timeDifferenceFinal/168)  + "days";
     }
     else if(timeDifferenceFinal >= 48){
       return   Math.round(timeDifferenceFinal/24) + "days";
     }
    else if (timeDifferenceFinal >= 1 ){
      return Math.round(timeDifferenceFinal) + "hours";

    }else if (0.02 <= timeDifferenceFinal && timeDifferenceFinal<= 1){
      return Math.round(timeDifferenceFinal * 60)+ "mins";
    }else if (timeDifferenceFinal<0.02){
      return Math.round(timeDifferenceFinal * 3600) +"secs";
    }

  }

}
