const notas = [10, 6.5, 8, 7.5];

let somadasnotas = 0;

for(let nota of notas) {
    somadasnotas += nota;
}

const media = somadasnotas / notas.length;

console.log(`a media é ${media}`);

