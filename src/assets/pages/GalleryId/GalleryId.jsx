import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import "./GalleryId.scss"
import { Link } from 'react-router-dom'

const GalleryId = () => {
    const { id } = useParams()
    console.log(id)
    const [character, setCharacters] = useState({})

    useEffect(() => {
        const getCharacterById = async () => {
            const res = await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
            console.log(res.data)
            setCharacters(res.data)

        }
        getCharacterById()
    }, [])

    return (
        <div className='gallery_id'>
            {character ? (
                <>
                    <div className='personaje'>
                        <img src={character.image} alt={character.actor} />
                        <div className='info'>
                        <h1>{character.name}</h1>
                            <p>{character.gender}</p>
                            <p>{character.species}</p>
                            <p>{character.status}</p>
                            <p>{character.created}</p>
                        </div>


                    </div>
                    <button><Link to="/gallery"><h2>Volver</h2></Link></button>
                </>
            ) : null}
        </div>
    )
}

export default GalleryId