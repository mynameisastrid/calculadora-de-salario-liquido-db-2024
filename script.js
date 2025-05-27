function parseBRLToFloat(valueString) {
    if (typeof valueString !== 'string') {
        valueString = String(valueString);
    }
    let cleanedValue = valueString.trim();

    cleanedValue = cleanedValue.replace(/[^0-9,.]/g, '');

    const lastCommaIndex = cleanedValue.lastIndexOf(',');
    const lastDotIndex = cleanedValue.lastIndexOf('.');

    if (lastCommaIndex > lastDotIndex) {
        cleanedValue = cleanedValue.replace(/\./g, '');
        cleanedValue = cleanedValue.replace(/,/g, '.');
    } else if (lastDotIndex > -1 && lastCommaIndex === -1) {
        const parts = cleanedValue.split('.');
        if (parts.length > 1 && (parts[parts.length - 1].length !== 2 || parts.length > 2)) {
            cleanedValue = cleanedValue.replace(/\./g, '');
        }
    }
    return parseFloat(cleanedValue);
}

function calcularSalarioLiquido() {
    let salarioBrutoBase = parseBRLToFloat(document.getElementById('salarioBruto').value);
    let valorAdiantamento = parseBRLToFloat(document.getElementById('valorMetade').value);
    let valorExtraIndividual = parseBRLToFloat(document.getElementById('valorExtra').value);
    let quantidadeExtra = parseInt(document.getElementById('quantidadeExtra').value);

    if (isNaN(salarioBrutoBase) || salarioBrutoBase <= 0) {
        alert("Por favor, digite um valor de salário bruto válido e maior que zero.");
        return;
    }

    if (isNaN(valorAdiantamento) || valorAdiantamento < 0) {
        valorAdiantamento = 0;
    }

    let totalGanhosExtras = 0;
    if (!isNaN(valorExtraIndividual) && valorExtraIndividual > 0 && !isNaN(quantidadeExtra) && quantidadeExtra > 0) {
        totalGanhosExtras = valorExtraIndividual * quantidadeExtra;
        document.getElementById('valorTotalExtras').textContent = totalGanhosExtras.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        document.getElementById('linhaGanhosExtras').style.display = 'flex';
    } else {
        document.getElementById('linhaGanhosExtras').style.display = 'none';
    }

    const salarioBrutoParaCalculo = salarioBrutoBase + totalGanhosExtras;
    const fgts = salarioBrutoParaCalculo * 0.08;

    const inssTabela = [
        { limite: 1412.00, aliquota: 0.075, deducao: 0.00 },
        { limite: 2666.68, aliquota: 0.09,  deducao: 21.18 },
        { limite: 4000.03, aliquota: 0.12,  deducao: 101.18 },
        { limite: 7786.02, aliquota: 0.14,  deducao: 181.18 }
    ];
    const tetoINSS = 908.85;

    let inss = 0;
    if (salarioBrutoParaCalculo <= inssTabela[0].limite) {
        inss = salarioBrutoParaCalculo * inssTabela[0].aliquota;
    } else if (salarioBrutoParaCalculo <= inssTabela[1].limite) {
        inss = (salarioBrutoParaCalculo * inssTabela[1].aliquota) - inssTabela[1].deducao;
    } else if (salarioBrutoParaCalculo <= inssTabela[2].limite) {
        inss = (salarioBrutoParaCalculo * inssTabela[2].aliquota) - inssTabela[2].deducao;
    } else if (salarioBrutoParaCalculo <= inssTabela[3].limite) {
        inss = (salarioBrutoParaCalculo * inssTabela[3].aliquota) - inssTabela[3].deducao;
    } else {
        inss = tetoINSS;
    }

    const baseCalculoIR = salarioBrutoParaCalculo - inss;

    const irrfTabela = [
        { limite: 2259.20, aliquota: 0.00, deducao: 0.00 },
        { limite: 2826.65, aliquota: 0.075, deducao: 169.44 },
        { limite: 3751.05, aliquota: 0.15, deducao: 381.99 },
        { limite: 4664.68, aliquota: 0.225, deducao: 662.77 },
        { limite: Infinity, aliquota: 0.275, deducao: 896.00 }
    ];

    let ir = 0;
    if (baseCalculoIR > irrfTabela[0].limite) {
        for (let i = 0; i < irrfTabela.length; i++) {
            if (baseCalculoIR <= irrfTabela[i].limite) {
                ir = (baseCalculoIR * irrfTabela[i].aliquota) - irrfTabela[i].deducao;
                break;
            }
        }
    }

    let salarioLiquido = salarioBrutoParaCalculo - inss - ir;

    const percentINSS = (inss / salarioBrutoParaCalculo * 100).toFixed(2);
    const percentIR = (ir / salarioBrutoParaCalculo * 100).toFixed(2);
    let percentAdiantamento = 0;
    if (valorAdiantamento > 0) {
        percentAdiantamento = (valorAdiantamento / salarioBrutoParaCalculo * 100).toFixed(2);
    }

    if (valorAdiantamento > 0) {
        salarioLiquido -= valorAdiantamento;
        document.getElementById('valorAdiantamento').textContent = valorAdiantamento.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        document.getElementById('percentAdiantamento').textContent = `(${percentAdiantamento}%)`;
        document.getElementById('linhaAdiantamento').style.display = 'flex';
    } else {
        document.getElementById('linhaAdiantamento').style.display = 'none';
    }

    document.getElementById('valorSalarioBrutoBase').textContent = salarioBrutoBase.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    document.getElementById('valorSalarioBrutoCalculo').textContent = salarioBrutoParaCalculo.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    
    document.getElementById('valorINSS').textContent = inss.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    document.getElementById('percentINSS').textContent = `(${percentINSS}%)`;

    document.getElementById('valorIR').textContent = ir.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    document.getElementById('percentIR').textContent = `(${percentIR}%)`;
    
    document.getElementById('valorFGTS').textContent = fgts.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

    document.getElementById('valorSalarioLiquido').textContent = salarioLiquido.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

    document.getElementById('resultado').style.display = 'block';
}