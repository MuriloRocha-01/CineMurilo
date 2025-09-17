import './favoritos.css';
import {useEffect,useState} from "react";
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';

function Favoritos() {
      const[filmes, setFilmes] = useState([]);

      useEffect(() => {
        const minhaLista = localStorage.getItem("@primeflix");
        setFilmes(JSON.parse(minhaLista) || []);   //se nao tiver nada na lista ele cria um array vazio
      }, []);
  
     function excluirFilme(id){
        let filtroFilmes = filmes.filter((item) => {
           return(item.id !== id)  //retorna todos os filmes que forem diferentes do id que eu quero excluir
        })
        setFilmes(filtroFilmes);  
        localStorage.setItem('@primeflix', JSON.stringify(filtroFilmes)); //atualiza o localStorage com a nova lista) 
        toast.success("Filme excluído com sucesso!");
     }

  

    return(       
    <div className="favoritos">
        <h1>Minha Lista de Favoritos</h1>

        {filmes.length === 0 && <span>Você não possui nenhum filme salvo :(</span>}

        <ul>
            {filmes.map((filme) => {
                return(

                    <li key={filme.id}>
                        <span>{filme.title}</span>
                        <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title} />
                        <div>
                            <Link to={`/filme/${filme.id}`}>Ver detalhes</Link>
                        </div>
                        <div>
                            <button onClick={() =>excluirFilme (filme.id)}>Excluir</button>
                    </div>
                    </li>   

                )
            })}

        </ul>
    </div>

      )
}

export default Favoritos;