import { Component, OnInit } from '@angular/core';
import { Route,ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-myblogs',
  templateUrl: './myblogs.page.html',
  styleUrls: ['./myblogs.page.scss'],
})
export class MyblogsPage {

  constructor(
    public router: Router,
  ) { }

  go(){
    this.router.navigateByUrl( 'addblogs');
  }


}
