import docxtemplater from 'docxtemplater';
import PizZip from 'pizzip';
import { saveAs } from '@progress/kendo-file-saver';

export function makeDocForName(formName: string, dataObject: object) {
  let url = './assets/docs/' + formName + '.docx';
  let outFileName = formName + '.docx';
  console.log(dataObject);
  
  makeDocFromTemplate(url, dataObject, outFileName);
}

function makeDocFromTemplate(
  URL: string,
  dataObject: object,
  outFileName: string
) {
  _loadFileFromURL(URL, function (blob: Blob) {
    const doc = _readDocFromBlob(blob);
    doc.setData(dataObject);
    _render_Template(doc); //substitute tags with object data
    const out = _loadFile_GenerateOutput(doc); // Output the document using Data-URI
    saveAs(out, outFileName); //output.docx
  });
}

function _loadFileFromURL(URL: string, callback) {
  //JSZipUtils.getBinaryContent(url, callback);
  fetch(URL)
    .then((response) => response.blob())
    .then((blob) => blob.arrayBuffer())
    .then((data) => callback(data))
    .catch((error) => {
      console.log('Error reading template file');
      console.log(URL);
      console.log(error);
    });
}

function _readDocFromBlob(blob: Blob) {
  let zip = new PizZip(blob);
  return new docxtemplater().loadZip(zip);
}

function _render_Template(doc: docxtemplater) {
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
}

function _loadFile_GenerateOutput(doc: docxtemplater) {
  return doc.getZip().generate({
    type: 'blob',
    mimeType:
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  });
}
