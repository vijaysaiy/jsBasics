const bills = [22, 295, 176, 440, 37, 105, 10, 110, 86, 52];
const totals = [];
const tips = [];

function calculateTip(bill) {
  if (bill >= 50 && bill <= 300) return bill * 0.15;
  return bill * 0.2;
}

function calculateTotals() {
  for (let bill = 0; bill < bills.length; bill++) {
    const tip = calculateTip(bills[bill]);
    tips.push(tip);
    totals.push(tip + tips[bill]);
  }
  return totals;
}

function calculateAverage(arr) {
  let sum = 0;
  for (let i = 0; i < totals.length; i++) {
    sum += arr[i];
  }
  return Math.floor(sum);
}

console.log(calculateTotals());

console.log(calculateAverage(totals));
