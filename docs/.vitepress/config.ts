import { defineConfig } from 'vitepress';

// refer https://vitepress.dev/reference/site-config for details
export default defineConfig({
  lang: 'en-US',
  title: 'Espaço Caseiro',
  description: 'Vite & Vue powered static site generator.',

  themeConfig: {
    nav: [
      //{ text: 'introducao', link: '/introducao' },
      // { text: 'descricao-projeto', link: '/descricao' },

       {
         text: 'Dropdown Menu',
         items: [
           { text: '1 - introducao', link: 'introducao' },
      //     { text: 'Item B', link: '/item-2' },
      //     { text: 'Item C', link: '/item-3' },
         ],
       },

      // ...
    ],

    sidebar: [
      {
        // text: 'Guide',
        items: [
          { text: '1- Introdução', link: '/introducao' },
          { text: '2- Descrição do projeto', link: '/descricao-projeto' },
          { text: '3- Principais Recursos e Funcionalidades', link: '/recursos-funcionalidades' },
          { text: '4- Diagrama Caso de uso', link: '/casos-uso' },
          { text: '5- Diagrama de Classes', link: '/diag-classe' },
          { text: '6- introducao', link: '/introducao' },
          { text: '7- introducao', link: '/introducao' },
          { text: '8- Risco e mitigação', link: '/risco-mitigacao' },
          { text: '9- Custo e orçamento', link: '/custo-orcamento' },
          { text: '10- Considerações finais', link: '/consideracoes' },

          // ...
        ],
      },
    ],
  },
});
