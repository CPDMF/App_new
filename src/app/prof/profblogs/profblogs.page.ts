import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
@Component({
  selector: 'app-profblogs',
  templateUrl: './profblogs.page.html',
  styleUrls: ['./profblogs.page.scss'],
})
export class ProfblogsPage implements OnInit {
  public blogs=[];
  constructor(
    public apiService: ApiService
  ) {
  }


  ngOnInit() {
    this.apiService.getBlogs().subscribe((res: any)=> {
      console.log('SUCCESS===',res);
      this.blogs=res;
        // eslint-disable-next-line @typescript-eslint/dot-notation
       // this.blogtitle=res['blogtitle'];
    //   this.blogs=res[0];
    //   // // eslint-disable-next-line @typescript-eslint/dot-notation
    //   // this.blogtitle=this.blogs['blogtitle'];
    // },(error: any)=>{
    //   console.log('ERROR==',error);
     });
  }
}
