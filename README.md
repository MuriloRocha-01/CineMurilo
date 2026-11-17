<h1 align="center">🎬 Cine Murilo</h1>

<p align="center"><em>Busca de filmes recém-lançados, com favoritos e trailers.</em></p>

<p align="center">
  <img src="docs/capa.jpg" alt="Capa do projeto Cine Murilo" width="100%" />
</p>

<p align="center">
  <a href="https://cine-murilo.vercel.app"><strong>🔗 Ver online</strong></a> ·
  <a href="#-sobre">Sobre</a> · <a href="#-funcionalidades">Funcionalidades</a> · <a href="#-tecnologias">Tecnologias</a> · <a href="#-como-rodar">Como rodar</a> · <a href="#-contato">Contato</a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/status-online-22c55e?style=flat-square" alt="Status: online" />
  <img src="https://img.shields.io/badge/tipo-projeto%20de%20estudo-8b5cf6?style=flat-square" alt="Tipo: projeto de estudo" />
  <img src="https://img.shields.io/badge/ano-2025-64748b?style=flat-square" alt="Ano: 2025" />
</p>

---

## 💻 Sobre

Este projeto foi desenvolvido durante o curso do **Sujeito Programador** e marcou um passo muito importante no meu aprendizado.

Ele reforçou conceitos fundamentais de **frontend** e do uso do **React JS** para criar aplicações modernas.

> **Tipo:** projeto de estudo · **Ano:** 2025 · **Online:** [cine-murilo.vercel.app](https://cine-murilo.vercel.app)

## ✨ Funcionalidades

- Lista de filmes recém-lançados vinda da API do TMDB.
- Favoritos salvos no próprio navegador.
- Trailer do filme.
- Avisos na tela quando algo dá certo, como remover um favorito.

## 🎯 Dores que resolve

- Descobrir o que está em cartaz sem sair de um só lugar.
- Guardar os filmes que quero ver depois, sem criar conta.

## 💼 Tecnologias

<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" />
<img src="https://img.shields.io/badge/React%20Router-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white" alt="React Router" />
<img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white" alt="Axios" />
<img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
<img src="https://img.shields.io/badge/TMDB%20API-01B4E4?style=for-the-badge&logo=themoviedatabase&logoColor=white" alt="TMDB API" />

| Tecnologia | Para que usei |
| --- | --- |
| **React** | Lógica e funcionamento da aplicação, em componentes. |
| **React Router** | Navegação entre início, filme, favoritos e página de erro. |
| **Axios** | Chamadas à API do TMDB. |
| **React Toastify** | Mensagens de confirmação na tela. |
| **CSS3** | Estilização e design da interface. |
| **API do TMDB** | Fonte dos filmes em cartaz e dos pôsteres. |

<sub>Este produto usa a API do TMDB, mas não é endossado nem certificado pelo TMDB.</sub>

## 📸 Telas

<table>
  <tr>
    <td width="33%" align="center" valign="top"><img src="docs/telas/cine-home.jpg" alt="Catálogo de filmes" width="100%" /><br /><sub>Catálogo de filmes</sub></td>
    <td width="33%" align="center" valign="top"><img src="docs/telas/cine-filme.jpg" alt="Página do filme" width="100%" /><br /><sub>Página do filme</sub></td>
    <td width="33%" align="center" valign="top"><img src="docs/telas/cine-favoritos.jpg" alt="Lista de favoritos" width="100%" /><br /><sub>Lista de favoritos</sub></td>
  </tr>
</table>

## 🚀 Como rodar

```bash
git clone https://github.com/MuriloRocha-01/CineMurilo.git
cd CineMurilo
npm install
npm start          # abre em http://localhost:3000
```

Outros comandos: `npm run build` (versão de produção) e `npm test`.

## 🗂 Estrutura do projeto

```text
src/
├─ Components/Header   cabeçalho com os links
├─ pages/              Home, Filme, Favoritos e Erro
├─ services/api.js     cliente da API do TMDB (Axios)
├─ routes.js           rotas (React Router)
└─ img/                imagens
```

## 🛠 Desafios enfrentados

- ✅ **useState** → armazenar estados (filmes buscados e favoritos)
- ✅ **useEffect** → lidar com ciclos de vida e carregar dados automaticamente
- ✅ **Responsividade** → garantir funcionamento em diferentes dispositivos
- ✅ **Loading** → feedback visual ao usuário durante buscas
- ✅ **Tratativas de erros** → mensagens claras caso o filme não seja encontrado
- ✅ **Consumo de API** → integração com dados externos para exibir filmes recém-lançados

## ✨ Conclusão

Esse projeto é muito especial, pois representa meu **primeiro passo prático como desenvolvedor web**. Ele me motiva a seguir evoluindo todos os dias no mundo da programação. 💻🚀

## 🧭 Próximos passos

- [ ] Campo de busca por nome do filme
- [ ] Paginação ou botão "carregar mais" no catálogo
- [ ] Favoritos ligados a uma conta (hoje ficam só neste navegador)

## 📬 Contato

Disponível para freelas e novas oportunidades, **#OpenToWork** 🚀  
📧 [murilorochadelima.10@gmail.com](mailto:murilorochadelima.10@gmail.com) · 💼 [LinkedIn](https://www.linkedin.com/in/murilo-rocha-6706a41aa/) · 🐙 [GitHub](https://github.com/MuriloRocha-01) · 🌐 [Portfólio](https://oficial-portifolio-six.vercel.app)

---

<p align="center">Feito com 💙 por <a href="https://github.com/MuriloRocha-01">Murilo Rocha</a></p>
