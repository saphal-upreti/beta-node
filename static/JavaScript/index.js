//webaddress

about = () => {
  window.open("aboutme", "_self");
};
myPort = () => {
  window.open("MyPortofolio", "_self");
};
resume = () => {
  window.open("resume", "_self");
};
contact = () => {
  window.open("contact", "_self");
};
bold=(el)=>{
  el.style.fontSize = "larger"
}
unbold=(el)=>{
  el.style.fontSize = "medium"
}

const currentURL = window.location.href;
const parts = currentURL.split("/");
const address = parts[parts.length - 1];

function select1() {
  localStorage.setItem("pname", "all");
}
function select2() {
  localStorage.setItem("pname", "program");
}
function select3() {
  localStorage.setItem("pname", "music");
}
function select4() {
  localStorage.setItem("pname", "design");
}

if (address=="aboutme") {
  document.getElementById("aboutme").style.fontWeight = "bold";
}
if (address=="MyPortofolio") {
  document.getElementById("myPort").style.fontWeight = "bold";
}
if (address=="resume") {
  document.getElementById("resume").style.fontWeight = "bold";
}
if (address=="contact") {
  document.getElementById("contact").style.fontWeight = "bold";
}
if (localStorage.getItem("pname") == "all") {
  document.getElementById("p1").style.fontWeight = "bold";
}
if (localStorage.getItem("pname") == "program") {
  document.getElementById("p2").style.fontWeight = "bold";
}
if (localStorage.getItem("pname") == "music") {
  document.getElementById("p3").style.fontWeight = "bold";
}
if (localStorage.getItem("pname") == "design") {
  document.getElementById("p4").style.fontWeight = "bold";
}



