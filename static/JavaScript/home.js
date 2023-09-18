loop = () =>{
  document.getElementById("html").addEventListener(
    "click",
    (transit = () => {
      document.getElementById("svgText").style.fontSize = 320;
      setTimeout(nextPage, 400);
    })
  );
}
nextPage = () => {
  window.open("aboutme", "_self");
};
clearInterval(loop());

aboutme=()=>{
  window.open("aboutme", "_self");
}

myPort=()=>{
  window.open("myPort", "_self");
}

