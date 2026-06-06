const testimonials = [
{
text:"K9 Events transformed our wedding into a dream celebration.",
author:"- Priya Sharma"
},
{
text:"Professional team with flawless event execution.",
author:"- Raj Mehta"
},
{
text:"Our corporate event was managed perfectly.",
author:"- Anjali Patel"
}
];

let index = 0;

setInterval(() => {

index = (index + 1) % testimonials.length;

document.getElementById("testimonial-text").textContent =
testimonials[index].text;

document.getElementById("testimonial-author").textContent =
testimonials[index].author;

}, 3000);

document.getElementById("contactForm").addEventListener("submit", function(e){

e.preventDefault();

const name = document.getElementById("name").value.trim();
const email = document.getElementById("email").value.trim();

if(name === "" || email === ""){
alert("Please fill all required fields.");
return;
}

alert("Form submitted successfully!");
this.reset();

});