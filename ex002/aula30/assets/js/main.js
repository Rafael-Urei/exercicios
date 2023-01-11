const showData = () => {
    const dayList = ['Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sábado'];
    const monthList = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outburo', 'Novembro', 'Dezembro'];
    const data = new Date();
    const diaSemana = data.getDay();
    const mes = data.getMonth();
    const changeDay = () => {
       switch (diaSemana) {
        case 0:
            return dayList[0];
        case 1:
            return dayList[1];
        case 2:
            return dayList[2];
        case 3:
            return dayList[3];
        case 4:
            return dayList[4];
        case 5:
            return dayList[5];
        case 6:
            return dayList[6];
       };
    } 

    const changeMonth = () => {  
       switch (mes) {
        case 0:
            return monthList[0];
        case 1:
            return monthList[1];
        case 2:
            return monthList[2];
        case 3:
            return monthList[3];
        case 4:
            return monthList[4];
        case 5:
            return monthList[5];
        case 6:
            return monthList[6];
        case 7:
            return monthList[7];
        case 8:
            return monthList[8];
        case 9:
            return monthList[9];
        case 10:
            return monthList[10];
        case 11:
            return monthList[11]
       };
    };
    const day = changeDay();
    const month = changeMonth();
    
    const zeroAEsquerda = (num) => {
        return num >= 10 ? num : `0${num}`;
    }


    const putInHTML = (day, month) => {
        const h1 = document.querySelector('.title');
        h1.innerHTML = `${day}, dia ${zeroAEsquerda(data.getDate())} de ${month} de ${data.getFullYear()} às ${zeroAEsquerda(data.getHours())}:${zeroAEsquerda(data.getMinutes())}:${zeroAEsquerda(data.getSeconds())}.`
    }
    putInHTML(day, month)
}

showData();