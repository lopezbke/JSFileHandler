# JSFileHandler
================

## Install Using NPM

```
npm i jsfilehandler
```
## Usage

Example With An Upload Button
```html
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
Example With No Upload Button

```html
<head>
    <script>
      // Code must be inside an async function
        async function UploadFile(htmlElement) {

            // Instantiates a new JSFileUploader object and pass the HTML Element that contains the file attached
            const jsfileUploader = new JSFileUploader(htmlElement);

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
    <input type="file" id="myFileInput" onchange="UploadFile(this)">
</body>
```

## Example Of Generated File Object

The most important property would be the FileContent which is a byte[] that could be stored in the Database as varbinary.

![image](https://user-images.githubusercontent.com/61566348/147399094-3fd11de4-494c-48d0-bda4-a04c2adf736d.png)


