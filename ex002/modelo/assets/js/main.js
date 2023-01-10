const results = document.querySelector('.result');
const mainFunction = () => {
    const form = document.querySelector('.form');
    const event = (event) => {
        event.preventDefault();
        const peso = form.querySelector('#peso');
        const altura = form.querySelector('#altura');
        const persondata = {
            peso: Number(peso.value),
            altura: Number(altura.value),
        };
        console.log(persondata);
        const pes = persondata.peso;
        const alt = persondata.altura*persondata.altura;
        if (pes && alt) {
            const results = document.querySelector('.result');
            const imc = pes/alt;
            if (imc >= 0 && imc < 18.5) {
                results.innerHTML = `IMC de ${imc}. Você está abaixo do peso!`;
                results.style.background = 'rgba(243, 13, 52, 0.897)';
            };
            if (imc >= 18.5 && imc < 25) {
                results.innerHTML = `IMC de ${imc}. Você está com o Peso normal!`
                results.style.background = 'rgb(40, 214, 107)';
            };
            if (imc >= 25 && imc < 30) {
                results.innerHTML = `IMC de ${imc}. Você está com Sobrepeso!`
                results.style.background = 'rgb(238, 202, 41)'
            }
            if (imc >= 30 && imc < 35) {
                results.innerHTML = `IMC de ${imc}. Você está com Obesidade grau 1!`
                results.style.background = 'rgb(233, 103, 17)';
            }
            if (imc >= 35 && imc < 40) {
                results.innerHTML = `IMC de ${imc}. Você está com Obesidade grau 2!`
                results.style.background = 'rgba(243, 13, 52, 0.897)';
            }
            if (imc >= 40) {
                results.innerHTML = `IMC de ${imc}. Você está com Obesidade grau 3!`
                results.style.background = 'black';
            }
        } else {
            results.innerHTML = 'Error!'
        }
    };
    form.addEventListener('submit', event);
};
mainFunction();