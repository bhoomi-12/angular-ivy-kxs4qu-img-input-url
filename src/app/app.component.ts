import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  images: any = [];
  imageLink: string = '';

  addImageLink() {
    if (this.imageLink) {
      this.images.push(this.imageLink);
    }
  }
  delimg(img){
this.images.splice(this.images.indexOf(img),1)
  }
}
// url: any;
// images: any;
// imgUlr: any;
//   addimg(itm){
// this.imgUlr.push(itm)
//  }
//}
  // onClickChange(f: { taret: { url: any; }; target: { files: Blob[]; }; }){
  //   if(f.taret.url){
  //     var x = new FileReader()
  //     x.readAsDataURL(f.target.files[0]);
    
    // x.(onload: any)=>(event: { target: { result: any; }; }){
    //     this.url=event.target.result;
    //   }
  //   }
  // }
//}

//   name = 'Angular ' + VERSION.major;
// images: any;
// imgUlr: any;
//   addimg(itm: any){
// this.imgUlr.push(itm)
 // }}