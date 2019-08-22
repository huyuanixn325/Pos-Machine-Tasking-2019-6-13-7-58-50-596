const {countProducts,fetchProduct} = require('../main');

// it ('should count codes', () => {
//     //given
//     const codes = ['0003','0003','0001'];
//     //when
//     const countedCodes = countProducts(codes);
//     console.log(countedCodes);
//     //then
//     expect(countedCodes[0].count).toBe(2);
// });

it ('should count fetchProduct with code', () => {
    //given
    const code = '0003';
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
    //when
    const product = fetchProduct(code,databases);
    console.log(product);
    //then
    expect(product.name).toBe("Pepsi-Cola");
});