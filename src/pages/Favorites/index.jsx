import { useFavoritesContext } from "../../hooks/favorites";

import { FavoriteCard } from "../../components/FavoriteCard";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";

import { Container, NoFavoriteDishes } from "./styles";

export function Favorites() {
  const { favorites } = useFavoritesContext();

  return (
    <Container>
      <Header />
      <h1>Meus Favoritos</h1>
      <main>
        {favorites.length === 0 ? (
          <NoFavoriteDishes>Nenhum Prato Favorito Adicionado</NoFavoriteDishes>
        ) : (
          favorites.map((dishId) => (
            <FavoriteCard key={dishId} dishId={dishId} />
          ))
        )}
      </main>
      <Footer />
    </Container>
  );
}
