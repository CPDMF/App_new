import { Component, OnInit } from '@angular/core';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'app-profworkshop',
  templateUrl: './profworkshop.page.html',
  styleUrls: ['./profworkshop.page.scss'],
})
export class ProfworkshopPage implements OnInit {

  encodedData: any;
  scannedBarcode: any;
  barcodeScannerOptions: BarcodeScannerOptions;

  constructor(private scanner: BarcodeScanner) {
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
//    generateBarCode() {
//     this.scanner.encode(this.scanner.Encode.TEXT_TYPE, this.encodedData).then(
//         res => {
//           alert(res);
//           this.encodedData = res;
//         }, error => {
//           alert(error);
//         }
//     );
// }

  ngOnInit() {
  }

}
