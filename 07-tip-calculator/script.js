const calculate = () => {
  const billAmount = parseFloat(document.getElementById("amountInput").value);
  const tipPercent = parseFloat(document.getElementById("tipInput").value);
  const numberOfPeople = parseFloat(
    document.getElementById("peopleInput").value,
  );

  if (isNaN(billAmount) || isNaN(tipPercent) || isNaN(numberOfPeople)) {
    alert("Enter all field");
  } else if (numberOfPeople <= 0 || billAmount <= 0 || tipPercent < 0) {
    alert("Enter valid number");
  } else {
    const tipAmount = (billAmount * tipPercent) / 100;
    const totalAmount = tipAmount + billAmount;
    const perPersonAmount = totalAmount / numberOfPeople;

    // document.getElementById("tipAmount").innerHTML = `Tip Amount(₹) : Bill Amount(${billAmount}) * Tip Percentage(${tipPercent})/100 = ${tipAmount}`;
    // document.getElementById("totalAmount").innerHTML = `Total Amount(₹) : Bill Amount(${billAmount}) + Tip Amount(${tipAmount}) = ${totalAmount}`;
    // document.getElementById("perPersonAmount").innerHTML = `Per Person  : ₹ ${perPersonAmount}`
    document.getElementById("tipAmount").innerHTML =
      `Tip Amount(₹) : ${tipAmount}`;
    document.getElementById("totalAmount").innerHTML =
      `Total Amount(₹) : ${totalAmount}`;
    document.getElementById("perPersonAmount").innerHTML =
      `Per Person(₹) : ${perPersonAmount}`;
  }
};
