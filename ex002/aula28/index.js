const zeraEsquerda = (num) => {
    return num >= 10 ? num : `0${num}`
}

const formatData = (data) => {
    const dia = zeraEsquerda(data.getDate());
    const mes = zeraEsquerda(data.getMonth() + 1);
    const ano = zeraEsquerda(data.getFullYear());
    const hora = zeraEsquerda(data.getHours());
    const min = zeraEsquerda(data.getMinutes());
    const seg = zeraEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`
}

const data = new Date();
const dataBrasil = formatData(data);
console.log(dataBrasil)