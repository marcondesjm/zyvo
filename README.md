# Zyvo Wireless

Site institucional responsivo baseado no layout e na identidade visual da Zyvo Wireless. Apresenta a marca, o catálogo Apple e a operação de entrega internacional a partir de Davenport, na Flórida.

[Acessar o site publicado na Vercel](https://zyvo-sigma.vercel.app/)

## Conteúdo e identidade visual

- Abertura com fundo de vidro, logo oficial em SVG, apresentação e chamada para o catálogo.
- Seção Sobre Nós com o texto da referência e vídeo oficial do iPhone 18 Pro. No computador, o play abre o player incorporado em modo de privacidade reforçada. No celular, o botão abre diretamente o vídeo oficial no YouTube.
- Catálogo com iPhone 16 Pro Max, MacBook Pro, iPad Pro e Apple Watch Ultra 2. A vitrine do iPhone 18 Pro usa duas imagens oficiais para simular a rotação entre as vistas.
- Seção de entrega, diferenciais com ícones do layout original, avaliação fornecida na referência e bloco de contato.
- Paleta neutra, detalhes dourados e imagens locais otimizadas em WebP. As fotos oficiais da linha iPhone 18 Pro são da Apple.

## Movimento e interação

- Abertura com título em sequência e bolhas contínuas. O título entra como um bloco no celular para preservar a quebra de linhas.
- Revelação das seções, do texto e dos cartões ao rolar, com entradas escalonadas.
- Foto da entrega avança para a direita ao descer e retorna à esquerda ao subir. O cartão da entrega permanece separado do movimento da foto.
- Círculo que acompanha o mouse em computadores, com destaque em links e botões.
- Contorno dourado sob interação no logo, nos botões e nos ícones. No bloco de contato, o brilho percorre a borda continuamente.
- Indicador de progresso da página e atalho para voltar ao topo em telas pequenas.

## Navegação e acessibilidade

- Menu móvel que fecha ao escolher uma seção ou pressionar Escape. Sem JavaScript, os links continuam disponíveis.
- Link para pular ao conteúdo, foco visível e navegação por teclado.
- Controles no rodapé para ajustar o tamanho do texto de 90% a 130%, alternar alto contraste e pausar os efeitos decorativos.
- Respeito à preferência de movimento reduzido do dispositivo.
- Páginas de privacidade, cookies e acessibilidade. O player externo só é solicitado ao clicar em play.

## Implementação e execução

O site usa HTML, CSS e JavaScript sem dependências de execução. O arquivo styles.css define a identidade e as transições. motion.js cuida da rolagem e do cursor. site.js controla o menu, as preferências, a vitrine e o vídeo.

Para rodar localmente com o player incorporado:

    python -m http.server 4197 --bind 127.0.0.1

Acesse http://127.0.0.1:4197/. Para preparar os arquivos públicos:

    npm run build

A geração copia os arquivos públicos listados em scripts/build.mjs para dist/. A configuração da Vercel usa essa pasta e o projeto está vinculado à branch main deste repositório.

## SEO e pendências

- Título, descrição, metadados sociais, favicon e robots.txt configurados.
- Após definir o domínio oficial, completar canonical, sitemap e imagem de compartilhamento.
- Confirmar canal de atendimento, estoque, preços, condições comerciais e autorização de uso do depoimento. O catálogo é institucional e o contato ainda não tem envio de mensagens ou checkout.

## Desenvolvimento

**MJM Digital**

- Instagram [@marcondes.machado.oficial](https://www.instagram.com/marcondes.machado.oficial/)
- WhatsApp [(48) 9602-9392](https://wa.me/554896029392)
