let onHover = document.querySelectorAll(".horizontal")
let colorArray = ["red", "orangered", "dodgerblue", "purple", "forestgreen"]
onHover.forEach((element) => {
     element.addEventListener('mouseover', () => {
        let randomColor = colorArray[Math.floor(Math.random()*colorArray.length)]
        element.style.backgroundColor = randomColor
    })
    element.addEventListener('mouseout', () => {
        setTimeout(() => {
        element.style.backgroundColor = "transparent";
        }, 500);
})
})