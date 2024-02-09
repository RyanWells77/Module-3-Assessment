

const colorBtn = document.getElementById("color")
const placeBtn = document.getElementById("place")
const ritualBtn = document.getElementById("ritual")


const colorBtnClick = () => {
    alert("My Favorite Colors are Blue, Green, and Purple.")
}

const placeBtnClick = () =>{
    alert("I love to be in the mountains.")
}

const ritualBtnClick = () => {
    alert("Cooking dinner for my Family each night.")
}




colorBtn.addEventListener('click', colorBtnClick)
placeBtn.addEventListener('click', placeBtnClick)
ritualBtn.addEventListener('click', ritualBtnClick)
