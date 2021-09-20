import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
@Component({
  selector: 'app-profblogs',
  templateUrl: './profblogs.page.html',
  styleUrls: ['./profblogs.page.scss'],
})
export class ProfblogsPage implements OnInit {
  blogs: any=[];
  constructor(
    public _apiService: ApiService
  ) {
    this.getBlogs();
  }

  getBlogs(){
    // eslint-disable-next-line no-underscore-dangle
    this._apiService.getBlogs().subscribe((res: any)=> {
      console.log('SUCCESS===',res);
      this.blogs=res;
    },(error: any)=>{
      console.log('ERROR==',error);
    });
  }

  ngOnInit() {
  }

}
