const { sum } = require('./app.js');
// comienza tu primera prueba

test('adds 14 + 9 to equal 23', () => {
    //dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);
    // esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});
test("One euro should be 1.206 dollars", function(){
    const { fromEuroToDollar } = require('./app.js')
    expect(fromEuroToDollar(3.5)).toBe(4.2)});

test("One dollars should be 153.48 yen", function(){
        const { fromDollarToYen } = require('./app.js')
        expect(fromDollarToYen(6)).toBe(639.5)});

        test("One Yen should be 122.784 Pound", function(){
            const { fromYenToPound } = require('./app.js')
            expect(fromYenToPound(1000)).toBe(6)});
        