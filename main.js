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


function fetchProduct(code,db){
for (let index = 0; index < db.length; index++) {
   if(db[index].id===code){
       console.log(db[index]);
       return {
           name:db[index].name,
           price:db[index].price
       }
   } 
}
}

module.exports = {
    countProducts ,
    fetchProduct
};