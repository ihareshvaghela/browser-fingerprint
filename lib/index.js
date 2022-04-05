"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDeviceId = void 0;
const crypto_js_1 = require("crypto-js");
const getAudioFingerPrint_1 = require("./getAudioFingerPrint");
/**
 * This functions working
 * @Param {null}
 * @return {Promise} - resolve(string)
 */
const getDeviceId = () => {
    /***
     * @I userMediaFingerPrint
     * @II FingerPrintJs
     * @III canvasFingerPrint
     * @IV userAgentFingerPrint + canvasFingerPrint
     * @V WebRTC_FingerPrinting
     * @VI audioFingerprinting
     * @VII audio and canvas fingerprint
     */
    /**
     * @method 1
     * this method will get the user's device informations and generate a unique value
     * @drawback
     * 1. This function will return same value if another user has same config machine.
     * 2. If user changes browser plugins(extensions) then the value will also be changed.
     * 3. If user changes his monitor then this method will also give different result.
     * 4. mimeTypes is also depricated and will be removed from browsers in future
     *  @conclusion - this function should never be used
     */
    /*
      let navigator_info = window.navigator;
      let screen_info = window.screen;
      let uid: any = navigator_info.mimeTypes.length;
      uid += navigator_info.userAgent.replace(/\D+/g, "");
      uid += navigator_info.plugins.length;
      uid += screen_info.height || "";
      uid += screen_info.width || "";
      return (uid += screen_info.pixelDepth || "");
    */
    /**
     * It will generate unique value for each device always {particular browser}
     * @method 2
     */
    /**
     * This function will return a promise which result a string output
     * @fingerPrintJs - using fingerPrintJs library
     * @Param {null}
     * @return {Promise}
     */
    // return FingerprintJs.load()
    //   .then((response) => response.get())
    //   .then((result) => result.visitorId);
    /**
     * @method 3
     * @canvasFingerPrint
     * @Param {null}
     * @return {deviceId} - hashed value with sha512
     *
     * This method usages canvas based fingerprinting -
     * with this approach the statistics show that if you put this information together, your browser fingerprint will only match 1 in 286,777 others.
     * The alternate solution of this approach to return always unique value are
     * @first
     *  1. get the unique username of current user
     *  2. encrypt this value with the user as key
     *  3. return this value.
     * usagecase - usernames will be unique for each user and so our hashed value will be unique for each user.
     * For this approach to work we will need this function to take an string argument which will be the username value of the current logged-in user.
     * @second
     *  1. Combine method 1 and method 3 formulae
     */
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const canvasFingerPrint = (function () {
        try {
            var canvas = document.createElement("canvas");
            var ctx = canvas.getContext("2d");
            var txt = "edeXa9accounts..$#edeXa((^@gdsSRTdfyt!~cz";
            ctx.textBaseline = "top";
            ctx.font = "16px 'Arial'";
            ctx.textBaseline = "alphabetic";
            ctx.rotate(0.05);
            ctx.fillStyle = "#f60";
            ctx.fillRect(125, 1, 62, 20);
            ctx.fillStyle = "#069";
            ctx.fillText(txt, 2, 15);
            ctx.fillStyle = "rgba(102, 200, 0, 0.7)";
            ctx.fillText(txt, 4, 17);
            ctx.shadowBlur = 10;
            ctx.shadowColor = "blue";
            ctx.fillRect(-20, 10, 234, 5);
            var string = canvas.toDataURL();
            var hash = 0;
            if (string.length === 0)
                return "nothing!";
            for (let i = 0; i < string.length; i++) {
                hash = (hash << 5) - hash + string.charCodeAt(i);
                // 1. leftshift operation
                // 2. 0 + char =
                // 3. 0char - this will be converted to binary
                // 4. return to step 1
                hash = hash & hash;
                // bitwise and operation 1(1X1 = 0)
                //  the bit in the resulting binary representation is 1 (1 × 1 = 1); otherwise, the result is 0 (1 × 0 = 0 and 0 × 0 = 0)
                /**
                 * example -
                      0101 (decimal 5)
                    AND 0011 (decimal 3)
                      = 0001 (decimal 1)
                 */
                // ref - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_AND
            }
            const hashedDeviceId = (0, crypto_js_1.SHA512)(hash === null || hash === void 0 ? void 0 : hash.toString()).toString(crypto_js_1.enc.Base64);
            return hashedDeviceId; //example - JxXleEyKh11uO0sQZoAF2ICnheXJiR0DVPAvp78qI/9ocQwE8hf8hiQu1EhK+v2L7GnePijKiu6Ygfhu/TY3uA==
        }
        catch (error) {
            /**
             * Catch Errors here
             */
            // fall back to default method if any error occurs
            let navigator_info = window.navigator;
            let screen_info = window.screen;
            let uid = navigator_info.mimeTypes.length;
            uid += navigator_info.userAgent.replace(/\D+/g, "");
            uid += navigator_info.plugins.length;
            uid += screen_info.height || "";
            uid += screen_info.width || "";
            return (0, crypto_js_1.SHA512)((uid += screen_info.pixelDepth || "")).toString(crypto_js_1.enc.Base64);
        }
    })();
    // return canvasFingerPrint;
    /**
     * @method 4
     * @userAgentFingerPrint + @canvasFingerPrint
     * @Param {null}
     * @return {deviceId} - string
     * chances of uniqueness is increased by 1
     * This method is the combination fo the method 1 and method 2
     * usage case - canvas fingerprint + usernavigator value
     * drawback - if two peoples are uging same useragent then there is no meaning of using thsi method
     */
    // const userNavigator = window.navigator.userAgent.replace(/\D+/g, "");
    // return SHA256(currentUserDeviceId + userNavigator).toString(enc.Base64);
    /**
     * @method 5
     * @WebRTC_FingerPrinting
     * @param {null}
     * @return {peerConnectionUserId} - number
     *
     * Using webRtc to generate uniqueid
     * @browser_compatibility - https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection#browser_compatibility
     *
     * @drawbacks
     *  1. not supported in firefox and new versions of safari
     *  2. It generates unique Id for whole machine so if you change browser you Id will remain same.
     */
    // WebRTCUniqueId()
    //   .then((data) => {
    //     console.log(data);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    /**
     * @method 6
     * @audioFingerprinting
     * @param {null}
     * @return {Promise} - number
     *
     * @pitfalls - https://fingerprintjs.com/blog/audio-fingerprinting/
     * except tor browser and brave browser it will work like a charm. Brave and tor are privacy concious browsers so they slightly modify the audio signals.
     */
    const audioFingerPrint = new Promise((resolve, reject) => {
        getAudioFingerPrint_1.getAudioFingerPrint.run(function (fingerprint) {
            resolve(fingerprint);
        });
    });
    /**
     * @method 7 - @audioFingerPrinting + @canvasFingerPrinting
     * @Accuracy - high
     *
     * @param {null}
     * @return {Promise} - result sha512 hash5Kb+kh34lyLdojGH54E1B4RInTdpp9pwmKJgUJ8T7WgDuk13gAatlJ9DhWCAhejG5xgJnbj2KjQTr9PnwdFU1Q==
     */
    const AudioCanvasFingerPrint = new Promise((resolve, reject) => {
        audioFingerPrint.then((audioChannelResult) => {
            // resolve promise with sha512 hashing
            resolve((0, crypto_js_1.SHA512)(canvasFingerPrint + audioChannelResult).toString(crypto_js_1.enc.Base64));
        });
    });
    return AudioCanvasFingerPrint;
};
exports.getDeviceId = getDeviceId;
