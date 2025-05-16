import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import Button from "../Button";
import {
  CartContainer,
  Overlay,
  Sidebar,
  Prices,
  CartItem,
  Title,
  InputGroup,
  DoubleInputGroup,
  DeliveryButtons,
  Message,
} from "./styles";
import { RootReducer } from "../../store";
import { remove, close } from "../../store/reducers/cart";
import { formatPrices } from "../Modal";

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart);
  const [cart, setCart] = useState(true);
  const [delivery, setDelivery] = useState(false);
  const [payment, setPayment] = useState(false);
  const [orderCompleted, setOrderCompleted] = useState(false);
  const dispatch = useDispatch();

  const closeCart = () => dispatch(close());
  const removeItem = (index: number) => dispatch(remove(index));

  const getTotalPrices = () => items.reduce((a, value) => a + value.preco!, 0);

  return (
    <CartContainer className={isOpen ? "is-open" : ""}>
      <Overlay onClick={closeCart} />
      <>
        {cart && (
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
                <Button
                  buttonFor="formFinish"
                  text="Continuar com a entrega"
                  onClick={() => {
                    setDelivery(true);
                    setCart(false);
                  }}
                />
              </>
            )}
          </Sidebar>
        )}

        {delivery && (
          <Sidebar>
            <Title>Entrega</Title>
            <InputGroup>
              <label htmlFor="">Quem irá receber</label>
              <input type="text" />
            </InputGroup>
            <InputGroup>
              <label htmlFor="">Endereço</label>
              <input type="text" />
            </InputGroup>
            <InputGroup>
              <label htmlFor="">Cidade</label>
              <input type="text" />
            </InputGroup>
            <DoubleInputGroup>
              <InputGroup>
                <label htmlFor="">CEP</label>
                <input type="text" />
              </InputGroup>
              <InputGroup>
                <label htmlFor="">Número</label>
                <input type="text" />
              </InputGroup>
            </DoubleInputGroup>
            <InputGroup>
              <label htmlFor="">Complemento (opcional)</label>
              <input type="text" />
            </InputGroup>
            <DeliveryButtons>
              <Button
                buttonFor="formFinish"
                text="Continuar com o pagamento"
                onClick={() => {
                  setDelivery(false);
                  setPayment(true);
                }}
              />
              <Button
                buttonFor="formFinish"
                text="Voltar para o carrinho"
                onClick={() => {
                  setDelivery(false);
                  setCart(true);
                }}
              />
            </DeliveryButtons>
          </Sidebar>
        )}

        {payment && (
          <Sidebar>
            <Title>
              Pagamento - Valor a pagar {formatPrices(getTotalPrices())}
            </Title>
            <InputGroup>
              <label htmlFor="">Nome no cartão</label>
              <input type="text" />
            </InputGroup>
            <DoubleInputGroup>
              <InputGroup className="flex-grow--2">
                <label htmlFor="">Número do cartão</label>
                <input type="text" />
              </InputGroup>
              <InputGroup>
                <label htmlFor="">CVV</label>
                <input type="text" />
              </InputGroup>
            </DoubleInputGroup>
            <DoubleInputGroup>
              <InputGroup>
                <label htmlFor="">Mês de vencimento</label>
                <input type="text" />
              </InputGroup>
              <InputGroup>
                <label htmlFor="">Ano de vencimento</label>
                <input type="text" />
              </InputGroup>
            </DoubleInputGroup>
            <DeliveryButtons>
              <Button
                buttonFor="formFinish"
                text="Finalizar pagamento"
                onClick={() => {
                  setPayment(false);
                  setOrderCompleted(true);
                }}
              />
              <Button
                buttonFor="formFinish"
                text="Voltar para edição de endereço"
                onClick={() => {
                  setDelivery(true);
                  setPayment(false);
                }}
              />
            </DeliveryButtons>
          </Sidebar>
        )}

        {orderCompleted && (
          <Sidebar>
            <Title>Pedido realizado - 000000ID</Title>
            <Message>
              <span>
                Estamos felizes em informar que seu pedido já está em processo
                de preparação e, em breve, será entregue no endereço fornecido.
              </span>
              <span>
                Gostaríamos de ressaltar que nossos entregadores não estão
                autorizados a realizar cobranças extras.
              </span>
              <span>
                Lembre-se da importância de higienizar as mãos após o
                recebimento do pedido, garantindo assim sua segurança e
                bem-estar durante a refeição.
              </span>
              <span>
                Esperamos que desfrute de uma deliciosa e agradável experiência
                gastronômica. Bom apetite!
              </span>
            </Message>
            <DeliveryButtons>
              <Button
                buttonFor="formFinish"
                text="Concluir"
                onClick={() => {
                  setCart(false);
                  setDelivery(false);
                  setPayment(false);
                  setOrderCompleted(false);
                  closeCart();
                }}
              />
            </DeliveryButtons>
          </Sidebar>
        )}
      </>
    </CartContainer>
  );
};

export default Cart;
