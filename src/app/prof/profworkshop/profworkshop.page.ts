import { Component, OnInit } from '@angular/core';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner/ngx';
import { Route,ActivatedRoute, Router } from '@angular/router';
import { AlertController, LoadingController, NavController, ToastController } from '@ionic/angular';
import { AccessProvider } from 'src/app/providers/access-providers';
import { promise } from 'selenium-webdriver';
@Component({
  selector: 'app-profworkshop',
  templateUrl: './profworkshop.page.html',
  styleUrls: ['./profworkshop.page.scss'],
})
export class ProfworkshopPage implements OnInit {

  encodedData: any;
  scannedBarcode: any;
  barcodeScannerOptions: BarcodeScannerOptions;
  memberid: '';

  constructor(private scanner: BarcodeScanner,
    private router: Router,
    private toasctrl: ToastController,
    private alertctrl: AlertController,
    private loadingctrl: LoadingController,
    private accessproviders: AccessProvider,
    private navctrl: NavController,) {
    this.encodedData='Programming isnjdnfjnd';

    this.barcodeScannerOptions={
      showTorchButton: true,
      showFlipCameraButton: true
    };
   }
   scanBRcode(){
     this.scanner.scan().then(res=>{
       this.scannedBarcode = res;
     }).catch(err => {
       alert(err);
     });
   }
   async tryWorshop(){

    return new Promise(resolve=>{
      const body = {
        //action: 'login_progress',
        // workshopid: '1001' ,
        workshopid: this.scannedBarcode.text ,
        memberid: this.memberid
      };
      //this.presentToast(body.workshopid);
      this.accessproviders.postData(body,'worshop.php').subscribe((res: any)=>{
        // eslint-disable-next-line @typescript-eslint/dot-notation
        if(res.success===true){
          // eslint-disable-next-line @typescript-eslint/dot-notation
          //this.presentToast(res.result['conductmember']);
          this.presentToast('Update Successfully');
        }
      });
    });
   }
  //  async updateCredit(){

  //   return new Promise(resolve=>{
  //     const body = {
  //       //action: 'login_progress',
  //       workshopid: this.scannedBarcode,
  //       memberid: this.memberid
  //     };
  //     this.accessproviders.postData(body,'updateCredit.php').subscribe((res: any)=>{
  //       // eslint-disable-next-line @typescript-eslint/dot-notation
  //       if(res.success===true){
  //         // eslint-disable-next-line @typescript-eslint/dot-notation
  //         //this.presentToast(res.result['conductmember']);
  //         this.presentToast('Successfully Updated!');
  //       }
  //     });
  //   });

   //}
   async presentToast(a){
      const toast=await this.toasctrl.create({
        message: a,
        duration: 1500
      });
      toast.present();
    }
   generateBarCode() {
    this.scanner.encode(this.scanner.Encode.TEXT_TYPE, this.encodedData).then(
        res => {
          alert(res);
          this.encodedData = res;
        }, error => {
          alert(error);
        }
    );
}

  ngOnInit() {
  }

}
