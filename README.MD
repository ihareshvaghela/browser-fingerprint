## Built for Reactjs projects specially but not limited to it, anyone can use this library within any project which usages Javascript.


This package generates a unique string for different browsers. Like chrome, firefox etc. You can easily do the browser fingerprinting with this library. Its small and minimal.


### CodeSandbox Example - [Generate browser fingerprint](https://codesandbox.io/s/browser-fingerprinting-generate-unique-device-id-or-browser-id-507n2v)
</br>

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

- From version `1.1.0` onwards we have a dependency `crypto-js`. If you do not want to have this dependency then use the earlier versions of this library. 

If you want to use it in simple `.html` file, please read the `index.html` file in the root directory.


Contributors - @Rajesh-Royal, @nareshprajapati