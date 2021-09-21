import { Component, OnInit } from '@angular/core';
import { Route,ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-profpayments',
  templateUrl: './profpayments.page.html',
  styleUrls: ['./profpayments.page.scss'],
})
export class ProfpaymentsPage implements OnInit {

  constructor(private router: Router,) { }

  payment(){
    this.router.navigateByUrl('payment');
  }

  ngOnInit() {
  }

}
