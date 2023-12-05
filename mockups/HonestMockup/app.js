

let texter = document.querySelector('.scrolltxt')
let count = 0
let scrollers = [
    "BlahBlah",
    "OhLalLa",
    "SomethingElse"
]
const carouselup = () => {
    console.log("up")
    count++
    texter.innerHTML= scrollers[count]
}
const carouseldown = () => {
   
    console.log("down")
    count--
    texter.innerHTML= scrollers[count]
}