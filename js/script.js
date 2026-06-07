console.log("Hej world");
// -----------------------FAQ section----------------
const questions=document.querySelectorAll(".question");


function faq(e){
// console.log(questions);

const answer = e.currentTarget.nextElementSibling;


answer.classList.toggle("active");
e.currentTarget.classList.toggle("open");

}

for (let btn of questions){
    btn.addEventListener("click",faq);
    
}


// ----------------Reviews section------------------

const reviewsContainer=document.querySelector(".reviews-container");

const nextBtn=document.querySelector(".btn-next");
const prevBtn=document.querySelector(".btn-prev");

function nextReview(){
    reviewsContainer.scrollBy({
        left:400, 
        behavior:"smooth"

    });
}

function prevReview(){
    reviewsContainer.scrollBy({
        left:-400, 
        behavior:"smooth"

    });
}


nextBtn.addEventListener("click", nextReview);
prevBtn.addEventListener("click", prevReview);


// ---------------mobile Navigation-------------
const bars = document.querySelector("#bars");

const openNav = () => {
    document.querySelector("nav ul ").classList.toggle("show");
    document.querySelector("#bars i").classList.toggle("fa-bars");
    document.querySelector("#bars i").classList.toggle("fa-xmark");
}

bars.addEventListener("click", openNav);












