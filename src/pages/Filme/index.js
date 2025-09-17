import { useEffect,useState} from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { Link} from 'react-router-dom'

import "./filme-info.css"
import api from "../../services/api";

function Filme(){
  const { id } = useParams();

  const [filme, setFilme] = useState({});
  const [loading, setLoading] = useState(true);

  const navigation = useNavigate();

  useEffect(()=>{
    async function loadFilme(){
      await api.get(`/movie/${id}`, {
        params:{
          api_key: "28fc232cc001c31e8a031f419d0a14ca",
          language: "pt-BR",
        }
      })
      .then((response)=>{ //se caso der certo
        setFilme(response.data);
        setLoading(false);
      })
      .catch(()=>{    //se caso der errado filme que nao existe
        console.log("FILME NAO ENCONTRADO")
        navigation("/", { replace: true });
        return;
      })
    }
    
    loadFilme();
    return () => {
      console.log("COMPONENTE FOI DESMONTADO");
      
    }
  }, [navigation, id])

function salvarFilme(){
      const minhaLista = localStorage.getItem("@primeflix"); //pegando a lista do local storage
      let filmesSalvos = JSON.parse(minhaLista) || []; //se tiver algo na lista ele transforma em um array, se nao tiver nada ele cria um array vazio

      const hasFilme = filmesSalvos.some((filmeSalvo) => filmeSalvo.id === filme.id) //verifica se o filme ja existe na lista
      if(hasFilme){
        toast.warn("Esse filme já está na sua lista!");
        return;
      }

       filmesSalvos.push(filme); //adiciona o filme na lista
       localStorage.setItem("@primeflix", JSON.stringify(filmesSalvos)); //salva a lista no local storage
       toast.success("Filme salvo com sucesso!");
    }



  if(loading){    // se estiver carregando
    return(
      <div className="filme-info">
        <h1>Carregando detalhes...</h1>
      </div>
    )
  }
  
  return(
    <div className="filme-info">
      <h1>{filme.title}</h1>
      <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title} />
      <h3>Sinopse</h3>
      <span>{filme.overview}</span>
      <strong>Avalição: {filme.vote_average} / 10</strong>

      <div className="area-buttons">
        <button onClick={salvarFilme}>Salvar</button>
        <button>
            <a target="black" rel="external" href={`https://youtube.com/results?search_query=${filme.title} Trailer`}>Trailer</a>
        </button>
        <Link className='pagina-init' to="/">Pagina inicial</Link>
      </div>

    </div>
  )
}

export default Filme;
