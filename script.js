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

let price = 4.2 ;
let cash =0;
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

  returnChange(changeDue) {
    const returnValues = [];
    let changeIndex = this.cashInDrawer.length - 1; 
    
    this.updateStatus(changeDue);
    // console.log(this.getStatus());
    // console.log(this.getStatus() !== 'Open')
    if (this.getStatus() !== 'Open') {
      return;  
    }
      
    while (changeDue > 0) {
      const currentChange = this.cashInDrawer[changeIndex]; 
      const currentChangeName = currentChange[0];
      const currentChangeAmount = currentChange[1];
      const currentChangeValue = changesValue[currentChangeName];

      if (currentChangeAmount <= 0 ||
        changeDue / currentChangeValue < 1) {
        changeIndex--;
        continue;
      }

      const returningValueFromCurrentChange =
        Math.min(
          Math.floor(changeDue / currentChangeValue) * currentChangeValue,
          currentChangeAmount);
      
      returnValues.unshift(
        [currentChangeName,
          returningValueFromCurrentChange]);
      
      this.cashInDrawer[changeIndex][1] -= returningValueFromCurrentChange;
      
      changeDue -= returningValueFromCurrentChange;
      changeIndex--;
    }

    return returnValues;
  }

}

const drawer = new Drawer(cid);

// console.log(drawer.getSum())


// console.log(drawer.returnChange(4.5))


const showresult = (arr) => {
  
  changeDue.classList.contains("hidden") &&
    changeDue.classList.remove('hidden');
  
  drawerStatus.textContent = `Status: ${drawer.getStatus()}`;
  changeDueList.innerHTML = '';
  
  if (arr.length === 0)
    return;
  const listOfListElement= arr.map((name , amount) => {
    `<li>${name}: ${amount}</li>`
  });
  listOfListElement.forEach(li => changeDueList.innerHTML += li);

}


purchaseBtn.addEventListener('click', (event) => {
  event.preventDefault();
  cash = parseFloat(cashInput.value);
  if (isNaN(cash)) {
    return; 
  }
  const returningChanges = [];
  const changeDue = cash - price;
  if (changeDue < 0) {
    alert('Customer does not have enough money to purchase the item'); 
    return;
  } else if (changeDue === 0) {
    alert('No change due - customer paid with exact cash'); 
    return;
  } else {
    returningChanges.push([...drawer.returnChange(changeDue)])
  }
  showresult(returningChanges)
})
