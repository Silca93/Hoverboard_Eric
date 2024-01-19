let onHover = document.querySelectorAll(".horizontal")

let colorArray = ["red", "orange", "blue", "yellow", "purple", "green"]


onHover.forEach((element) => {
     element.addEventListener('mouseover', () => {
        let randomColor = colorArray[Math.floor(Math.random()*colorArray.length)]
        element.style.backgroundColor = randomColor
    })
})
