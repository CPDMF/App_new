import { Component, OnInit } from '@angular/core';
import { Route,ActivatedRoute, Router } from '@angular/router';
import { AlertController, LoadingController, NavController, ToastController } from '@ionic/angular';
import { AccessProvider } from '../providers/access-providers';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  username: '';
  password: '';

  disabledbutton;

  constructor(
    private router: Router,
    private toasctrl: ToastController,
    private alertctrl: AlertController,
    private loadingctrl: LoadingController,
    private accessproviders: AccessProvider,
    private navctrl: NavController,
  ) { }

  ngOnInit() {
  }
  ionViewDidEnter(){
    this.disabledbutton=false;
  }

  async tryLogin(){
    if(this.username===''){
       this.presentToast('Enter Your email');
    }
    else if(this.password===''){
      this.presentToast('Enter Your Password');
    }
    else{
      this.disabledbutton=true;
     // const loading=await this.loadingctrl.create({
        //message: 'Wait a moment...'
      //});
      //await loading.present();

      return new Promise(resolve=>{
        const body = {
          action: 'login_progress',
          username: this.username,
          password: this.password
        };
        this.accessproviders.postData(body,'api.php').subscribe((res: any)=>{
           if(res.success===true){
            // loading.dismiss();
            // this.disabledbutton=false;
            //this.presentToast(res.result['membertype']);
            //this.router.navigateByUrl('registration');
            //this.storage.set('storage_session',res.result);
            //this.navctrl.navigateRoot(['dashboard']);
            //if(res.result.data[''])
            //if(res.result['membertype']=='Professional'){
              this.router.navigateByUrl('profdashboard');
          }else{
            //loading.dismiss();
            this.disabledbutton=false;
            this.presentToast('Member Id or Password is wrong');
          }
         },
        (err)=>{
          //loading.dismiss();
          this.disabledbutton=true;
          this.presentAlertConfirm('Timeout',);
        });
     });
  }
}
async presentToast(a){
  const toast=await this.toasctrl.create({
    message: a,
    duration: 1500
  });
  toast.present();
}
async presentAlertConfirm(a){
  const alert=await this.alertctrl.create({
    header: a,
    backdropDismiss: false,
    buttons: [
      {
        text:'cancel',
        handler: (blah)=>{
          console.log('confirm cancel: blah');
        }
      },{
        text: 'Try Again',
        handler: ()=>{
          this.tryLogin();
        }
      }
    ]
  });
  await alert.present();
 }

}
