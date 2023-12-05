

let count =0
let shapes = [
    "https://www.freepnglogos.com/uploads/circle-png/circle-outline-blank-png-icon-download-16.png",
    "https://t4.ftcdn.net/jpg/05/25/04/45/360_F_525044587_OA3mHmTiGlZ3v8gG3JBE1SDgasnMsu8t.jpg",
    "https://images.vexels.com/media/users/3/139264/isolated/preview/983b546c8b5869cfef413fc418fd1d0e-rhombus-shape-icon.png"
]




const boxToCircle = () =>{
    // 1.) target box
    let square = document.querySelector('.box')
    square.classList.toggle('circle')
}

const boxToBio = ()=>{
    let square = document.querySelector('.box')
    square.classList.toggle('bio')
}

const showBio = ()=>{
    boxToBio()
    let newBox = document.querySelector('.bio')
    newBox.innerHTML = "This represents "
}

const hideImage = ()=>{
    let target = document.querySelector('.jordan')
    target.classList.toggle('disappear')
    let btn = document.querySelector('.hidden')
    btn.innerHTML = "Show Me"
}
const lightFire = () =>{
    let target = document.querySelector('.bubble')
    target.classList.toggle('flame')
}
const rain = ()=> {
    let target = document.querySelector('.soccer')
    target.classList.toggle('rain')
}
const singleLadies = () =>{
    let target = document.querySelector('.party')
    target.classList.toggle('partaay')
}


const changeMario = ()=>{
    let mario = document.querySelector('.mario')
    mario.classList.toggle('color')
    // changes Background

    // changeMario Image
    let pic = document.querySelector('.plumber')
    pic.setAttribute('src','https://i.pinimg.com/originals/99/d5/75/99d57579caaa6c061b2172d2e8030a78.gif')
// Change Text
    let quotes = document.querySelector('.speech')
    quotes.style.fontSize = "18px"
    quotes.innerHTML = "Im up and Ready To Party!"

}

const changeShape = () => {
    count++
    let shape  = document.querySelector('.shape')
    shape.setAttribute('src',shapes[count])
}
const changeShapeBack = () => {
    count--
    let shape  = document.querySelector('.shape')
    shape.setAttribute('src',shapes[count])
}
const startRun = () => {
    let girl = document.querySelector('.runner')
    girl.classList.toggle('running')
}


const getLengths = (arr) =>{
    let lArray = []
    arr.forEach((item)=>{
        // console.log(item.length)
        lArray.push(item.length)
    })
    console.log(lArray)
}

getLengths(['apple,',"jordan","leo","marsha"])