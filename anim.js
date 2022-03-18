const start = document.querySelector("#start");
const count = document.querySelector(".count");
const burble = document.querySelector(".burbujas")
const content = document.querySelector(".content");
const containerContent = document.querySelector(".container-content");
const comments = document.querySelectorAll(".comment");

start.onclick = async () =>{
    start.classList.add("start-end");
    count.classList.add("count-active");
    burble.classList.add("burbujas-active");
    
    let id = setInterval(() => {
        let now = count.querySelector("h1").textContent;
        if (now !== '1') {
            count.querySelector("h1").textContent = now - 1;
        }
        else{
            clearInterval(id);
            count.style.opacity = '0';
        }
    }, 1000);

    setTimeout(() => {
        containerContent.classList.add("container-content-active");
    }, 4000);

    // COMENTARIOS 
    setTimeout(() => {
        comments[0].classList.toggle("comment-active");
    }, 5000);
    setTimeout(() => {
        comments[0].classList.toggle("comment-active");
        comments[1].classList.toggle("comment-active");
    }, 10000);
    setTimeout(() => {
        comments[1].classList.toggle("comment-active");
        comments[2].classList.toggle("comment-active");
    }, 15000);
    setTimeout(() => {
        comments[2].classList.toggle("comment-active");
        comments[3].classList.toggle("comment-active");
    }, 20000);
    setTimeout(() => {
        comments[3].classList.toggle("comment-active");
        comments[4].classList.toggle("comment-active");
    }, 25000);
    setTimeout(() => {
        comments[4].classList.toggle("comment-active");
        comments[5].classList.toggle("comment-active");
    }, 30000);
    setTimeout(() => {
        comments[5].classList.toggle("comment-active");
        comments[6].classList.toggle("comment-active");
    }, 35000);
    setTimeout(() => {
        comments[6].classList.toggle("comment-active");
        comments[7].classList.toggle("comment-active");
    }, 40000);
    setTimeout(() => {
        comments[7].classList.toggle("comment-active");
        comments[8].classList.toggle("comment-active");
    }, 45000);
    setTimeout(() => {
        comments[8].classList.toggle("comment-active");
        comments[9].classList.toggle("comment-active");
        content.classList.toggle("content-active");
    }, 50000);
}