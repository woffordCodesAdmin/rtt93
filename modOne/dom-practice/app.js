let icecream = {
    vanilla: {
        name: "Dave East",
        coneImage: "https://heartafact.com/wp-content/uploads/2022/04/15-1.png",
        description: "Dave East, is an American rapper and actor. East began his career in 2010, and gained attention in 2014 from his eighth mixtape, Black Rose. Its release garnered the attention of fellow New York rapper Nas, who later signed East to his record label, Mass Appeal Records, and later in conjunction with Def Jam Recordings.",
        shakeAvi: "https://media2.giphy.com/media/dx7B5B6SLHNV02mTo2/giphy.gif",
        recipe: "...eastMix"
    },
    chocolate: {
        name: "Beatles",
        coneImage: "https://cdn.britannica.com/18/136518-050-CD0E49C6/The-Beatles-Ringo-Starr-Paul-McCartney-George.jpg",
        description: "The Beatles were an English rock band, formed in Liverpool in 1960, that comprised John Lennon, Paul McCartney, George Harrison and Ringo Starr. They are regarded as the most influential band of all time and were integral to the development of 1960s counterculture and popular music's recognition as an art form",
        shakeAvi: "https://media.tenor.com/YBBybTlRAl8AAAAC/the-beatles-hello-hello.gif",
        recipe: "Elanor Rigby "
    },
    strawberry: {
        name: "Greentea Peng",
        coneImage: "https://i.guim.co.uk/img/media/2c0ae22e4c9da971c89115dffc2f6ee1b4db3eb3/0_1044_2713_1628/master/2713.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=12724b77ad7fd99b917ab00a1d955205",
        description: "Aria Wells, known professionally as Greentea Peng, is a neo-soul and self-described 'psychedelic R'n'B' singer and songwriter from south east London, UK. Her musical influences include Lauryn Hill, Erykah Badu, Miss Dynamite and Lily Allen.",
        shakeAvi: "https://thumbs.gfycat.com/LeanSilverDromaeosaur-size_restricted.gif",
        recipe: "yaaahhhh Denn!"
    }
}

// Target all of the changeable ele
let title = document.querySelector('.flavor')
// change innerHTML
let icecreamPic = document.querySelector('.iceC')
// change SRC
let description = document.querySelector('.textbox')
// change innerHTML
let recipe = document.querySelector('.smContainer')
// add Recipe txt
let shaker = document.querySelector('.description')
// add image




const changeFlavors = (flavor) =>{
    // Determine what flavor
    if(flavor === "vanilla"){
        let body = document.querySelector('body')
        body.style.backgroundImage = "url('https://media.tenor.com/CHchDWaZDz4AAAAC/fog-smoke.gif')"
        addText(title,icecream.vanilla.name)
        addImage(icecreamPic,icecream.vanilla.coneImage)
        addText(description,icecream.vanilla.description)
        uploadImage(recipe,icecream.vanilla.shakeAvi)
        addText(shaker,icecream.vanilla.recipe)
        // ------------------------------
    }else if(flavor === "chocolate"){
        let body = document.querySelector('body')
        body.style.backgroundImage = "url('https://i.gifer.com/9uwi.gif')"
        addText(title,icecream.chocolate.name)
        addImage(icecreamPic,icecream.chocolate.coneImage)
        addText(description,icecream.chocolate.description)
        uploadImage(recipe,icecream.chocolate.shakeAvi)
        addText(shaker,icecream.chocolate.recipe)
    }else if(flavor === "strawberry"){
        let body = document.querySelector('body')
        body.style.backgroundImage = "url('https://cdn.pixabay.com/animation/2022/10/05/15/54/15-54-38-48_512.gif')"
        addText(title,icecream.strawberry.name)
        addImage(icecreamPic,icecream.strawberry.coneImage)
        addText(description,icecream.strawberry.description)
        uploadImage(recipe,icecream.strawberry.shakeAvi)
        addText(shaker,icecream.strawberry.recipe)

    }else{
        addText(title,"NeaPolitan")
    }
}


const addText =(target, text)=>{
    target.innerHTML = text
}

const addImage =(target, url)=>{
    target.setAttribute('src',url)
}
const uploadImage = (target,flav)=>{
let newImage = document.createElement('img')
newImage.setAttribute('src',flav)
newImage.setAttribute('class','lowerImage')
target.append(newImage)
}