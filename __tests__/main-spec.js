const {countProducts,fetchProduct,generateReceiptItems,countTotalPrice,assemble,generateReceipts} = require('../main');

it('结果验证',()=>{
    var inputItems = ['0001', '0003', '0005', '0003'];
    var codes = generateReceiptItems(['0003','0003','0001']);
   // console.log("generateReceiptItems",codes);
    //输出
    //{name:'Pepsi-Cola',price:5,count:2},
    //{name:'Coca Cola',price:3,count:1}

    const countTotalPriceInput = [ 
        { name: 'Pepsi-Cola', price: 5, count: 2 },
        { name: 'Coca Cola', price: 3, count: 1 } 
    ];
    const prices = countTotalPrice(countTotalPriceInput);
   // console.log("prices",prices);

    const assembleInput =[ 
        { name: 'Pepsi-Cola', price: 5, count: 2 },
        { name: 'Coca Cola', price: 3, count: 1 } 
    ];
    const receiptText = generateReceipts(inputItems);
    
    console.log(receiptText);
})