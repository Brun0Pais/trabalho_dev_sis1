# 1. Introdução

## Minimundo
A Empresa Espaço Caseiro deseja implementar um sistema de gestão para organizar suas atividades administrativas e operacionais relacionadas à venda de salgados para festas e eventos.O sistema deve possuir uma tela de cadastro e login de clientes. A Empresa oferece um cardápio virtual no qual o cliente pode escolher diferentes tipos de salgados, como coxinhas, bolinhas de queijo, quibes, empadas, entre outros, Cada produto possui um cadastro com informações como nome, descrição, ingredientes principais e preço unitário.
Os clientes podem realizar pedidos diretamente no sistema , especificando os tipos de salgados, a quantidade desejada, a data de entrega, local da entrega e a forma de pagamento. 
O sistema deve gerenciar o status financeiro de cada pedido, distinguindo entre pedidos pagos, pendentes e cancelados, o cliente pode alterar a data da entrega com 2 dias de antecedência .O sistema deve permitir o pagamento via dinheiro e PIX.
A Empresa também oferece a entrega dos salgados no local do evento, as informações de localização são captadas na hora do pedido. 
O sistema inclui um portal exclusivo para os clientes, onde eles podem:
Consultar seus pedidos anteriores e situação de pagamento.


Visualizar o cardápio atualizado de salgados


Atualizar dados pessoais, como telefone e endereço.


Efetuar pagamentos de pedidos em aberto.


Para garantir a qualidade do serviço, o sistema também controla o estoque de salgados, alertando a administração sobre a necessidade de reposição conforme o volume de vendas.
Este sistema busca otimizar a gestão da loja, melhorar a experiência dos clientes e garantir uma operação eficiente, organizada e transparente.


## 1.1 Objetivo
# Objetivos do Projeto

<table>
  <thead>
    <tr>
      <th>Objetivo</th>
      <th>Específico</th>
      <th>Mensurável</th>
      <th>Alcançável</th>
      <th>Relevante</th>
      <th>Temporal</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>1. Criar cadastro/login de clientes</strong></td>
      <td>Desenvolver tela para cadastro e autenticação de clientes</td>
      <td>Testar 100% de acesso e registro de novos usuários</td>
      <td>Sim, com tecnologias web padrão (PHP, MySQL)</td>
      <td>Controlar o acesso e manter segurança dos dados</td>
      <td>Até o 1º mês de projeto</td>
    </tr>
    <tr>
      <td><strong>2. Disponibilizar cardápio virtual</strong></td>
      <td>Listar salgados com nome, ingredientes e preço</td>
      <td>Todos os produtos devem estar cadastrados e visíveis</td>
      <td>Sim, com CRUD básico em banco de dados</td>
      <td>Facilita o cliente na escolha do produto</td>
      <td>Até o final do 2º mês</td>
    </tr>
    <tr>
      <td><strong>3. Permitir pedidos online completos</strong></td>
      <td>Permitir seleção de produtos, quantidade, forma de pagamento, local e data</td>
      <td>100% dos campos devem ser salvos no banco corretamente</td>
      <td>Sim, com formulários e regras de negócio</td>
      <td><strong>Centraliza e automatiza</strong> os pedidos</td>
      <td>Até o final do 3º mês</td>
    </tr>
    <tr>
      <td><strong>4. Gerenciar status financeiro dos pedidos</strong></td>
      <td>Exibir se o pedido está pago, pendente ou cancelado</td>
      <td>Acompanhamento de status em tela e registros no banco</td>
      <td>Sim, com campo status e lógica de atualização</td>
      <td>Essencial para controle financeiro</td>
      <td>Até o final do 3º mês</td>
    </tr>
    <tr>
      <td><strong>5. Implementar controle de estoque com alerta</strong></td>
      <td>Atualizar o estoque conforme os pedidos e avisar quando estiver baixo</td>
      <td>Verificação automática de nível mínimo configurado</td>
      <td>Sim, com lógica simples baseada em quantidade mínima</td>
      <td>Evita falta de produtos e prejuízos</td>
      <td>Até o 4º mês</td>
    </tr>
    <tr>
      <td><strong>6. Criar portal do cliente com histórico de pedidos</strong></td>
      <td>Exibir pedidos antigos, status e permitir atualização de dados</td>
      <td>Clientes devem ver seus pedidos e fazer alterações com sucesso</td>
      <td>Sim, com filtragem por cliente logado</td>
      <td>Melhora a experiência e fidelização</td>
      <td>Até o final do 4º mês</td>
    </tr>
    <tr>
      <td><strong>7. Reduzir erros operacionais</strong></td>
      <td>Eliminar falhas comuns de pedidos e pagamentos manuais</td>
      <td>Comparação de erros antes e depois da implementação</td>
      <td>Sim, com sistema validado e interface clara</td>
      <td>Diminui retrabalho e reclamações</td>
      <td>3 meses após a implantação</td>
    </tr>
    <tr>
      <td><strong>8. Aumentar a agilidade do atendimento</strong></td>
      <td>Responder e registrar pedidos com mais rapidez</td>
      <td>Medir tempo médio de atendimento antes e depois</td>
      <td>Sim, com uso do sistema ao invés de WhatsApp/manual</td>
      <td>Impacta diretamente na satisfação do cliente</td>
      <td>Dentro dos 2 primeiros meses após início do uso</td>
    </tr>
  </tbody>
</table>


## 1.2 Escopo
Este projeto visa desenvolver um sistema de gestão de pedidos para a empresa de salgados "Espaço Caseiro", que terá como finalidade organizar e automatizar os processos de venda, atendimento ao cliente, controle financeiro e gerenciamento de estoque. O sistema se destina a clientes da empresa, que realizarão pedidos e acompanharão seu status, e à equipe administrativa, que fará o controle operacional e financeiro dos pedidos.

