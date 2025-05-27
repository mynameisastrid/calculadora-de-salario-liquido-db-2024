Calculadora de Salário Líquido e FGTS (2024)
Este repositório contém uma simples calculadora web para estimar o salário líquido e o valor do FGTS com base no salário bruto, adiantamentos e ganhos extras. Os cálculos são realizados com base nas tabelas do INSS e Imposto de Renda válidas para o ano de 2024 no Brasil.
________________________________________
Funcionalidades
•	Cálculo de Salário Líquido: Calcula o valor final que o empregado receberá após os descontos de INSS e Imposto de Renda.
•	Cálculo de FGTS: Apresenta o valor correspondente a 8% do salário bruto, referente ao Fundo de Garantia por Tempo de Serviço.
•	Descontos Opcionais: Permite inserir valores de adiantamentos ou outros descontos que impactam o salário líquido.
•	Ganhos Extras Opcionais: Possibilita adicionar ganhos extras (por exemplo, comissões, horas extras) e a quantidade, que serão somados ao salário bruto para os cálculos de INSS e IR.
•	Tabelas de 2024: Os cálculos de INSS e Imposto de Renda utilizam as alíquotas e deduções oficiais de 2024.
•	Interface Intuitiva: Design otimizado para uma experiência de usuário agradável, especialmente em modo escuro.
________________________________________
Como Usar
1.	Clone o Repositório: 
Bash
git clone https://github.com/seu-usuario/calculadora-salario-liquido.git
2.	Abra o index.html: Navegue até a pasta clonada e abra o arquivo index.html em seu navegador web.
3.	Preencha os Campos: 
o	Salário Bruto: Informe o valor do seu salário bruto mensal. Utilize vírgula para separar os centavos (ex: 3.000,00 ou 11246.20).
o	Valor de Adiantamento/Outros Descontos (Opcional): Se houver, insira qualquer valor de adiantamento ou outros descontos.
o	Ganhos Extras (Opcional): Se houver ganhos extras, preencha o "Valor do ganho" e a "Qtd." (quantidade de vezes que esse ganho extra ocorre).
4.	Clique em "Calcular": O resultado será exibido na seção "Resultado" abaixo.
________________________________________
Estrutura do Projeto
O projeto é dividido em três arquivos principais para melhor organização:
•	index.html: Contém a estrutura HTML da calculadora, incluindo o formulário de entrada e a área de exibição dos resultados.
•	style.css: Define os estilos visuais da calculadora, garantindo uma interface responsiva e moderna, com foco no modo escuro.
•	script.js: Contém a lógica JavaScript para processar os inputs do usuário, realizar os cálculos de INSS, IR e FGTS, e exibir os resultados dinamicamente na página.
________________________________________
Tabelas de Referência (2024)
Os cálculos são baseados nas seguintes tabelas de 2024:
Tabela Progressiva Mensal do INSS (Empregado, Empregada Doméstica e Trabalhador Avulso)
Salário de Contribuição (R$)	Alíquota	Parcela a Deduzir do IR (R$)
Até 1.412,00	7,5%	-
De 1.412,01 até 2.666,68	9%	21,18
De 2.666,69 até 4.000,03	12%	101,18
De 4.000,04 até 7.786,02	14%	181,18
Acima de 7.786,02	Teto	908,85
Exportar para as Planilhas
Tabela Progressiva Mensal do Imposto de Renda Pessoa Física (IRPF)
Base de Cálculo (R$)	Alíquota	Parcela a Deduzir do IR (R$)
Até 2.259,20	0%	0,00
De 2.259,21 até 2.826,65	7,5%	169,44
De 2.826,66 até 3.751,05	15%	381,99
De 3.751,06 até 4.664,68	22,5%	662,77
Acima de 4.664,68	27,5%	896,00
Exportar para as Planilhas
________________________________________
Contribuição
Sinta-se à vontade para abrir issues ou pull requests para melhorias, correções de bugs ou novas funcionalidades.
________________________________________
Aviso Legal
Este é um projeto com fins educacionais e de demonstração. Embora os cálculos sejam baseados nas tabelas oficiais de 2024, não substitui um cálculo oficial de folha de pagamento ou consulta a um profissional de contabilidade. As regras e tabelas podem ser alteradas pelas autoridades a qualquer momento.

