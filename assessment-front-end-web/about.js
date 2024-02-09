console.log("hello world");
const image = document.getElementById("cat")


function handleSubmit(evt) {
	evt.preventDefault();
	
	alert("The form has been submitted successfully.");
}

function catPic (evt)  {
	evt.preventDefault()

	alert("You are awesome!")

}


let form = document.querySelector('#contact');

image.addEventListener("mouseover", catPic)
form.addEventListener('submit', handleSubmit);