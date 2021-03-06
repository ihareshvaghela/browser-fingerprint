import { getDeviceId } from '@rajesh896/browser-fingerprint';
import React, { useState } from 'react';
import './App.css';

function App() {
  const [browserFingerprint, setBrowserFingerPrint] = useState("");
  const getBrowserFingerPrint = () => {
    getDeviceId().then((fingerprint) => {
    setBrowserFingerPrint(fingerprint)
    }).catch((err) => {
    setBrowserFingerPrint(err)
  })
 }
  
  return (
    <div className="App">
      <div className='header'>
        <header >
        Browser FingerPrint
      </header>
      <p>This package generates a unique ID/String for different browsers. Like chrome, firefox and any other browser which supports <b>canvas fingerPrinting</b> and <b>audio FingerPrinting</b>.</p>
      </div>
      <section className="id-container">
        <textarea rows={3} cols={100} placeholder="This browser's fingerprint" value={browserFingerprint}></textarea>
        <p><button onClick={() => {getBrowserFingerPrint()}}>Generate FingerPrint</button></p>
        <p style={{marginTop: 20}}>You must try this window in incognito, with vpn and check if Id remains same. It will never change.</p>
      </section>
      <footer>
        <div><a href='https://github.com/rajesh-royal' title='developer/author github account'>@rajesh-royal</a></div>
        <div><a title='go to github link of this repo' href='https://github.com/Rajesh-Royal/browser-fingerprint'>GitHub</a></div>
      </footer>
    </div>
  );
}

export default App;
