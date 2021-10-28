import React from "react"
import "./Carousel.css"

function Carousel(){

    const imgs = document.getElementById('imgs')
const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')

const img = document.querySelectorAll('#imgs img')

let idx = 0;
let interval = setInterval(run, 2000)

function run(){

    idx++
    changeImage()
}

function changeImage(){
    if (idx > img.length -1) {
        idx = 0;
    }else if(idx < 0){
        idx = img.length - 1 
    }

    imgs.style.transform = `translateX(${-idx * 500}px)`
}

function resetInterval(){

    clearInterval(interval)
    interval = setInterval(run, 2000)
}

rightBtn.addEventListener('click', () => {
    idx++
    changeImage()
    resetInterval()
})

leftBtn.addEventListener('click', () => {
    idx--
    changeImage()
    resetInterval()
})

    return(
        <div className ="carousel">
        <div className="image-container" id="imgs">
            <div className ='image-box'>
                <img src="https://images.unsplash.com/photo-1496721398107-986c99ba7126?
                    ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80" 
                    alt="a haircut first" />
            </div>
            <div className = 'image-box'>
                <img src="https://images.unsplash.com/photo-1629189784191-9afdcbcb0398?
                    ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80" 
                    alt="another haircut second" />
            </div>
            <div className="image-box">
                <img src="https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?
                    ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=495&q=80" 
                    alt="yet another haircut third" />
            </div>
            <div className="image-box">
                <img src="https://images.unsplash.com/photo-1494302377477-915db5a8e609?
                    ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" 
                    alt="still a haircut fourth" />
            </div>
        </div>
        <div className="button-container">
            <button id="left" className = 'btn'>Prev</button>
            <button id="right" className = 'btn'>Next</button>
        </div>
    </div>
    )
}

export default Carousel;