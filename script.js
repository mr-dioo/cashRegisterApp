const purchaseBtn = document.getElementById("purchase-btn");
const cashInput = document.getElementById("cash");
const changeDue = document.getElementById("change-due");
const drawerStatus = changeDue.querySelector("h2");
const changeDueList = changeDue.querySelector("ul");

let price = 0;
let cid = [,];
let cash =0;





purchaseBtn.addEventListener('click', (event) => {
  event.preventDefault();
  cash = cashInput.value;
  if (cash === "") {
    return; 
  }


})
