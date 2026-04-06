Calculadora de Salário 2025
Esta aplicação é uma ferramenta estática baseada em tecnologias web (HTML, CSS e JavaScript) projetada para fornecer simulações precisas de remuneração sob o regime CLT (Consolidação das Leis do Trabalho) para o ano de 2025. A ferramenta utiliza as tabelas vigentes de INSS, IRRF e as regras específicas de PLR conforme a legislação brasileira atualizada.

Módulos Funcionais
O sistema é dividido em quatro áreas principais de operação, acessíveis por meio de um sistema de abas:

1. Salário Mensal
Realiza o cálculo detalhado do salário líquido a partir do valor bruto.

Entradas: Salário bruto, número de dependentes e opção de desconto de Vale-Transporte (6%).

Saídas: Cálculo imediato do INSS (alíquotas progressivas), IRRF, valor líquido e base de cálculo.

Diferencial: Exibição do FGTS (custo do empregador), que não é descontado do funcionário, mas compõe a reserva técnica do trabalhador.

2. 13º Salário
Projeta o recebimento da gratificação natalina.

Funcionalidade: Permite calcular o valor proporcional aos meses trabalhados no ano corrente.

Detalhamento: Divide o resultado entre a 1ª parcela (integral, sem descontos de impostos) e a 2ª parcela (onde incidem as deduções de INSS e IRRF sobre o valor total).

3. Comparação de Cenários
Ferramenta analítica para tomada de decisão em propostas de emprego ou reajustes.

Lógica: Permite a inserção de dois cenários (A e B) simultaneamente.

Análise de Delta: O sistema calcula automaticamente a diferença real (líquida) entre os dois valores, apresentando a porcentagem de ganho efetivo e o aumento na carga tributária entre as faixas.

4. Participação nos Lucros e Resultados (PLR)
Cálculo específico para bonificações anuais ou semestrais.

Tributação Exclusiva: Aplica a tabela de IRRF exclusiva para PLR (Lei 15.191/2025), que possui faixas de isenção e alíquotas distintas do salário mensal.

Isenções: O sistema ignora automaticamente descontos de INSS e FGTS, conforme previsto em lei para esta modalidade de rendimento.

Usabilidade e Interface
A aplicação foi desenvolvida com foco em experiência do usuário (UX) e precisão visual:

Inputs Híbridos: O usuário pode digitar o valor diretamente ou utilizar sliders (controles deslizantes) para ajustes rápidos e visualização dinâmica dos impactos fiscais.

Visualização de Dados: Utiliza a biblioteca Chart.js para renderizar gráficos de rosca (doughnut) que demonstram a proporção entre salário líquido e impostos.

Atualização em Tempo Real: Implementação de funções debounced que garantem que os cálculos sejam reprocessados conforme o usuário interage com os campos, sem sobrecarregar o processamento do navegador.

Persistência de Dados via URL: A função de compartilhamento gera um link contendo os parâmetros de cálculo codificados. Isso permite que um usuário envie uma simulação específica para outra pessoa ou salve o cálculo nos favoritos.

Portabilidade: O design é responsivo, adaptando a disposição das colunas e tabelas para dispositivos móveis e desktops.

Especificações Técnicas
Linguagem: JavaScript Vanilla (ES6+).

Estilização: CSS3 utilizando Variáveis (Custom Properties) para fácil manutenção de temas e padrões visuais.

Dependências: Chart.js (via CDN) para a renderização gráfica.

Segurança de Dados: Por ser uma ferramenta client-side, nenhum dado financeiro inserido é enviado a servidores externos; todo o processamento ocorre localmente no navegador do usuário.

Notas de Isenção de Responsabilidade
Os resultados apresentados são estimativas baseadas na legislação vigente para 2025. Valores reais de folha de pagamento podem variar de acordo com convenções coletivas de trabalho, benefícios específicos da empresa (planos de saúde, previdência privada) ou faltas e horas extras não contabilizadas nesta simulação.
