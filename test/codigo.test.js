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

    // fibonacci
    test('Throw erro ao enviar dado inválido', () => {
        expect(() => codigo.fibonacci("teste")).toThrow('N inválido')
    })

    test('Sequencia fibonacci menor ou igual a 1', () => {
        const fib = codigo.fibonacci(1)
        expect(fib).toBe(1)
    })

    test('Sequencia fibonacci 4', () => {
        const fib = codigo.fibonacci(4)
        expect(fib).toBe(5)
    })

    test('Sequencia fibonacci 5', () => {
        const fib = codigo.fibonacci(5)
        expect(fib).toBe(8)
    })
})