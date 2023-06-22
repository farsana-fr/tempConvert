import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private fb:FormBuilder){}
 result:any;
 fahrenheit:any;
 celcius:any;
  tempForm:any=this.fb.group({
    celcius:[''],
    fahrenheit:['']
  })

    // fahrenheit=celcius*(9/5)+32
    //celcius=(fahrenheit-32)*(5/9)
    convertToF(event:any)
    {
      
      let c=this.tempForm.value.celcius;
      
      this.fahrenheit=c*(9/5)+32
    }
    convertToC(event:any)
    {
      let f=this.tempForm.value.fahrenheit;
      this.celcius=(f-32)*(5/9)
    }
}
