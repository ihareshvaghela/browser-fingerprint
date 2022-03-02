Current version is 1.0.0 [very beginning]

This package generates a unique string for different browser. Like chrome, firefox etc.

### How to use

```javascript
import { getDeviceId } from "@rajesh896/browser-fingerprint";

getDeviceId().then((fingerprint) => {
    // fingerprint is your unique browser id.
    // This is well tested

    // the result you receive here is the combination of Canvas fingerprint and audio fingerprint.
})
```

This package will be updated soon with `ts` support and better functions and code handling. see you 🙂

If you want to use it in simple `.html` file, please read the `index.html` file in the root directory.


Contributors - @Rajesh-Royal, @nareshprajapati