# Teste Econverse: Vaga Desenvolvedor Front-End

Página de vitrine de produtos desenvolvida com React, TypeScript e Sass, conforme as especificações do teste.

## Tecnologias

- [React 19](https://react.dev/) com [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/) como bundler e servidor de desenvolvimento
- [Sass](https://sass-lang.com/) para os estilos
- [oxlint](https://oxc.rs/docs/guide/usage/linter) para análise estática
- Sem bibliotecas de UI (Bootstrap, Foundation etc.)

## Pré-requisitos

- [Node.js](https://nodejs.org/) 20.19 ou superior, ou 22.12 ou superior (exigência do Vite 8)
- npm (instalado junto com o Node.js)

## Instalação

```bash
npm install
```

## Scripts

| Comando           | Descrição                                                        |
| ----------------- | ---------------------------------------------------------------- |
| `npm run dev`     | Inicia o servidor de desenvolvimento em `http://localhost:5173`  |
| `npm run build`   | Verifica os tipos com `tsc` e gera a versão de produção em `dist/` |
| `npm run preview` | Serve localmente a versão gerada pelo `build`                    |
| `npm run lint`    | Executa o oxlint sobre o código                                  |

## Deploy

O site está publicado em Cloudflare Workers, com Static Assets:

<https://processo-seletivo.processo-seletivo.workers.dev>

Para publicar uma nova versão, faça login no Wrangler uma vez e execute o deploy, que gera o `dist/` antes de enviar:

```bash
npx wrangler login
npm run build
npx wrangler deploy
```

A configuração está em `wrangler.jsonc`.

## Testes

O projeto ainda não possui testes automatizados. As verificações disponíveis são a checagem de tipos e o lint:

```bash
npm run build
npm run lint
```

## Fonte dos dados

A vitrine lê os produtos do arquivo `produtos.json`, disponível em:

<https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json>

O serviço (`src/services/productService.ts`) tenta carregar essa URL primeiro. Como o servidor não envia o cabeçalho CORS, o navegador pode bloquear a requisição. Nesse caso, a aplicação usa a cópia local em `public/data/produtos.json`, com o mesmo conteúdo.

## Estrutura do projeto

```
src/
├── components/
│   ├── BrandSection/       Seção "Navegue por marcas"
│   ├── CategoryMenu/       Ícones de departamentos
│   ├── CategoryTabs/       Abas de categorias da vitrine
│   ├── Footer/             Newsletter e rodapé
│   ├── Header/             Barra superior, busca, ícones e menu
│   ├── Hero/               Banner principal
│   ├── PartnerBanners/     Cards "Parceiros"
│   ├── ProductCard/        Card de produto
│   ├── ProductCarousel/    Lista de produtos com setas de navegação
│   ├── ProductModal/       Modal com detalhes e quantidade
│   └── ProductSection/     Título, abas ou link e carrossel de produtos
├── services/
│   └── productService.ts   Busca os produtos (API com fallback local)
├── types/
│   └── product.ts          Tipos do JSON de produtos
├── utils/
│   └── formatPrice.ts      Formatação de preço em reais
├── App.tsx                 Composição da página
├── index.scss              Estilos globais e de componentes
└── main.tsx                Ponto de entrada
public/
├── data/produtos.json      Cópia local dos produtos
└── ...                     Imagens usadas no layout
```

## Observações

- Os preços vêm do JSON em centavos e são exibidos em reais.
- As seções de categorias, parcelamento, frete e os textos de descrição usam conteúdo de exemplo, conforme o layout de referência.
- O botão COMPRAR abre o modal de detalhes; a compra em si não é implementada.
