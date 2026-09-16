# VELLUNE Clínica Estética

Front-end conceitual para o portfólio da Nimbus. React + TypeScript + Vite + React Router, sem backend.

## Executar

Requer Node.js 22.12+ (ou 20.19+) e npm.

```powershell
cd "D:\Projetos\Clinica_Vellune\outputs\vellune"
npm install
npm run dev
```

Para compilar: `npm run build`. Para conferir o resultado compilado: `npm run preview`.

## Estrutura

```text
vellune/
├── public/                 # favicon e futuros arquivos de mídia
├── src/
│   ├── components/
│   │   ├── Primitives.tsx  # Container, Button, SectionHeader, Breadcrumb, ImagePlaceholder, CTASection
│   │   ├── Layout.tsx      # Header, MobileMenu, Footer, Logo
│   │   ├── Cards.tsx       # TreatmentCard, TechnologyCard, ResultCard, TestimonialCard
│   │   ├── HeroVideo.tsx
│   │   ├── ContactForm.tsx
│   │   ├── FAQAccordion.tsx
│   │   ├── LocationSection.tsx
│   │   └── Seo.tsx
│   ├── data/siteContent.ts # todo conteúdo editável
│   ├── pages/
│   │   ├── HomePage.tsx
│   │   ├── InfoPages.tsx   # listagens, tecnologias, resultados, FAQ, contato e 404
│   │   └── TreatmentDetailPage.tsx
│   ├── styles/
│   │   ├── tokens.css     # paleta, fontes, espaçamentos, raios
│   │   └── global.css     # componentes e media queries
│   ├── types.ts
│   ├── App.tsx            # rotas
│   └── main.tsx
├── index.html
├── package.json
├── package-lock.json
├── tsconfig.json
└── vite.config.ts
```

## Onde alterar

- **Textos e contatos:** `src/data/siteContent.ts`. Contém `siteContent`, `contact`, `treatments`, `technologies`, `faqs`, `results` e `testimonials`.
- **Preços:** propriedade `price` de cada objeto em `treatments`, em reais. `formatPrice` adiciona “A partir de”. Limpeza de Pele usa `null` e exibe “Investimento sob consulta”, pois não foi fornecido preço. Seu card direciona ao formulário com o interesse selecionado; a listagem principal mostra os cinco protocolos solicitados.
- **Cores e tipografia:** `src/styles/tokens.css`. As famílias vêm do Google Fonts e têm fontes locais de fallback.
- **Imagens:** coloque arquivos em `public/images/` e preencha `image.src` (ex.: `/images/lifting.webp`), `image.alt` e, se necessário, `gallery`. Resultados usam `beforeImage` e `afterImage`. `ImagePlaceholder` troca automaticamente o placeholder pela foto, preservando a proporção.
- **Vídeo:** coloque um MP4 em `public/videos/` e configure `siteContent.hero.videoSrc` (ex.: `/videos/hero.mp4`). `hero.poster` aceita uma imagem opcional. URLs externas também são aceitas. O vídeo é mudo, em loop e possui controle de pausa. A preferência de movimento reduzido impede a reprodução automática.
- **SEO:** conteúdos por página em `siteContent.pages`, home em `siteContent.seo.home`; tratamentos derivam do próprio objeto. `Seo.tsx` atualiza title, description e Open Graph. Configure `seo.openGraph.siteUrl` e `image` quando houver domínio e arte reais. O HTML inicial contém metadados de fallback; para indexação avançada de uma SPA, considere prerender ou SSR futuramente.

## Comportamento

- Menu mobile usa `dialog` nativo: foco contido, fechamento com Escape e restauração do foco; links fecham o menu.
- FAQ usa `details/summary`, com suporte nativo a teclado.
- Formulário valida nome, WhatsApp, e-mail, interesse, período e consentimento. Faz somente mock submit; não transmite, armazena nem registra dados pessoais. Mensagem é opcional.
- Filtros de resultados usam apenas categorias demonstrativas. Depoimentos, notas, fotos, contatos e mapa são placeholders identificados.
- Rotas de tratamento compartilham um template e rejeitam slugs desconhecidos com a página 404.
- Para hospedar a SPA, configure fallback das rotas para `index.html` (inclusive links diretos aos tratamentos).

## Antes de uma operação real

Substitua contatos, endereço, fotografias autorizadas, depoimentos e avaliações verificados. Integre o submit a um serviço real somente quando houver backend. Este case não representa uma clínica em operação.
