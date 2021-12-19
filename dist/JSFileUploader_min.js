window.JSFileUploader=class{constructor(e){this.FileUploader=e}GenerateFileObject(){return new Promise(((e,t)=>{let r=this.FileUploader.files[0];const a=r.name,n=r.type,o=r.size,i=this.GetFileExtention(n),s=new Date(r.lastModified).toLocaleDateString(),c=new FileReader;c.readAsArrayBuffer(r),c.onload=t=>{const r=t.target.result,c=new Uint8Array(r),p=Array.from(c);e({FileName:a,FileType:n,FileContent:p,FileExtension:i,FileSize:o,LastModifiedDate:s})},c.onerror=function(){console.log(c.error)}}))}GetFileExtention(e){switch(e){case"video/x-msvideo":return".avi";case"image/bmp":return".bmp";case"application/msword":return".doc";case"text/csv":return".csv";case"application/vnd.openxmlformats-officedocument.wordprocessingml.document":return".docx";case"application/epub+zip":return".epub";case"application/gzip":return".gz";case"image/gif":return".gif";case"image/gif":return".html";case"image/jpeg":return"jpeg";case"application/json":return".json";case"audio/mpeg":return".mp3";case"video/mp4":return".mp4";case"video/mpeg":return".mpeg";case"application/vnd.oasis.opendocument.presentation":return".odp";case"application/vnd.oasis.opendocument.spreadsheet":return".odsd";case"image/png":return".png";case"application/pdf":return".pdf";case"application/vnd.ms-powerpoint":return".ppt";case"application/vnd.openxmlformats-officedocument.presentationml.presentation":return".pptx";case"applcation/vnd.rar":return".rar";case"image/svg+xml":return".svg";case"applcation/vnd.visio":return".vsd";case"audio/wav":return".wav";case"application/xml":return".xml";case"application/xml":return".xls";case"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":return".xlsx";case"application/zip":return".zip";case"application/x-7z-compressed":return".7z";default:return"txt"}}SaveToSessionStorage(e,t){const r=JSON.stringify(t);sessionStorage.setItem(e,r)}SaveToLocalStorage(e,t){const r=JSON.stringify(t);localStorage.setItem(e,r)}GetFromSessionStorage(e){const t=sessionStorage.getItem(e);return JSON.parse(t)}GetFromLocalStorage(e){const t=localStorage.getItem(e);return JSON.parse(t)}DownloadFile(e){const t=window.URL.createObjectURL(new Blob([Uint8Array.from(e.FileContent)],{type:e.FileType})),r=document.createElement("a");r.href=t,r.download=e.FileName,r.click(),setTimeout((()=>{window.URL.revokeObjectURL(t),r.remove()}),100)}};