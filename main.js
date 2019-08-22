const databases= [
{"id": "0001", "name" : "Coca Cola", "price": 3},
{"id": "0002", "name" : "Diet Coke", "price": 4},
{"id": "0003", "name" : "Pepsi-Cola", "price": 5},
{"id": "0004", "name" : "Mountain Dew", "price": 6},
{"id": "0005", "name" : "Dr Pepper", "price": 7},
{"id": "0006", "name" : "Sprite", "price": 8},
{"id": "0007", "name" : "Diet Pepsi", "price": 9},
{"id": "0008", "name" : "Diet Mountain Dew", "price": 10},
{"id": "0009", "name" : "Diet Dr Pepper", "price": 11},
{"id": "0010", "name" : "Fanta", "price": 12}
];

function countProducts (codes) {
  let countCodes = [];
  let codeObject = {};
  for (let index = 0; index < codes.length; index++) {
      if(codeObject[codes[index]]==null){
          codeObject[codes[index]]=1;
      }else{
          codeObject[codes[index]]=codeObject[codes[index]]+1;
      }
      
  }
  for(key in codeObject){
      countCodes.push({code:key,count:codeObject[key]})
  }
  return countCodes;
}


function fetchProduct(code){
for (let index = 0; index < databases.length; index++) {
   if(databases[index].id===code){
       //console.log(db[index]);
       return {
           name:databases[index].name,
           price:databases[index].price
       }
   } 
}
}

function generateReceiptItems(codes){

    let receiptItems = [];
    let countCodes = countProducts(codes);
   // console.log(countCodes);
   //遍历1
    for (let index = 0; index < countCodes.length; index++) {
        let receiptItem = fetchProduct(countCodes[index].code);
        //console.log(receiptItem);
        receiptItems.push({name:receiptItem.name,price:receiptItem.price,count:countCodes[index].count});
    }
    //遍历2
    // countCodes.forEach(function(item){
    //     let receiptItem = fetchProduct(item.code);
    //     receiptItems.push({name:receiptItem.name,price:receiptItem.price,count:item.count});
    // })
    return receiptItems;
}

function countTotalPrice(countTotalPriceInput){
    let prices = 0;
    for (let index = 0; index < countTotalPriceInput.length; index++) {
        prices = prices + countTotalPriceInput[index].price*countTotalPriceInput[index].count;
        
    }
    return prices;
}


function assemble(receiptItems,totalPrice){

    let receiptText = "Receipts\n";
    receiptText+="-----------------------------------\n";
    for (let index = 0; index < receiptItems.length; index++) {
        receiptText+=receiptItems[index].name+"\t"+receiptItems[index].price+"\t"+receiptItems[index].count+"\n";
        
    }
    receiptText+="-----------------------------------\n";
    receiptText+="Price: "+totalPrice;
    return receiptText;
}

module.exports = {
    countProducts ,
    fetchProduct,
    generateReceiptItems,
    countTotalPrice,
    assemble
};