
const openCard = () => {
    // change Width
    let card = document.querySelector('.cardContainer')

    card.style.width="85%"
    // replace Image
    let newImage = document.createElement('img')
    newImage.setAttribute('src','https://media.tenor.com/lqpxcM157pQAAAAC/happy-birthday-happy-dance.gif')
    newImage.setAttribute('class','mainImage')
    let ogImg = document.querySelector('.mainImage')
    ogImg.replaceWith(newImage)
    // Replace topText
    let top = document.querySelector('.topTitle')
    top.innerHTML = "Party the Night Away"
    // Replace bottomText
    let down = document.querySelector('.bottomTxt')
    down.innerHTML= "Then Chase with 2 Aspirin.  -Love Dad"
}