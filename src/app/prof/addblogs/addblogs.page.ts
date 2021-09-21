import { AccessProvider } from 'src/app/providers/access-providers';
import { Component, OnInit } from '@angular/core';
import { Route,ActivatedRoute, Router } from '@angular/router';
import { AlertController, LoadingController, NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-addblogs',
  templateUrl: './addblogs.page.html',
  styleUrls: ['./addblogs.page.scss'],
})
export class AddblogsPage implements OnInit {
  blogId: '';
  blogtitle: '';
  content: '';
  constructor(
    private router: Router,
    private toasctrl: ToastController,
    private alertctrl: AlertController,
    private loadingctrl: LoadingController,
    private accessproviders: AccessProvider,
    private navctrl: NavController,
  ) { }

  async blogAdd(){

      return new Promise(resolve=>{
        const body = {
          //action: 'login_progress',
          // workshopid: '1001' ,
          memberid: '150',
          blogId: this.blogId,
          blogtitle: this.blogtitle,
          content: this.content
        };
        //this.presentToast(body.workshopid);
        this.accessproviders.postData(body,'addblog.php').subscribe((res: any)=>{
          // eslint-disable-next-line @typescript-eslint/dot-notation
          if(res.success===true){
            // eslint-disable-next-line @typescript-eslint/dot-notation
            //this.presentToast(res.result['conductmember']);
            this.presentToast('Create Successfully');
            this.router.navigateByUrl('profblogs');
          }
        });
      });
  }
  async presentToast(a){
    const toast=await this.toasctrl.create({
      message: a,
      duration: 1500
    });
    toast.present();
  }

  ngOnInit() {
  }

}
