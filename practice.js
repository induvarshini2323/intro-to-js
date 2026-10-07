console.log("new practice the file added.");

//lays price=10, quantity =5 , discount=5

function caluculateBill(price, quantity, discount =0) {
    if ( price > 0) {
        if (quantity > 0) {
            return price* quantity - discount;
        }else{
        return "quantity should be greater than 0.";
    }
}else{
    return "price and quantity should be greater than 0.";
}
}

function caluculateBill2(price, quantity =3, discount = 0){
    if (price <= 0) return  "price should be greter than 0.";
    if (quantity <=0) return "quality should be greater than 0";
    return price * quantity - discount;
}



let bill1 = caluculateBill(10,5);
console.log(bill1);


let bill2 = caluculateBill(10,0 ,5);
console.log(bill2);



function withdrawFromATM(balance,amount)  {
  if (amount <=0)  return "balance should be greater than 0.";
  if (balance <=0) return "amount should be greater than 0.";
if ( amount > balance) return "insufficient balance.";
return balance- amount;
  
}
let amount = withdrawFromATM(100,80);
console.log(amount);

const college="SIU";
let percentage;
function student() {
    console.log (`my college is ${college}`);
     percentage=80;
    console.log(`my percentage is ${percentage}`);
}
student();
console.log(`my percentage is ${percentage}`);