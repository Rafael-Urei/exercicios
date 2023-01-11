const mainFunction = () => {
    const form = document.querySelector('.form');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const peso = event.target.querySelector('#peso');
        const altura = event.target.querySelector('#altura');
        
        const weigth = Number(peso.value);
        const height = Number(altura.value);
        
        if (!weigth) {
            setResult('Wrong Weigth!', false)
            return;
        }
        if (!height) {
            setResult('Wrong Height', false)
            return;
        }

        const imc = getImc(weigth, height);
        console.log(imc);

        const levelimc = getNivelimc(imc);
        console.log(levelimc);

        const msg = `Seu IMC é de ${imc}: ${levelimc}`;

        setResult(msg, true);
    });

    const getNivelimc = (imc) => {
        const level = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

        if (imc >= 39.9) {
            return level[5]
        }
        if (imc >= 34.9) {
            return level[4]
        }
        if (imc >= 29.9) {
            return level[3]
        }
        if (imc >= 24.9) {
            return level[2]
        }
        if (imc >= 18.5) {
            return level[1]
        }
        if (imc < 18.5){
            return level[0]
        }
    }

    const createP = () => {
        const p = document.createElement('p');
        return p;
    };
    const setResult = (msg, isValid) => {
        const result = document.querySelector('.result');
        result.innerHTML = '';
        const p = createP();

        if (isValid) {
            p.classList.add('valid-p');
        } else {
            p.classList.add('invalid-p');
        }
        p.innerHTML = msg;
        result.appendChild(p);
    };

    const getImc = (weigth, height) => {
        const imc = weigth / height ** 2;
        return imc.toFixed(2);
    }
};

mainFunction()