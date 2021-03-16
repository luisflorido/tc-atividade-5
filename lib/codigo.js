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
}