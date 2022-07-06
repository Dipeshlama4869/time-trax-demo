import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AnyComponent } from 'preact';
import { FileUploadService } from 'src/app/_services/file-upload.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})

export class FileUploadComponent implements OnInit {
    // Variable to store shortLink from api response
    formData: FormData;
    // selectedFiles: string[];
    // selFiles: FileList;
    // shortLink: string = "";
    loading: boolean = false; // Flag variable
    // file: File = null; // Variable to store file
    constructor(private fileUploadService: FileUploadService, private http: HttpClient) { }

    ngOnInit(): void {
    }

    onChange(event: any) {
      // this.selectedFiles = [];
 
      // const element = event.currentTarget as HTMLInputElement;
      // this.selFiles = element.files;
   
      // let fileList: FileList | null = element.files;
      // if (fileList) {
      //   for (let itm in fileList)
      //   {
      //     let item: File = fileList[itm];
      //     if ((itm.match(/\d+/g) != null) && (!this.selectedFiles.includes(item['name'])))
      //         this.selectedFiles.push(item['name']); 
      //   }
      // }

      const files: FileList = event.target.files;

      this.formData = new FormData();

      for(let index = 0; index < files.length; index++) {
        const element = files[index];
        this.formData.append('Files', element);
      }
      this.formData.forEach((value,key) => {
        console.log(key+" "+value)
      });

  }


  onUpload() {

      console.log(this.formData)
      this.fileUploadService.upload(this.formData).subscribe(
          (d) => {
            console.log('successs');
          },
          (error) => {
            console.error(error);
          }
      );
      }
     
  }
