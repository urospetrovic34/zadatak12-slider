const sliderCircle = document.querySelector(".slider-circle")
const secondRowSlider = document.querySelector(".second-row-slider")
const levelSlider = document.querySelector(".level-slider")
const toggleContainer = document.querySelector(".toggle-container")
const toggleCircle = document.querySelector(".toggle-circle")
const monthOrYearBilling = document.querySelector(".month-or-year-billing")
const monthOrYearBillingSmall = document.querySelector(".month-or-year-billing-small")
const numberOfViewsParagraph = document.querySelector(".number-of-views-paragraph")
const price = document.querySelector(".price")
const priceSmall = document.querySelector(".price-small")
let totalPrice = 0
let isClicked = false

window.addEventListener("load",(e)=>{
    if(localStorage.getItem("circlePosition")==="calc(0% - 20px)"){
        levelSlider.style.width = "calc(0% - 20px)"
        numberOfViewsParagraph.innerHTML = "10K PAGEVIEWS"
        totalPrice = 8
    }
    else if(localStorage.getItem("circlePosition")==="calc(25% - 20px)"){
        levelSlider.style.width = "calc(25% - 20px)"
        numberOfViewsParagraph.innerHTML = "50K PAGEVIEWS"
        totalPrice = 12
    }
    else if(localStorage.getItem("circlePosition")==="calc(50% - 20px)"){
        levelSlider.style.width = "calc(50% - 20px)"
        numberOfViewsParagraph.innerHTML = "100K PAGEVIEWS"
        totalPrice = 16
    }
    else if(localStorage.getItem("circlePosition")==="calc(75% - 20px)"){
        levelSlider.style.width = "calc(75% - 20px)"
        numberOfViewsParagraph.innerHTML = "500K PAGEVIEWS"
        totalPrice = 24
    }
    else{
        levelSlider.style.width = "calc(100% - 20px)"
        numberOfViewsParagraph.innerHTML = "1M PAGEVIEWS"
        totalPrice = 36
    }
    if(localStorage.getItem("billingType")==="year"){
        price.innerHTML = "$" + totalPrice*0.25 + ".00"
        monthOrYearBilling.innerHTML = "/" + " " + "year"
        priceSmall.innerHTML = "$" + totalPrice*0.25 + ".00"
        monthOrYearBillingSmall.innerHTML = "/" + " " + "year"
        toggleCircle.classList.add("toggle-circle-right")
    }
    else{
        price.innerHTML = "$" + totalPrice + ".00"
        monthOrYearBilling.innerHTML = "/" + " " + "month"
        priceSmall.innerHTML = "$" + totalPrice + ".00"
        monthOrYearBillingSmall.innerHTML = "/" + " " + "month"
        toggleCircle.classList.remove("toggle-circle-right")
    }
})

const sliderMove = (e) => {
    let sliderWidth = secondRowSlider.offsetWidth
    let posX = e.pageX-secondRowSlider.offsetLeft
    if(posX<(sliderWidth/5)){
        levelSlider.style.width = "calc(0% - 20px)"
        numberOfViewsParagraph.innerHTML = "10K PAGEVIEWS"
        totalPrice = 8
    }
    else if(posX<((sliderWidth/5)*2)){
        levelSlider.style.width = "calc(25% - 20px)"
        numberOfViewsParagraph.innerHTML = "50K PAGEVIEWS"
        totalPrice = 12
    }
    else if(posX<((sliderWidth/5)*3)){
        levelSlider.style.width = "calc(50% - 20px)"
        numberOfViewsParagraph.innerHTML = "100K PAGEVIEWS"
        totalPrice = 16
    }
    else if(posX<((sliderWidth/5)*4)){
        levelSlider.style.width = "calc(75% - 20px)"
        numberOfViewsParagraph.innerHTML = "500K PAGEVIEWS"
        totalPrice = 24
    }
    else{
        levelSlider.style.width = "calc(100% - 20px)"
        numberOfViewsParagraph.innerHTML = "1M PAGEVIEWS"
        totalPrice = 36
    }
    if(localStorage.getItem("billingType")==="year"){
        price.innerHTML = "$" + totalPrice*0.25 + ".00"
        priceSmall.innerHTML = "$" + totalPrice*0.25 + ".00"
    }
    else{
        price.innerHTML = "$" + totalPrice + ".00"
        priceSmall.innerHTML = "$" + totalPrice + ".00"
    }
    localStorage.setItem("circlePosition",levelSlider.style.width)
}

sliderCircle.addEventListener("mousedown",(e)=>{
    e.preventDefault();
    document.body.style.cursor = "grabbing"
    isClicked = true
    console.log(isClicked)
})

secondRowSlider.addEventListener("click",(e)=>{
    e.preventDefault()
    sliderMove(e)
})

window.addEventListener("mousemove",(e)=>{
    if(isClicked){
        sliderMove(e)
    }
})

window.addEventListener("mouseup",(e)=>{
    e.preventDefault()
    document.body.style.cursor = "default"
    isClicked = false
    console.log(isClicked)
})

toggleContainer.addEventListener("click",(e)=>{
    e.preventDefault()
    if(toggleCircle.classList.contains("toggle-circle-right")){
        toggleCircle.classList.remove("toggle-circle-right")
        monthOrYearBilling.innerHTML = "/ month"
        price.innerHTML = "$" + totalPrice + ".00"
        priceSmall.innerHTML = "$" + totalPrice + ".00"
        monthOrYearBillingSmall.innerHTML = "/" + " " + "month"
        localStorage.setItem("billingType","month")
    }
    else{
        toggleCircle.classList.add("toggle-circle-right")
        monthOrYearBilling.innerHTML = "/ year"
        price.innerHTML = "$" + totalPrice*0.25 + ".00"
        priceSmall.innerHTML = "$" + totalPrice*0.25 + ".00"
        monthOrYearBillingSmall.innerHTML = "/" + " " + "year"
        localStorage.setItem("billingType","year")
    }
})