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












