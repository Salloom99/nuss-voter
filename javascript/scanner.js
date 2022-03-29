function onScanSuccess(decodedText, decodedResult) {
  desc.textContent = decodedText;
}

function onScanFailure(error) {
  let isScanning = scanner.stateManagerProxy.isScanning()
  console.log(isScanning);
  // console.warn(`Code scan error = ${error}`);
}

async function getCameraId() {
  var cameras = await Html5Qrcode.getCameras();
  currentCameraId = cameras[currentCameraIndex].id;
}

function scannerIsReady() {
  return scanner.stateManagerProxy.canScanFile();
}

function startScanner() {
  scanner.start(currentCameraId, null, onScanSuccess, onScanFailure);
}

function stopScanner() {
  scanner.stop();
}

function toggleIcon() {
  cameraBtn.classList.toggle('fa-camera');
  cameraBtn.classList.toggle('fa-qrcode');
}

function onCameraBtnClick() {
  toggleIcon();
  if (scannerIsReady())
    startScanner();
  else
    stopScanner()
}


let scanner = new Html5Qrcode("reader", { fps: 10 }, false);

let currentCameraIndex = 1;
let currentCameraId = null;

let cameraBtn = document.querySelector('.fa-camera');
let desc = document.querySelector('.desc');
getCameraId();
cameraBtn.addEventListener('click',onCameraBtnClick);

