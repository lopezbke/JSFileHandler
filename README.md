# JSFileHandler
================

## Install using npm

```
npm i jsfilehandler
```
## Usage

```html
<script src="https://unpkg.com/petite-vue" defer init></script>

<!-- anywhere on the page -->
<head>
    <script>
      // Code must be inside an async function
        async function UploadFile() {

            // HTML Input Element that will upload files
            const fileUploaderElement = document.querySelector("#myFileInput");

            // Instantiates a new JSFileUploader object and pass the HTML Element that contains the file attached
            const jsfileUploader = new JSFileUploader(fileUploaderElement);

            // Generates a file object example below:
            /*  { FileName : String, FileType: String, 
                FileContent: Byte[], FileExtension: String, 
                FileSize : String, LastModifiedDate: String}
                */
            const fileObject = await jsfileUploader.GenerateFileObject();

        }
    </script>
</head>
<body>
    <input type="file" id="myFileInput">
    <button type="button" onclick="UploadFile();">Upload</button>
</body>
```
