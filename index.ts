var linha = () => console.log("========================================================");

//Desafio 1
let indice = 13
let soma = 0
for (let k = 0; k < indice;) {
    k = k + 1
    soma = soma + k
}
linha()
console.log(`Desafio 1) Soma = ${soma}`);
//1) SOMA = 91


//Desafio 2
const fibonacci = (n: number): number => {
    if (n < 2) {
        return n;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

let nums = 30; //defina aqui o numero de elementos da sequencia de fibonacci
let saida = "(";
for (let i = 0; i < nums; i++) {
    saida += fibonacci(i) + ", "
}
saida += ")"
linha()
console.log(`Desafio 2) ${saida}`);


//Desafio 3
import { DiaDefaturamento, dias } from "./dados";
const eliminaDiasInvalidos = (dados: DiaDefaturamento[]) => {
    return dados.filter((dado) => dado.valor > 0)
}
const menorValorFaturamento = (dados: DiaDefaturamento[]) => {
    return eliminaDiasInvalidos(dados)
        .reduce((d1, d2) => d1.valor < d2.valor ? d1 : d2)
}
const maiorValorFaturamento = (dados: DiaDefaturamento[]) => {
    return dados.reduce((d1, d2) => d1.valor > d2.valor ? d1 : d2)
}
const mediaMensalFaturamento = (dados: DiaDefaturamento[]) => {
    let total = 0;
    dados.forEach(d => total += d.valor)
    const diasDeFaturamento = eliminaDiasInvalidos(dados)
    return total / diasDeFaturamento.length
}
const diasDoMesMaiorQueMediaFaturamentoMensal = (dados: DiaDefaturamento[], mediaMensal: number) => {
    return dados.filter(dado => dado.valor > mediaMensal)
}

linha()
console.log("Desafio 3");
const MENOR_FATURAMENTO = menorValorFaturamento(dias)
console.log(`Menor valor de faturamento R$${MENOR_FATURAMENTO.valor} do dia ${MENOR_FATURAMENTO.dia}`);
const MAIOR_FATURAMENTO = maiorValorFaturamento(dias)
console.log(`Maior valor de faturamento R$${MAIOR_FATURAMENTO.valor} do dia ${MAIOR_FATURAMENTO.dia}`);
const MEDIA_MENSAL = mediaMensalFaturamento(dias)
console.log(`Numero de dias que superaram a media de faturamento mensal ${diasDoMesMaiorQueMediaFaturamentoMensal(dias, MEDIA_MENSAL).length
    }`);

//Desafio 4
import { faturamentoEstadual, dados4 } from "./dados";
const totalMensal = (dados: faturamentoEstadual[]) => {
    let total = 0
    dados.forEach(d => total += d.valor)
    return total
}
const percentualDeRepresentacao = (valor: number, total: number) => {
    return ((valor / total) * 100).toFixed(1)
}
linha()
console.log("Desafio 4");
const TOTAL_MENSAL = totalMensal(dados4)
console.log(`Total mensal : R$${TOTAL_MENSAL}`);
for (const d of dados4) {
    console.log(`Percentual de representação de ${d.estado} : %${percentualDeRepresentacao(d.valor, TOTAL_MENSAL)}`);

}