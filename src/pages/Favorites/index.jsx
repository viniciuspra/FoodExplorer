import { Container } from "./styles";

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
        {
          favorites && favorites.map((dishId) => (
          <FavoriteCard key={dishId} dishId={dishId} />
          ))
        }
      </main>
      <Footer />
    </Container>
  );
}
