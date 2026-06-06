console.log("Hej world");

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












