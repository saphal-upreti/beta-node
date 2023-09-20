document.getElementById("html").addEventListener(
  "click",
  (transit = () => {
    document.getElementById("svgText").style.fontSize = 320;
    setTimeout(nextPage, 400);
  })
);

nextPage = () => {
  window.open("aboutme", "_self");
};
clearInterval(loop());


// aboutme=()=>{
//   // window.open("aboutme", "_self");
//   console.log("test")
// }

myPort = () => {
  window.open("myPort", "_self");
};

document.getElementsByClassName("myPort").addEventListener(
  "click",
  (myPort = () => {
    window.open("MyPortofolio", "_self");
  })
);
