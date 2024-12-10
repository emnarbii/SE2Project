import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ResidenceService } from '../core/services/residence.service';
import { Residence } from '../core/models/Residence';

@Component({
  selector: 'app-addresidence',
  templateUrl: './addresidence.component.html',
  styleUrls: ['./addresidence.component.css'],
})
export class AddresidenceComponent {

  constructor(private rs:ResidenceService){}
  addResidence = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    address: new FormControl(''),
    image: new FormControl(''),
    status: new FormControl(''),
  });


  getId(){
    return this.addResidence.get('id')
  }
// newResidence:Residence={
//   // id: this.addResidence.get('id')?.value,


// }
  // save(){
  //   let r= new Residence()
  //   r.id=(number) this.getId().value;
  //   this.rs.addResidence(this.addResidence.value)
  // }


}
