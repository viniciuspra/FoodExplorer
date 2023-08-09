import { Plus, X } from "lucide-react";
import { Container } from "./styles";

export default function IngredientItem({$isnew, value, onClick, ...rest}) {
  return (
    <Container $isnew={$isnew}>
      <input type="text" value={value} readOnly={!$isnew} {...rest}/>

      <button type="button" onClick={onClick}>
        { $isnew ? <Plus stroke="#7C7C8A" size={16}/> : <X stroke="white" size={14}/> }
      </button>
    </Container>
  )
}
