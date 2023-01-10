const meuEscopo = () => {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');
    const pessoas = [];
    //form.onsubmit = (evento) => {
    //    evento.preventDefault();
    //    alert(1);
    //    console.log('Foi enviado!');
    //};
    const recebeEventoForm = (evento) => {
        evento.preventDefault();
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const massa = form.querySelector('.massa');
        const altura = form.querySelector('.altura');
        const pessoa = {
            nome: nome.value,
            sobrenome: sobrenome.value,
            massa: massa.value,
            altura: altura.value
        }
        let p = `<p>${nome.value} ${sobrenome.value} ${massa.value} ${altura.value}</p>`;
        pessoas.push(pessoa);
        console.log(pessoas);
        resultado.innerHTML += p;
    }

    form.addEventListener('submit', recebeEventoForm);
};
meuEscopo();

