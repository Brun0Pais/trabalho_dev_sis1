# 8. Riscos e Mitigação

<table>
  <thead>
    <tr>
      <th>Risco</th>
      <th>Descrição</th>
      <th>Estratégia de Mitigação</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>1. Instabilidade no sistema</strong></td>
      <td>Falhas no sistema que impedem o cliente de realizar pedidos ou efetuar pagamentos.</td>
      <td>Realizar testes automatizados e manuais antes do lançamento; adotar manutenção preventiva e um ambiente de testes para simulação.</td>
    </tr>
    <tr>
      <td><strong>2. Perda de dados dos pedidos ou clientes</strong></td>
      <td>Problemas técnicos que resultam em perda de informações importantes.</td>
      <td>Implementar backups automáticos regulares.</td>
    </tr>
    <tr>
      <td><strong>3. Falhas na entrega dos pedidos</strong></td>
      <td>Dados incorretos de endereço ou logística mal organizada.</td>
      <td>Adicionar validação de endereço no sistema e criar interface clara para clientes confirmarem informações de entrega.</td>
    </tr>
    <tr>
      <td><strong>4. Baixa adoção do sistema pelos clientes</strong></td>
      <td>Clientes não utilizam o sistema por falta de familiaridade ou usabilidade ruim.</td>
      <td>Investir em design intuitivo (UX/UI), tutoriais no primeiro acesso e suporte ao cliente via WhatsApp.</td>
    </tr>
    <tr>
      <td><strong>5. Erros no controle de estoque</strong></td>
      <td>Estoque incorreto levando à venda de produtos não disponíveis.</td>
      <td>Automatizar alertas de reposição e integrar o sistema de vendas ao controle de estoque em tempo real.</td>
    </tr>
    <tr>
      <td><strong>6. Problemas com pagamentos via PIX ou dinheiro</strong></td>
      <td>Pagamentos não identificados ou dificuldades na confirmação do pagamento.</td>
      <td>Gerar QR Code automático para PIX com identificação do pedido e criar painel administrativo para controle manual de pagamentos em dinheiro.</td>
    </tr>
    <tr>
      <td><strong>7. Alterações de pedidos em cima da hora</strong></td>
      <td>Clientes tentando mudar data ou quantidade com pouco tempo de antecedência.</td>
      <td>Bloquear alterações fora do prazo (menos de 48h antes) automaticamente no sistema e notificar o cliente com antecedência sobre essa regra.</td>
    </tr>
    <tr>
      <td><strong>8. Atraso no desenvolvimento do sistema</strong></td>
      <td>Prazos estendidos devido à falta de planejamento técnico ou comunicação falha.</td>
      <td>Dividir o projeto em sprints com entregas parciais, fazer reuniões semanais de alinhamento e utilizar ferramentas de gestão como Trello ou Jira.</td>
    </tr>
    <tr>
      <td><strong>9. Falta de capacitação da equipe da empresa para usar o sistema</strong></td>
      <td>Funcionários internos não sabem operar ou interpretar os dados do sistema.</td>
      <td>Oferecer treinamentos práticos e manuais simples de uso para cada função da equipe (vendas, produção, entrega).</td>
    </tr>
  </tbody>
</table>
