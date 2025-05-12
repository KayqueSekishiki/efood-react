import { useDispatch, useSelector } from "react-redux";
import Button from "../Button";
import {
  CartContainer,
  Overlay,
  Sidebar,
  Prices,
  CartItem,
  Title,
} from "./styles";
import { RootReducer } from "../../store";
import { remove, close } from "../../store/reducers/cart";
import { formatPrices } from "../Modal";

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart);
  const dispatch = useDispatch();

  const closeCart = () => dispatch(close());
  const removeItem = (index: number) => dispatch(remove(index));

  const getTotalPrices = () => items.reduce((a, value) => a + value.preco!, 0);

  return (
    <CartContainer className={isOpen ? "is-open" : ""}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        {items.length === 0 ? (
          <Title>Nenhum item no carrinho</Title>
        ) : (
          <>
            <ul>
              {items.map((item, index) => (
                <CartItem key={`${item.id}-${index}`}>
                  <img src={item.foto} alt={item.nome} />
                  <div>
                    <h3>{item.nome}</h3>
                    <span>{formatPrices(item.preco)}</span>
                  </div>
                  <button type="button" onClick={() => removeItem(index)} />
                </CartItem>
              ))}
            </ul>
            <Prices>
              Valor total
              <span> {formatPrices(getTotalPrices())}</span>
            </Prices>
            <Button buttonFor="formFinish" text="Continuar com a entrega" />
          </>
        )}
      </Sidebar>
    </CartContainer>
  );
};

export default Cart;
