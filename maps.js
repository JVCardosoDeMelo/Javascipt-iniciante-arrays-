const notas = [10, 9.5, 8, 7, 6];

const notasatualizadas = notas.map((nota,indice) =>{
    return nota + 1 >=10 ? 10 : nota +1;
} );

console.log(notasatualizadas);
