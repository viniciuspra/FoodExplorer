import { Plus, X } from "lucide-react";
import { Container } from "./styles";

export default function IngredientItem({isNew, value, onClick, ...rest}) {
  return (
    <Container isNew={isNew}>
      <input type="text" value={value} readOnly={!isNew} {...rest}/>

      <button type="button" onClick={onClick}>
        { isNew ? <Plus stroke="#7C7C8A" size={16}/> : <X stroke="white" size={14}/> }
      </button>
    </Container>
  )
}
