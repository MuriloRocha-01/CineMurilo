import { useEffect, useState } from 'react';  
import api from '../../services/api';
import { Link } from 'react-router-dom'; 


import './home.css';



// o useEffect é usado para buscar dados de uma API quando o componente é montado
// o useState é usado para armazenar os dados buscados e atualizar o estado do componente



function Home () {
   const [filmes , setFilmes] = useState([]);
   const [loading, setLoading] = useState(true);
   
   useEffect(() =>{

    async function loadfilmes(){
      const response = await api.get('/movie/now_playing',{
        params:{
          api_key: 'c2e5ac1c299f3f1299937884c53cd23a',
          language: 'pt-BR',
          page: 1,
        }
        })
   
        setFilmes(response.data.results.slice(0,10));
        setLoading(false);
    }  


    loadfilmes();
   }, []);

    if (loading){
      return(
        <div className='loading'>
          <h2>Carregando filmes...</h2>
        </div>
      )
    }

  return (
    <div className="container">
      <span>Filmes disponiveis</span>
      <div className='lista-filmes'>
        {filmes.map((filme) =>{
          return(
            <article key={filme.id}>
              <strong>{filme.title}</strong>
              <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title} /> 
              <Link to={`/filme/${filme.id}`}>Acessar</Link>
            </article>
        )
})}
      </div>
      
      <footer className='footer'>
        <p>CineMurilo</p>
        <span>© 2025, ©CineMurilo, Todos os direitos reservados.</span>
        <a  target='-black' href='https://github.com/MuriloRocha-01'><img src='https://pngimg.com/uploads/github/github_PNG32.png'></img> </a>
      </footer>
    </div>
  );
}

export default Home;