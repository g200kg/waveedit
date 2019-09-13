var DEVICE_UUID     = "928a3d40-e8bf-4b2b-b443-66d2569aed50";
var bleDevice = navigator.bluetooth.requestDevice(
    {
      filters: [{ services: [DEVICE_UUID] }]
    }).then(
        ()=>{console.log("ok")},
        (err)=>{console.log("ng",err.message)}
      )
