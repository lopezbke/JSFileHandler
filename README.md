# JSFileHandler
================

## Install using npm

```
npm i jsfilehandler
```
## Usage

Example with an upload button
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
Example with no upload button

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
![image](https://user-images.githubusercontent.com/61566348/147399017-c34dc9a2-15c9-4dd9-bbe5-f4fd54d2c371.png)

