import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
import docxtemplater from 'docxtemplater';
// import * as JSZip from 'jszip';
// import * as JSZipUtils from 'jszip-utils';
import PizZip from 'pizzip';
import PizZipUtils from 'pizzip';
import { saveAs } from '@progress/kendo-file-saver';

@Component({
  selector: 'app-doc-xtemplator',
  templateUrl: './doc-xtemplator.component.html',
  styleUrls: ['./doc-xtemplator.component.css'],
})
export class DocXTemplatorComponent implements OnInit {
  // URL = 'file:///D:/myAppFolder/myAppFolder/examples/tag-example.docx';
  URL = 'http://localhost:4200/assets/docs/tag-example.docx';

  constructor() {}
  ngOnInit(): void {
    this.loadFileGeneration();
  }

  loadFileGeneration() {
    // On click function which triggers docxTemplater function.
    function loadFile(url, callback) {
      //JSZipUtils.getBinaryContent(url, callback);
      fetch(url)
        .then(r=> r.blob())
        .then(r=> r.arrayBuffer())
        .then(r=> callback(r))
        .catch(r=>{
          console.log(r);
          
        })
    }

    // var content = PizZipUtils.getBinaryContent(this.URL, 'binary');
    //let content = fetch(this.URL).then(r => r.blob()).then(this.doDid)

    loadFile(this.URL, function (content: Blob) {
      console.log(content);
      
      // if (error) {
      //   throw error;
      // }
      //const zip = new JSZip();
      let zip = new PizZip(content);
      const doc = new docxtemplater().loadZip(zip);
      doc.setData({
        first_name: 'John',
        last_name: 'Doe',
        phone: '0652455478',
        description: 'New Website',
      });
      try {
        // render the document (replace all occurences of {first_name} by John, {last_name} by Doe, ...)
        doc.render();
      } catch (error) {
        const e = {
          message: error.message,
          name: error.name,
          stack: error.stack,
          properties: error.properties,
        };
        console.log(JSON.stringify({ error: e }));
        // The error thrown here contains additional information when logged with JSON.stringify (it contains a property object).
        throw error;
      }
      const out = doc.getZip().generate({
        type: 'blob',
        mimeType:
          'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      }); // Output the document using Data-URI
      saveAs(out, 'output.docx');
    });
  }
}
