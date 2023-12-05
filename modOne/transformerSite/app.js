// DOM MANIPULATION

// Goal: Retail Site
// Dynamically change the Entire Site with a click of a button
// General -- Mens -- Womens -- Children

let majorContainer = {
  mens: {
    headImage:
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    optionTags: ["Boots", "Flannels", "Rugged Wear", "Shaving Cream"],
    productImages: [
      {
        name: "Sneakers",
        pic: "https://images.unsplash.com/photo-1527010154944-f2241763d806?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
      },
      {
        name: "Boots",
        pic: "https://images.unsplash.com/photo-1638247025967-b4e38f787b76?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80",
      },
      {
        name: "Flannels",
        pic: "https://images.unsplash.com/photo-1638718297700-e828368a54e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      },
      {
        name: "Scarves",
        pic: "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      },
      {
        name: "Hoodies",
        pic: "https://images.unsplash.com/photo-1509942774463-acf339cf87d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      },
      {
        name: "Hats",
        pic: "https://images.unsplash.com/photo-1521119989659-a83eee488004?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=723&q=80",
      },
    ],
    textDescription:
      "Update your everyday wardrobe with our collection of men’s pants. Discover tailored suit pants for work or special occasions, as well as comfier sweatpants and joggers for downtime. Mix up your weekend look and swap the jeans for a pair of cargo pants or chinos. Browse a range of colors, from neutral blacks and grays to brighter shades and prints. Find everything from soft breathable cotton to functional track pants and luxe velvet dress pants.",
    lowImage:
      "https://images.unsplash.com/photo-1516826957135-700dedea698c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
  },
  womens: {
    headImage:
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d29tZW5zJTIwY2xvdGhpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1400&q=60",
    optionTags: ["Dresses", "Shorts", "Swim Wear", "Jewelry"],
    productImages: [
      {
        name: "Sundress",
        pic: "https://images.unsplash.com/photo-1505658987230-6e74e5ffacd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d29tZW5zJTIwc2tpcnRzfGVufDB8fDB8fHww&auto=format&fit=crop&w=1400&q=60",
      },
      {
        name: "Sundresses",
        pic: "https://images.unsplash.com/photo-1633370901173-0c18b225edbb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHdvbWVucyUyMHN1bmRyZXNzfGVufDB8fDB8fHww&auto=format&fit=crop&w=1400&q=60",
      },
      {
        name: "Swim Wear",
        pic: "https://images.unsplash.com/photo-1551833726-b6549cd73566?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8d29tZW5zJTIwc3dpbXdlYXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1400&q=60",
      },
      {
        name: "Accessories",
        pic: "https://images.unsplash.com/photo-1551024559-d69bcf67d8d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d29tZW5zJTIwc3VuZ2xhc3Nlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1400&q=60",
      },
      {
        name: "Jewelry",
        pic: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHdvbWVucyUyMGpld2Vscnl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1400&q=60",
      },
      {
        name: "Hats",
        pic: "https://images.unsplash.com/photo-1599135533812-77d7343b7e06?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d29tZW5zJTIwaGF0c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1400&q=60",
      },
    ],
    textDescription:
      "Update your everyday wardrobe with our collection of ladies pants. Discover tailored suit pants for work or special occasions, as well as comfier sweatpants and joggers for downtime. Mix up your weekend look and swap the jeans for a pair of cargo pants or chinos. Browse a range of colors, from neutral blacks and grays to brighter shades and prints. Find everything from soft breathable cotton to functional track pants and luxe velvet dress pants.",
    lowImage:
      "https://images.unsplash.com/photo-1608169941368-fd7ac986ac3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHdvbWVucyUyMGNsb3RoaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=1400&q=60",
  },
  kids: {},
};
// -----------------------

let mainImage = document.querySelector(".mainImg");
let option = document.querySelector(".options");
let miniOp = document.querySelectorAll(".choice");
let productBox = document.querySelector(".productContainer");
let pic = document.querySelector(".polaroid");
let textBox = document.querySelector(".textContainer");

const changeAllMens = () => {
  let body = document.querySelector('body')
  body.style.backgroundColor = "lightblue"
  changeTopPic("mens");
  changeOptions("mens");
  product("mens");
  bottomSection("mens")
};
const changeAllWomens = () => {
  let body = document.querySelector('body')
  body.style.backgroundColor = "salmon"
    changeTopPic("womens");
    changeOptions("womens");
    product("womens");
    bottomSection("womens")
  };
const changeTopPic = (gender) => {
  if (gender === "mens") {
    // createImage
    let newimage = document.createElement("img");
    newimage.setAttribute("src", majorContainer.mens.headImage);
    newimage.setAttribute("class", "topPic");
    // replaceWith current
    mainImage.replaceWith(newimage);
  } else if (gender === "womens") {
    // createImage
    let newimage = document.createElement("img");
    newimage.setAttribute("src", majorContainer.womens.headImage);
    newimage.setAttribute("class", "topPic");
    // replaceWith current
    mainImage.replaceWith(newimage);
  } else {
  }
};

const changeOptions = (gender) => {
  if (gender === "mens") {
    majorContainer.mens.optionTags.forEach((tagname) => {
      // CREATE ELE
      let txt = document.createElement("div");
      txt.innerHTML = tagname;
      // REPLACE ELEMENT WITH NEW ELEMENT
      option.append(txt);
    });
  } else if (gender === "womens") {
    majorContainer.womens.optionTags.forEach((tagname) => {
      // CREATE ELE
      let txt = document.createElement("div");
      txt.innerHTML = tagname;
      // REPLACE ELEMENT WITH NEW ELEMENT
      option.append(txt);
    });
  } else {
  }
};

const product = (gender) => {
  if (gender === "mens") {
    majorContainer.mens.productImages.forEach((obj) => {
        let shopBox = document.createElement("img");
        shopBox.setAttribute("src", obj.pic);
        shopBox.setAttribute("class", "product");
        productBox.append(shopBox);
      });
  } else if (gender === "womens") {
    majorContainer.womens.productImages.forEach((obj) => {
        let shopBox = document.createElement("img");
        shopBox.setAttribute("src", obj.pic);
        shopBox.setAttribute("class", "product");
        productBox.append(shopBox);
      });
  } else {
  }
  
};

const bottomSection = (gender) => {
    if(gender === "mens"){
        let newPic= document.createElement('img')
        newPic.setAttribute('src',majorContainer.mens.lowImage)

        newPic.setAttribute('class','polaroid')
        pic.replaceWith(newPic)
        textBox.innerHTML = majorContainer.mens.textDescription
    } else if(gender === "womens"){
        let newPic= document.createElement('img')
        newPic.setAttribute('src',majorContainer.womens.lowImage)
        newPic.setAttribute('class','polaroid')
        pic.replaceWith(newPic)
        textBox.innerHTML = majorContainer.womens.textDescription
    }else{

    }
}