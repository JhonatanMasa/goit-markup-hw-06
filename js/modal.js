const openModal = document.querySelector(".section-button-index");
const modal = document.querySelector(".modal");
const closemodal = document.querySelector(".modal-close");

openModal.addEventListener("click", (e)=>{
    e.preventDefault();
    modal.classList.add("modal-show");
})

closemodal.addEventListener("click", (e)=>{
    e.preventDefault();
    modal.classList.remove("modal-show");
})