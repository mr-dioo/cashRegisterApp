const purchaseBtn = document.getElementById("purchase-btn");
const cashInput = document.getElementById("cash");
const changeDue = document.getElementById("change-due");
const drawerStatus = changeDue.querySelector("h2");
const changeDueList = changeDue.querySelector("ul");

let price = 0;
let cid = [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
];
let cash =0;

class Drawer {
  constructor(cid) {
    this.cashInDrawer = cid;
    this.status = "Open";
  }

  getSum() {
    return parseFloat((cid).reduce((total , note) => total + note[1] , 0).toFixed(2))
  }
  // getStatus
}

const drawer = new Drawer(cid);

console.log(drawer.getSum())

purchaseBtn.addEventListener('click', (event) => {
  event.preventDefault();
  cash = cashInput.value;
  if (cash === "") {
    return; 
  }

})


