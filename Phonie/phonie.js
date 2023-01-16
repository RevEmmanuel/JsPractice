document.getElementById("phoneNumber").oninput = myFunction;

function myFunction() {
  let phoneNumber = document.getElementById("phoneNumber").value;
  if (phoneNumber.length < 4) {
    document.getElementById("logo").setAttribute("src", "");
    document.getElementById("network").textContent = "";
  }
  let network = checkPhoneNumber(phoneNumber);
  document.getElementById("network").textContent = network;
  switch (network) {
    case "GLO":
      document
        .getElementById("logo")
        .setAttribute("src", "./logos/glo_logo.png");
      break;
    case "MTN":
      document
        .getElementById("logo")
        .setAttribute("src", "./logos/mtn_logo.png");
      break;
    case "AIRTEL":
      document
        .getElementById("logo")
        .setAttribute("src", "./logos/airtel_logo.png");
      break;
    case "9MOBILE":
      document
        .getElementById("logo")
        .setAttribute("src", "./logos/etisalat_logo.png");
      break;
  }
}

function checkPhoneNumber(phoneNumber) {
  if (checkGlo(phoneNumber)) return "GLO";
  if (checkMtn(phoneNumber)) return "MTN";
  if (checkAirtel(phoneNumber)) return "AIRTEL";
  if (checkEtisalat(phoneNumber)) return "9MOBILE";
}

function checkGlo(phoneNumber) {
  let glo = ["0805", "0807", "0705", "0815", "0811", "0905", "0915"];
  for (item of glo) {
    if (phoneNumber.startsWith(item)) return true;
  }
  return false;
}

function checkMtn(phoneNumber) {
  let mtn = [
    "0803",
    "0806",
    "0703",
    "0706",
    "0813",
    "0816",
    "0810",
    "0814",
    "0903",
    "0906",
    "0913",
    "0916",
    "07025",
    "07026",
    "0704",
  ];
  for (item of mtn) {
    if (phoneNumber.startsWith(item)) return true;
  }
  return false;
}

function checkAirtel(phoneNumber) {
  let airtel = [
    "0802",
    "0808",
    "0812",
    "0701",
    "0902",
    "0901",
    "0904",
    "0907",
    "0912",
    "0708",
  ];
  for (item of airtel) {
    if (phoneNumber.startsWith(item)) return true;
  }
  return false;
}

function checkEtisalat(phoneNumber) {
  let etisalat = ["0809", "0818", "0817", "0909", "0908"];
  for (item of etisalat) {
    if (phoneNumber.startsWith(item)) return true;
  }
  return false;
}
