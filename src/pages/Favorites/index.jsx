import { Container, NoFavoriteDishes } from "./styles";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import FavoriteCard from "../../components/FavoriteCard";
import { useFavoritesContext } from "../../hooks/favorites";

export default function Favorites() {
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
