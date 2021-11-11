import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { DiamondsDataService } from '../shared/diamonds-data.service';

@Component({
  selector: 'app-add-diamond',
  templateUrl: './add-diamond.component.html',
  styles: [
  ]
})
export class AddDiamondComponent implements OnInit {

  constructor(public service:DiamondsDataService, private toastr:ToastrService) { }



  ngOnInit(): void {
  }

  onSubmit(form: NgForm)
  {
     this.service.addDiamond();
     this.toastr.success('Submitted successfully', 'Diamond added');
     form.form.reset();
  }

}
