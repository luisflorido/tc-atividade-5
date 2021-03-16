const Codigo = require('../lib/codigo');

const codigo = new Codigo();

describe('Teste classe codigo', () => {

    // mediana
    test('Throw erro ao enviar dado inválido', () => {
        expect(() => codigo.calculaMediana("teste")).toThrow('Array inválido')
    })

    test('Calcula mediana em array impar', () => {
        const calc = codigo.calculaMediana([5, 2, 1, 4, 3]);
        expect(calc).toBe(3);
    })

    test('Calcula mediana em array par', () => {
        const calc = codigo.calculaMediana([2, 1, 4, 3]);
        expect(calc).toBe(2.5);
    })
})