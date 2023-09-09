const ratingState = document.querySelector('.rating');
const thankState = document.querySelector(".thankyou");

const btn = document.querySelectorAll(".btn");
const selected = document.getElementById("selected");

const back = document.getElementById("back");

const sumbit = document.getElementById("submit");

back.addEventListener("click",()=>{
    thankState.classList.add("hidden");
    ratingState.classList.remove("hidden");
})


sumbit.addEventListener("click",()=>{
    thankState.classList.remove("hidden");
    ratingState.classList.add("hidden");
});


btn.forEach((item) => {
    item.addEventListener("click",() => {
        selected.innerHTML = item.innerHTML;
    })
})
