import { useEffect, useState } from "react";
import { Container } from "./styles";
import { api } from "../../services/api";
import { useFavoritesContext } from "../../hooks/favorites";

export default function FavoriteCard({ dishId, ...rest}) {
  const { updateFavorite } = useFavoritesContext()
  const [favoriteDish, setFavoriteDish] = useState([])

  useEffect(() => {
    const fetchFavorites = async () => {
      const response = await api.get(`/dishes/${dishId}`)
      setFavoriteDish(response.data)
    }

    fetchFavorites()
  }, [dishId])

  const handleRemoveFavorite = () => {
    updateFavorite(dishId)
  }

  return (
    <Container {...rest}>
      <img src={`${api.defaults.baseURL}/files/${favoriteDish.image_url}`} alt="imagem do prato"/>
      <main>
        <h1>{favoriteDish.name}</h1>
        <button onClick={handleRemoveFavorite}>Remover dos favoritos</button>
      </main>
    </Container>
  )
}
