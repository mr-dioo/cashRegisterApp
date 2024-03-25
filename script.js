const purchaseBtn = document.getElementById("purchase-btn");
const cashInput = document.getElementById("cash");
const changeDue = document.getElementById("change-due");
const drawerStatus = changeDue.querySelector("h2");
const changeDueList = changeDue.querySelector("ul");
const changesValue = {
"PENNY"       : 0.01 ,
"NICKEL"      : 0.05 ,
"DIME"        : 0.10 ,
"QUARTER"     : 0.25 ,
"ONE"         : 1.00 ,
"FIVE"        : 5.00 ,
"TEN"         : 10.0 ,
"TWENTY"      : 20.0 ,
"ONE HUNDRED" : 100  ,
}

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
    return parseFloat((cid)
      .reduce((total, note) => total + note[1], 0)
      .toFixed(2))
  }
  getStatus() {
    return this.status;
  }
  updateStatus(changeDue) {
    const availableSum = this.getSum();
    
    if ( this.status === 'Open' && availableSum - changeDue === 0) {
      this.status = 'Closed';
    } else if (this.status === 'Open' && availableSum - changeDue < 0) {
      this.status = "INSUFFICIENT_FUNDS";
    }
  }

  returnChange(itemPrice, cash) {
    
  }

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
