function calculatePriceWithVAT(price, vat) {
  return price * (1 + vat);
}


let totalAmount = 0;


tellimus.rows.forEach(function(item) {

  console.log("Nimi: " + item.name);
  console.log("Kogus: " + item.amount);
  console.log("Hind: " + item.price.toFixed(2) + "€");
  

  const priceWithVAT = calculatePriceWithVAT(item.price, item.vat);
  

  console.log("Summa: " + (priceWithVAT * item.amount).toFixed(2) + "€");
  console.log("------------------------");
  

  totalAmount += priceWithVAT * item.amount;
});


console.log("Tellimuse kogusumma: " + totalAmount.toFixed(2) + "€");
