const image = document.getElementById("image")
const range = document.getElementById("range")
const ArrayImg =[]

for (let index = 1; index < 73; index++){
    ArrayImg.push(`assets/img/audif/${index}.png`)    
}

image.setAttribute("src",ArrayImg[1]);

range.addEventListener("input", (e) => {
    let value = e.target.value;
    image.setAttribute("src", ArrayImg[value])
})

console.log(ArrayImg)