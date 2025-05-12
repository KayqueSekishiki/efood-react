import { useDispatch, useSelector } from "react-redux";
import Button from "../Button";

import { CartContainer, Overlay, Sidebar, Prices, CartItem } from "./styles";
import { RootReducer } from "../../store";
import { remove, close } from "../../store/reducers/cart";
import { formatPrices } from "../Modal";

import pizza from "../../assets/recipes/pizza-marguerita.svg";

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart);
  const dispatch = useDispatch();

  const closeCart = () => {
    dispatch(close());
  };

  const removeItem = (id: number) => {
    dispatch(remove(id));
  };

  const getTotalPrices = () => {
    return items.reduce((a, value) => {
      return (a += value.preco!);
    }, 0);
  };

  return (
    <CartContainer className={isOpen ? "is-open" : ""}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        <ul>
          <CartItem>
            <img src={pizza} alt="Pizza Marguerita" />
            <div>
              <h3>Pizza Marguerita</h3>
              <span>{formatPrices(49.9)}</span>
            </div>
            <button
              type="button"
              onClick={() => {
                removeItem(1);
              }}
            />
          </CartItem>

          {items.map((item) => (
            <CartItem key={item.id}>
              <img src={item.foto} alt={item.nome} />
              <div>
                <h3>{item.nome}</h3>
                <span>{formatPrices(item.preco)}</span>
              </div>
              <button
                type="button"
                onClick={() => {
                  removeItem(item.id);
                }}
              />
            </CartItem>
          ))}
        </ul>
        <Prices>
          Valor total
          <span> {formatPrices(getTotalPrices())}</span>
        </Prices>
        <Button buttonFor="formFinish" text="Continuar com a entrega" />
      </Sidebar>
    </CartContainer>
  );
};

export default Cart;
