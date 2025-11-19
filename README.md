# 💰 Calculadora de Salário Líquido e 13º Salário (CLT - Brasil 2025) || Live @ https://calculasalarioliquido.netlify.app/

Este é um projeto de simulação de cálculos trabalhistas (CLT) desenvolvido em **HTML, CSS e JavaScript Vanilla**.

O objetivo é fornecer uma ferramenta de alto contraste e fácil utilização para estimar o **Salário Líquido Mensal** e o **13º Salário**, com base nas tabelas de descontos projetadas para o ano de **2025** no Brasil.

---

## ✨ Funcionalidades do Código

O código é uma aplicação Single Page (SPA) com navegação por abas para alternar entre os dois principais cálculos:

### 1. Salário Líquido Mensal

Calcula o valor líquido a ser recebido pelo empregado após os descontos obrigatórios e opcionais.

* **Entradas:** Salário Bruto, Número de Dependentes (para IRRF) e opção de desconto de Vale-Transporte.
* **Saídas Detalhadas:**
    * Desconto de **INSS** (Progressivo, calculado sobre o Salário Bruto).
    * Desconto de **IRRF** (Calculado sobre a Base Líquida de INSS e Dependentes).
    * Desconto de **Vale-Transporte** (Máximo de 6% sobre o Bruto, se ativado).
    * **Total de Descontos** e o **Salário Líquido Estimado**.
    * **FGTS** Mensal e Anual (8% sobre o bruto - valor depositado pelo empregador, não descontado do salário).

### 2. 13º Salário (Gratificação Natalina)

Simula o cálculo do 13º salário, considerando a proporcionalidade de meses trabalhados e a retenção de impostos.

* **Entradas:** Salário Bruto Base, Meses Trabalhados (1 a 12) e Número de Dependentes.
* **Saídas Detalhadas:**
    * Cálculo do **Valor Bruto Proporcional** ($$\text{Bruto} \times \frac{\text{Meses}}{12}$$).
    * Simulação da **1ª Parcela (50% do Bruto Proporcional)**, paga sem descontos.
    * Cálculo da **2ª Parcela Líquida**, que absorve os descontos integrais de **INSS** e **IRRF** sobre o valor bruto total.
    * **Total Líquido do 13º** (Soma das duas parcelas).

---

## ⚙️ Detalhes e Tabelas de Referência (2025)

A lógica de cálculo utiliza constantes e funções auxiliares em JavaScript para aplicar a legislação brasileira.

### 1. Tabelas Fiscais Utilizadas

O código utiliza as seguintes constantes e faixas de alíquotas, baseadas nas projeções vigentes para 2025:

* **INSS:** Faixas de 7.5% a 14% (Progressiva). Teto de **R$ 8.157,41**.
* **IRRF:** Faixas de 0% a 27.5% (Progressiva). Dedução por Dependente: **R$ 189,59**.
* **VT (Vale-Transporte):** Alíquota fixa de **6%** sobre o Salário Bruto.
* **FGTS:** Alíquota fixa de **8%** sobre o Salário Bruto.

### 2. Funções de Lógica em JavaScript

As principais funções de cálculo são:

* `calcularINSS(salarioBruto)`: Aplica a alíquota efetiva progressiva do INSS.
* `calcularIRRF(baseCalculoIRRF)`: Aplica a tabela progressiva do IRRF após as deduções.
* `calcularVT(...)` e `calcularFGTS(...)`: Funções para descontos fixos/percentuais.
* `calcularSalarioLiquido()`: Executa o fluxo de cálculo mensal e atualiza a interface.
* `calcularDecimoTerceiro()`: Executa o fluxo de cálculo do 13º e atualiza a interface.

### 3. Estrutura e Estilo

O CSS adota um **Tema Preto e Branco** (alto contraste) para clareza e minimalismo, usando variáveis CSS para fácil manutenção das cores. A navegação entre os cálculos é controlada pela função `openTab`, garantindo que apenas o conteúdo da aba ativa seja exibido.

---

**Aviso Legal:** Esta é uma **SIMULAÇÃO**. Os valores finais podem sofrer variações por conta de descontos adicionais não previstos (convênios, empréstimos, etc.) ou reajustes governamentais nas tabelas. Consulte sempre seu holerite oficial.
