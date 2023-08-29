import { Hexagon } from "lucide-react";
import { Container } from "./styles";

export default function LogoFoodExplorer({ fill, stroke, size, isAdmin }) {
  return (
    <Container to="/">
      <Hexagon fill={fill} stroke={stroke} size={size} />
        <h1>
          food explorer
          {isAdmin ? <span>Admin</span> : ''}
        </h1>
    </Container>
  );
}
