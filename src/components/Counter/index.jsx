import { useState } from "react";

import { Container, Button, Value } from "./styles";
import { Minus, Plus } from "lucide-react";

export default function Counter() {
  const [count, setCount] = useState(1)

  const handleDecrease = () => {
    setCount((prevCount) => Math.max(0, prevCount - 1))
  }

  const handleIncrease  = () => {
    setCount((prevCount) => prevCount + 1)
  }

  const formattedCount = count < 10 ? `0${count}` : count;

  return (
    <Container>
      <Button onClick={handleDecrease}>
        <Minus stroke="white"/>
      </Button>
      <Value>{formattedCount}</Value>
      <Button onClick={handleIncrease}>
        <Plus stroke="white"/>
      </Button>
    </Container>
  )
}
