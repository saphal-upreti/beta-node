window.onload = (event) => {
  if (document.documentElement.scrollWidth > 900) {
    document.getElementById("html").addEventListener(
      "click",
      (transit = () => {
        document.getElementById("svgText").style.fontSize = 300;
        setTimeout(nextPage, 400);
      })
    );
  }
  if (document.documentElement.scrollWidth < 500) {
    document.getElementById("html").addEventListener(
      "click",
      (transit = () => {
        document.getElementById("svgText").style.fontSize = 100;
        setTimeout(nextPage, 400);
      })
    );
  }
  else {
    document.getElementById("html").addEventListener(
      "click",
      (transit = () => {
        document.getElementById("svgText").style.fontSize = 150;
        setTimeout(nextPage, 400);
      })
    );
  }
};
nextPage = () => {
  window.open("aboutme", "_self");
};
clearInterval(loop());
