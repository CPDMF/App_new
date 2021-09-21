import { Component, OnInit } from '@angular/core';
import { Route,ActivatedRoute, Router } from '@angular/router';
import { AlertController, LoadingController, NavController, ToastController } from '@ionic/angular';
import { AccessProvider } from '../providers/access-providers';

@Component({
  selector: 'app-profdashboard',
  templateUrl: './profdashboard.page.html',
  styleUrls: ['./profdashboard.page.scss'],
})
export class ProfdashboardPage implements OnInit {
   credit: '';
   membercredit: '';
   memcredit2: '';
   pendingcredit: '';
  constructor(
    private router: Router,
    private toasctrl: ToastController,
    private alertctrl: AlertController,
    private loadingctrl: LoadingController,
    private accessproviders: AccessProvider,
    private navctrl: NavController,
  ) {
    this.creditShow();
   }

  async creditShow(){
    return new Promise(resolve=>{
      const body = {
       // action: 'login_progress',
        memberid:'150'
      };
      //this.presentToast(body.username);
      this.accessproviders.postData(body,'credit.php').subscribe((res: any)=>{
         if(res.success===true){
           this.membercredit=res.result.membercredit;
           //this.presentToast(res.result.membercredit);
           this.credit=res.result.memcredit;
          this.memcredit2=res.result.membercredit2;
          this.pendingcredit=res.result.pendingcredit;
          // loading.dismiss();
          // this.disabledbutton=false;
          //this.presentToast(res.result['membertype']);
          //this.router.navigateByUrl('registration');
          //this.storage.set('storage_session',res.result);
          //this.navctrl.navigateRoot(['dashboard']);
          //if(res.result.data[''])
          //if(res.result['membertype']=='Professional'){
           // this.router.navigateByUrl('profdashboard');
         }
       });
   });
}
async presentToast(a){
  const toast=await this.toasctrl.create({
    message: a,
    duration: 2000
  });
  toast.present();
}

  ngOnInit() {

  }


}
