import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import "./Gallery.scss"

const Gallery = () => {

  const [page, setPage] = useState(1);

  const [searchTerm, setSearchTerm] = useState('');

  const increasePage = () => setPage(page + 1);
  const decreasePage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  }
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  }

  const handleSearchSubmit = async (event) => {
    event.preventDefault();
    const res = await axios.get("https://rickandmortyapi.com/api/character", {
      params: {
        page: 1,
        name: searchTerm
      }
    });
    setCharacters(res.data.results);
    setPage(1);
  }

  const [characters, setCharacters] = useState([])
  useEffect(() => {
    const getCharacters = async () => {
      const res = await axios.get("https://rickandmortyapi.com/api/character", {
        params: {
          page: page,
          name: searchTerm
        }
      }
      )

      console.log(res.data.results)
      setCharacters(res.data.results)
    }
    getCharacters()
  }, [page]);
  return (

    <>
      <main>
      <div className='search-bar'>
          <form onSubmit={handleSearchSubmit}>
            <input type="text" placeholder="Buscar nombre" value={searchTerm} onChange={handleSearchChange} />
            <button type="submit">Buscar</button>
          </form>
        </div>

        <div className='cambioP'>
          <button onClick={decreasePage}>Anterior</button>
          <h2>{page}</h2>
          <button onClick={increasePage}>Siguiente</button>
        </div>
        <div className='padre'>


          {characters.map((character) => (

            <Link key={character.id} to={`${character.id}`}>
              <div className='tarjeta'>
                <figure>
                  <h3>{character.name}</h3>
                  <img src={character.image} alt={character.image} />
                  <h4>Origen: {character.origin.name}</h4>
                  <h4>Location: {character.location.name}</h4>
                </figure>
              </div>
            </Link>
          ))}
        </div><div className='cambioP'>
          <button onClick={decreasePage}>Anterior</button>
          <h2>{page}</h2>
          <button onClick={increasePage}>Siguiente</button>
        </div>
      </main>
    </>
  )
}

export default Gallery