import { Component} from '@angular/core';
import { FormsModule, Validators } from '@angular/forms';



@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

width = window.outerWidth;
  constructor() { }

log(input) {
  console.log(input);
}
onSubmit(form){
  console.log(form);
}

}
