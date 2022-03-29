function onScanSuccess(decodedText, decodedResult) {
  // handle the scanned code as you like, for example:
  // console.log(`Code matched = ${decodedText}`, decodedResult);
  desc.textContent = decodedText;
}

function onScanFailure(error) {
  let isScanning = scanner.stateManagerProxy.isScanning()
  console.log(isScanning);
  // handle scan failure, usually better to ignore and keep scanning.
  // for example:
  // console.warn(`Code scan error = ${error}`);
}

async function getCameraId() {
  var cameras = await Html5Qrcode.getCameras();
  return cameras[0].id;
}

let scanner = new Html5Qrcode(
  "reader",
  { fps: 10 },
  /* verbose= */ false
);

let cameraBtn = document.querySelector('.fa-camera');
let desc = document.querySelector('.desc');
cameraBtn.addEventListener('click',async ()=>{
  var cameraId = await getCameraId();
  cameraBtn.classList.toggle('fa-camera');
  cameraBtn.classList.toggle('fa-qrcode');
  if (scanner.stateManagerProxy.canScanFile())
    scanner.start(cameraId, null, onScanSuccess, onScanFailure);
  else
    scanner.stop()
});

