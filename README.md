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

            // Instantiates a new JSFileHandler object and pass the HTML Element that contains the file attached
            const jsFileHandler= new JSFileHandler(fileUploaderElement);

            // Generates a file object example below:
            /*  { FileName : String, FileType: String, 
                FileContent: Byte[], FileExtension: String, 
                FileSize : String, LastModifiedDate: String}
                */
            const fileObject = await jsFileHandler.GenerateFileObject();

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

            // Instantiates a new JSFileHandler object and pass the HTML Element that contains the file attached
            const jsFileHandler = new JSFileHandler(htmlElement);

            // Generates a file object
            const fileObject = await jsFileHandler.GenerateFileObject();

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


## Other Functions

DownloadFile()
SaveToSessionStorage()
GetFromSessionStorage()
SaveToLocalStorage()
GetFromLocalStorage()

```html
    
<script>
    const jsFileHandler = new JSFileHandler(htmlElement);
    
    // Downloading a file is simple just pass in the FileCotent ByteArray and FileTyppe.
    jsFileHandler.DownloadFile({
        FileContent: someByteArrayVar,
        FileType: "image/png"
    });
    
    // Or ideally pass in the object created by the GenerateFileObject function
    const fileObject = await jsFileHandler.GenerateFileObject();
    jsFileHandler.DownloadFile(fileObject);
    
    // You can save the file object to session storage like in the example below
    jsFileHandler.SaveToSessionStorage("thisIsMyKey", fileObject)
    
    // Session Storage retrieval
     const myNewFileObject = jsFileHandler.GetFromSessionStorage("thisIsMyKey");
    
</script>
```


