const getcolour=()=>{
    const random=Math.floor(Math.random()*16777215);
    const hexcode="#"+random.toString(16);
    // console.log(random);
    // console.log(hexcode);
    document.body.style.backgroundColor=hexcode;
    document.getElementById("text").innerText=hexcode;

}

document.getElementById("btn").addEventListener(
    "click",
    getcolour
)


getcolour();