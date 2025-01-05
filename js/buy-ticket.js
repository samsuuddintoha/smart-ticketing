const seats = elementById('seats');
let displaySeats = elementById('selected-seats');
displaySeats.innerText = 0;

let displaySeatsElement = elementById('total-seat');
let discountBtnElement = elementById('discount-button');

let totalPriceElement = elementById('total-price')
let grandTotalElement = elementById('grand-total')
let seatsLeftElement = elementById('seats-left')
totalPriceElement.innerText = 0;
grandTotalElement.innerText = 0;

let totalSeats = 40;
let selectedSeats = 0;

let seatsDiv = [];

seats.addEventListener('click', (event) => {
  if (selectedSeats < 4) {
    
    selectedSeats = ++ selectedSeats;
    totalSeats = -- totalSeats
    grandTotalElement.innerText = 500 * selectedSeats;
    totalPriceElement.innerText = 500 * selectedSeats;
    event.target.classList.add('active');
    
    let div = document.createElement('div');
    div.classList = 'flex items-center justify-between my-3'
    div.innerHTML = `
    <p id="${event.target.innerText}" class="text-xl text-slate-400">${event.target.innerText}</p>
    <p class="text-xl text-slate-400">Economy</p>
    <p class="text-xl text-slate-400">550</p>
    `;
    
    seatsDiv.push(div)
  }
  
  displaySeats.innerText = selectedSeats;
  seatsLeftElement.innerText = totalSeats;
  if(selectedSeats > 2){
    discountBtnElement.removeAttribute('disabled')
    discountBtnElement.classList.add('bg-primary')
  }
  
  seatsDiv.forEach(e => {
    displaySeatsElement.appendChild(e)
  });
  
});


function elementById(id){
  let element = document.getElementById(id)
  return element
}

function discount(){
  let seats = elementById('selected-seats')
  let seatsValue = parseInt(seats.innerText)

  let discountValue = elementById('discount-value')

  let grandTotal = elementById('grand-total')
  let grandValue = parseInt(grandTotal.innerText)
  // console.log(grandTotal)

  if(seatsValue > 2 && grandValue === 500 * seatsValue){
    if(discountValue.value == 'NEW15' || discountValue.value == 'Couple20'){
      let discount = grandValue * 15 / 100
      grandTotal.innerText = grandValue - discount
    }
  }
}

