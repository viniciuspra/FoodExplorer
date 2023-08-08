import { Hexagon } from "lucide-react";
import { Container } from "./styles";

export default function LogoFoodExplorer({ fill, stroke, size }) {
  return (
    <Container>
      <h1>
        <Hexagon fill={fill} stroke={stroke} size={size} /> food explorer
      </h1>
    </Container>
  );
}
