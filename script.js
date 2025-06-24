// Snack 1
// Crea una funzione che somma due numeri.
// Crea una funzione dichiarativa chiamata somma che accetta due numeri e restituisce la loro somma.
//     Poi, definisci la stessa funzione somma ma come funzione anonima assegnata a una variabile;
// Quindi, riscrivi la funzione somma con la sintassi delle arrow functions.



function somma(firstNum, SecondNum) {
    return firstNum + SecondNum;
}

const somma2 = function (firstNum, SecondNum) {
    return firstNum + SecondNum;

};

const somma3 = (firstNum, SecondNum) => {
    return firstNum + SecondNum;

};

// Snack 2
// Crea una arrow function che calcola il quadrato di un numero.
// Definisci una funzione chiamata quadrato che accetta un numero e restituisce il suo quadrato in una sola riga.


const quadrato = (num) => num * num;

// Snack 3
// Crea una funzione eseguiOperazione
// Definisci una funzione eseguiOperazione che accetta tre parametri: due numeri e una funzione operatore(callback).La funzione deve eseguire l'operazione fornita sui due numeri.

const sottrazione = (a, b) => a - b;
const divisione = (a, b) => a / b;

const eseguiOperazione = (a, b, operazione) => operazione(a, b);

console.log(eseguiOperazione(4, 2, divisione));

// Snack 4
// Crea un generatore di funzioni creaTimer
// Scrivi una funzione creaTimer che accetta un tempo(in ms) e restituisce una nuova funzione che avvia un setTimeout per stampare "Tempo scaduto!".

function createTimer(time) {
    return function startTimer() {
        setTimeout(() => {
            console.log('Tempo scaduto!');
        }, time);
    };
}

const timer = createTimer(2000);

// Snack 5
// Crea una funzione stampaOgniSecondo con setInterval.
// Definisci una funzione che accetta un messaggio e lo stampa ogni secondo.

//     Nota: Questa funzione creerà un loop infinito.Interrompilo manualmente o usa clearInterval() in un altro script.

function StampaOgniSecondo(message) {
    setInterval(() => {
        console.log(message);
    }, 1000);
}

// Snack 6
// Crea un contatore automatico con setInterval
// Definisci una funzione creaContatoreAutomatico che accetta un intervallo di tempo e restituisce una funzione che avvia un setInterval, incrementando un contatore e stampandolo.

function creaContatoreAumatico(time) {
    let contatore = 0;

    return function incrematatore() {
        setInterval(() => {
            console.log(contatore++);
        }, time);
    };
}
const contatore = creaContatoreAumatico(1000);

// Snack 7
// Crea una funzione che ferma un timer dopo un certo tempo
// Scrivi una funzione eseguiEferma che accetta un messaggio, un tempo di avvio e un tempo di stop.Il messaggio deve essere stampato a intervalli regolari, ma si deve fermare dopo il tempo di stop.

function eseguiEferma(message, timeStart, timeStop) {
    setTimeout(() => {
        const timer = setInterval(() => {
            console.log(message);
        }, 1000);
        setTimeout(() => { clearInterval(timer); }, timeStop);
    }, timeStart);
}

function eseguiEferma2(message, intervallo, durata) {
    const intervalId = setInterval(() => {
        console.log(message);
    }, intervallo);

    setTimeout(() => {
        clearInterval(intervalId);
    }, durata);
}

// eseguiEferma('ciao', 2000, 5000);
eseguiEferma2('ciao', 1000, 5000);
// Snack 8
// Crea una funzione che simula un conto alla rovescia
// Scrivi una funzione contoAllaRovescia che accetta un numero n e stampa il conto alla rovescia da n a 0, con un intervallo di 1 secondo tra ogni numero.Quando arriva a 0, stampa "Tempo scaduto!" e interrompe il timer.

function contoAllaRovescia(n) {

    const timer = setInterval(() => {
        console.log(n--);

        if (n === 0) {
            clearInterval(timer);
            console.log('Tempo scaduto!');
        }
    }, 1000);

}

// contoAllaRovescia(5);

// Snack 9
// Creare una funzione che esegue una sequenza di operazioni con ritardi
// Scrivi una funzione sequenzaOperazioni che accetta un array di operazioni(funzioni) e un tempo di intervallo.

// Ogni operazione deve essere eseguita in sequenza con un ritardo uguale al tempo di intervallo.;
function sequenzaOperazioni(operazioni, time) {
    for (let i = 0; i < operazioni.length; i++) {
        setTimeout(() => operazioni[i](), i * time);
    }

}

// sequenzaOperazioni([() => console.log('funzione 1'), () => console.log('funzione 2'), () => console.log('funzione 3'), () => console.log('funzione 4')], 1000);

// Snack 10
// Creare un throttler per limitare l’esecuzione di una funzione
// Scrivi una funzione creaThrottler che accetta una funzione e un tempo`limite`.

// Restituisce una nuova funzione che, quando chiamata ripetutamente, esegue l'operazione originale al massimo una volta ogni n millisecondi.

function createThrottler(funzione, time) {
    let lastTime = 0;

    return function () {
        const now = Date.now();
        if (now - lastTime >= time) {
            funzione();
            lastTime = now;
        } else {
            console.log('Ignorato');
        }
    };
}

const throttledLog = createThrottler(() => console.log('Eseguito'), 2000);

throttledLog();
throttledLog();
setTimeout(throttledLog, 2500); 