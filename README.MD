## Built for Reactjs projects specially but not limited to it.

Current version is 1.0.0 [very beginning]

This package generates a unique string for different browser. Like chrome, firefox etc.

>## **Use in Reactjs**
 
```javascript
import { getDeviceId } from "@rajesh896/browser-fingerprint";

getDeviceId().then((fingerprint) => {
    // fingerprint is your unique browser id.
    // This is well tested

    // the result you receive here is the combination of Canvas fingerprint and audio fingerprint.
})
```

>## A simple example of using this script in html file
 1. Execute `npm i @rajesh896/browser-fingerprint`
 2. Then -
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>FingerPrint</title>
</head>

<body>
    <script type="module">
        import("./node_modules/@rajesh896/browser-fingerprint/index.js").then((module) => {
            module.getDeviceId().then((fingerprint) => {
                console.log(fingerprint);
            })
        })
    </script>
</body>

</html>
```

This package will be updated soon with `ts` support and better functions and code handling. see you 🙂

If you want to use it in simple `.html` file, please read the `index.html` file in the root directory.


Contributors - @Rajesh-Royal, @nareshprajapati