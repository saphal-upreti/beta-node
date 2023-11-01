//webaddress
try{
about = () => {
  window.open("aboutme", "_self");
};
myPort = () => {
  window.open("myportfolio", "_self");
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

showAll=()=> {
  localStorage.setItem("pname", "all");
}
programs=()=> {
  localStorage.setItem("pname", "program");
}
music=()=> {
  localStorage.setItem("pname", "music");
}
designs=()=> {
  localStorage.setItem("pname", "design");
}
if (address=="aboutme") {
  document.getElementById("aboutme").style.fontWeight = "bold";
}
if (address=="myportfolio") {
  document.getElementById("myPort").style.fontWeight = "bold";
}
if (address=="resume") {
  document.getElementById("resume").style.fontWeight = "bold";
}
if (address=="contact") {
  document.getElementById("contact").style.fontWeight = "bold";
}

if (localStorage.getItem("pname") == "all") {
  document.getElementById("all").style.fontWeight = "bold";
}
if (localStorage.getItem("pname") == "program") {
  document.getElementById("program").style.fontWeight = "bold";
}
if (localStorage.getItem("pname") == "music") {
  document.getElementById("music").style.fontWeight = "bold";
}
if (localStorage.getItem("pname") == "design") {
  document.getElementById("designs").style.fontWeight = "bold";
}

}
catch(error){
  console.log("error")
}
