let currentHex = "#6C63FF";
let currentRGB = "rgb(108, 99, 255)";

function generateColor(){

  const r = Math.floor(Math.random()*256);
  const g = Math.floor(Math.random()*256);
  const b = Math.floor(Math.random()*256);

  currentRGB = `rgb(${r}, ${g}, ${b})`;

  currentHex =
    "#" +
    ((1 << 24) + (r << 16) + (g << 8) + b)
    .toString(16)
    .slice(1)
    .toUpperCase();

  document.getElementById("colorBox").style.background =
    currentRGB;

  document.getElementById("hexCode").innerText =
    currentHex;

  document.getElementById("rgbCode").innerText =
    currentRGB;

  document.body.style.background =
    `linear-gradient(135deg, ${currentRGB}, #000)`;

}

function copyHex(){

  navigator.clipboard.writeText(currentHex);

  alert("HEX Copied: " + currentHex);

}

function copyRGB(){

  navigator.clipboard.writeText(currentRGB);

  alert("RGB Copied: " + currentRGB);

}