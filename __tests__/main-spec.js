const {countProducts,fetchProduct,generateReceiptItems,countTotalPrice,assemble} = require('../main');

it('结果验证',()=>{
    var codes = generateReceiptItems(['0003','0003','0001']);
    console.log("generateReceiptItems",codes);
    //输出
    //{name:'Pepsi-Cola',price:5,count:2},
    //{name:'Coca Cola',price:3,count:1}

    const countTotalPriceInput = [ 
        { name: 'Pepsi-Cola', price: 5, count: 2 },
        { name: 'Coca Cola', price: 3, count: 1 } 
    ];
    const prices = countTotalPrice(countTotalPriceInput);
    console.log("prices",prices);

    const assembleInput =[ 
        { name: 'Pepsi-Cola', price: 5, count: 2 },
        { name: 'Coca Cola', price: 3, count: 1 } 
    ];
    const receiptText = assemble(assembleInput,13);
    console.log(receiptText);
})