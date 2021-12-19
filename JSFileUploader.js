(function () {
 
    class JSFileUploader {
          /**
         * Proccess a file upload
         * @param  {[HTMLElement]} fileUploader html input id
         */
        constructor(fileUploader) {
            this.FileUploader = fileUploader;
        }

         /**
         * Generates a file object containing files properties like filename, modified date, type, size, ext and bytes[] to stored in the database.
         */
        GenerateFileObject() {
            return new Promise((resolve,reject) => {
            let file = this.FileUploader.files[0];
            const fileName = file.name;
            const fileType = file.type;
            const fileSize = file.size;
            const fileExtension = this.GetFileExtention(fileType);
            const fileLastModified = new Date(file.lastModified).toLocaleDateString();
            const reader = new FileReader();

            // Reads Contents
            reader.readAsArrayBuffer(file);

            // This event is triggered each time the reading operation is successfully completed.
            reader.onload = evt => {
                const arrayBuffer = evt.target.result, array = new Uint8Array(arrayBuffer);
                const fileByteArray = Array.from(array);
                resolve({FileName : fileName, FileType: fileType, FileContent: fileByteArray, FileExtension: fileExtension, FileSize : fileSize, LastModifiedDate: fileLastModified});
            }

            // This event is triggered each time the reading operation is successfully completed.
            reader.onerror = function() {
                console.log(reader.error);
              }; 
            });
            
        }
        // Ment to be a private function
        GetFileExtention (FileType) { 
            switch (FileType) {
                case "video/x-msvideo":        
                    return ".avi";
                case "image/bmp":  
                    return ".bmp";
                case "application/msword":
                    return ".doc";
                case "text/csv":
                    return ".csv";
                case "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
                    return ".docx";
                case "application/epub+zip":
                    return ".epub";
                case "application/gzip":
                    return ".gz";
                case "image/gif":
                    return ".gif";
                case "image/gif":
                    return ".html"
                case "image/jpeg":
                    return "jpeg";
                case "application/json":
                    return ".json";
                case "audio/mpeg":
                    return ".mp3";
                case "video/mp4":
                    return ".mp4"
                case "video/mpeg":
                    return ".mpeg";
                case "application/vnd.oasis.opendocument.presentation":
                    return ".odp";
                case "application/vnd.oasis.opendocument.spreadsheet":
                    return ".odsd";
                case "image/png":
                    return ".png";
                case "application/pdf":
                    return ".pdf"
                case "application/vnd.ms-powerpoint":
                    return ".ppt";
                case "application/vnd.openxmlformats-officedocument.presentationml.presentation":
                    return ".pptx";
                case "applcation/vnd.rar":
                    return ".rar";
                case "image/svg+xml":
                    return ".svg"
                case "applcation/vnd.visio":
                    return ".vsd";
                case "audio/wav":
                    return ".wav";
                case "application/xml":
                    return ".xml"
                case "application/xml":
                    return ".xls";
                case "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":
                    return ".xlsx";
                case "application/zip":
                    return ".zip";
                case "application/x-7z-compressed":
                    return ".7z"
                default:
                    return "txt";
            }
        }

        SaveToSessionStorage(Key, File) {
            const file = JSON.stringify(File);
            sessionStorage.setItem(Key, file)
        }

        SaveToLocalStorage(Key, File) {
             const file = JSON.stringify(File);
             localStorage.setItem(Key, file);
        }
        
        GetFromSessionStorage(Key) {
            const file = sessionStorage.getItem(Key);
            return JSON.parse(file);
        }

        GetFromLocalStorage(Key) {
            const file = localStorage.getItem(Key);
            return JSON.parse(file);
        }

         /**
         * Downlaods a file by providing an object like so: 
         * {FileContent : byte[], FileName : String}
         */
        DownloadFile(file) {
           const downloadString= window.URL.createObjectURL(new Blob( [ Uint8Array.from(file.FileContent) ], { type: file.FileType } ));
           const link = document.createElement('a');
            link.href = downloadString;
            link.download = file.FileName;
            link.click();

            setTimeout(() => {
                // For Firefox it is necessary to delay revoking the ObjectURL
                window.URL.revokeObjectURL(downloadString);
                link.remove();
              }, 100);
        }
    }

    window.JSFileUploader = JSFileUploader;
})()