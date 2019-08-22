const {countProducts} = require('../main');

it ('should count codes', () => {
    //given
    const codes = ['0003','0003','0001'];
    //when
    const countedCodes = countProducts(codes);
    //then
    expect(countedCodes[0].count).toBe(2);
});