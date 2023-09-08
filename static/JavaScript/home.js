
loop=() => document.getElementById('html').addEventListener('click', transit=()=>{
    // const textSize = document.getElementById('svgText').style.fontSize
    document.getElementById('svgText').style.fontSize = 320
    setTimeout(nextPage,400)
    // setInterval(textLoop,1)
    // if(document.getElementById('svgText').style.fontSize=="1000px"){
    //     window.open("aboutus","_self")
    //     console.log("confirm")
    // }
    // else{
    //     console.log('hi')
    // }
    console.log("test")
    console.log(document.getElementById('aboutme').value)
    
})
nextPage=()=>{
    window.open("aboutme","_self")
}
// textLoop=()=>{document.getElementById('svgText').style.fontSize = 1000}
clearInterval(loop())
// addEventListener('beforeunload',load=()=>{
//     document.write("loading")
// })

document.getElementsByClassName("aboutme").addEventListener('click', aboutme=()=>{
    // console.log(document.getElementById('aboutme'))
    // nextPage=()=>{
    //     window.open("aboutme","_self")
    // }
    console.log("test")
})

document.getElementsByClassName("myPort").addEventListener('click',
myPort=()=>{
    nextPage=()=>{
        window.open("MyPortofolio","_self")
    }
})

document.getElementById("resume").addEventListener('click',resume=()=>{
    nextPage=()=>{
        window.open("resume","_self")
    }
})

document.getElementById("contact").addEventListener('click',contact=()=>{
    nextPage=()=>{
        window.open("contact","_self")
    }
})
    
