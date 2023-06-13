// Calcula a diferença entre a data atual e a data alvo (04/06/2024)
function getTimeRemaining(endTime) {
    const total = Date.parse(endTime) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));

    return {
        total,
        days,
        hours,
        minutes,
        seconds
    };
}

// Formata os números menores que 10 com um zero à esquerda
function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

// Atualiza o elemento HTML da contagem regressiva
function updateCountdown() {
    const countdownElement = document.getElementById('countdown');
    const endDate = new Date('06/04/2024'); // Data alvo (04/06/2024)
    const time = getTimeRemaining(endDate);

    countdownElement.innerHTML = `Faltam ${formatTime(time.days)} dias, ${formatTime(time.hours)} horas, ${formatTime(time.minutes)} minutos e ${formatTime(time.seconds)} segundos`;
}

// Atualiza a contagem regressiva a cada segundo
setInterval(updateCountdown, 1000);
