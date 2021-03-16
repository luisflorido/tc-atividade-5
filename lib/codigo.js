module.exports = class Codigo {
    calculaMediana(array) {
        if (!array || typeof array !== "object") {
            throw 'Array inválido'
        }
        if (array.length % 2 === 0) {
            const ordenate = array.sort()
            const middle = Math.floor(ordenate.length / 2) - 1;
        
            for (let index = 0; index < ordenate.length; index++) {
                const element = ordenate[index];

                if (middle === index) {
                    const nextElement = ordenate[index + 1];
                    return (element + nextElement) / 2;
                }
            }
        } else {
            const ordenate = array.sort()
            const middle = Math.floor(ordenate.length / 2);
            
            for (let index = 0; index < ordenate.length; index++) {
                const element = ordenate[index];
                if (middle === index) {
                    return element;
                }
            }
        }
    }

    fibonacci(n) {
        if (!n || typeof n !== "number") {
            throw 'N inválido'
        }

        if (n <= 1) {
            return 1
        } else {
            var a = 1, b = 0, temp;
            while (n >= 0){
                temp = a;
                a += b;
                b = temp;
                n--;
            }
            return b;
        }
    }
}