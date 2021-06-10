function primeNum(){

let num = document.getElementById("num").value;
let i = 0;
let a = [];

//Only run loop when number is not 1 or whole

if (num != 1 || num == "" || num % 1 !=0) {                  
  while ((i <= num) && (a.length <=2))
    if (((num / (i += 1)) % 1) == 0){
    a.push(i);
  }
}
  // console.log(a)
if (num == 1 || num == ""){
  document.getElementById("result").innerHTML = "Please enter a number greater than 1";
}
else if (num % 1 !=0){
  document.getElementById("result").innerHTML = "Please enter whole numbers only";
}
else if (a.length == 2){
  document.getElementById("num-input").innerHTML = num; 
  document.getElementById("result").innerHTML = "This number is prime";
}
else{
  document.getElementById("num-input").innerHTML = num;
  document.getElementById("result").innerHTML = "This is not a prime number, it is divisible by " + a[1];
}
}

// console.log(primeNum(13));

  
const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}

