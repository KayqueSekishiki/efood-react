import { createContext, ReactNode, useState } from "react";

export type Menu = {
  id: number;
  foto: string;
  preco: number;
  nome: string;
  descricao: string;
  porcao: string;
};

export type Restaurant = {
  id: number;
  titulo: string;
  destacado: boolean;
  tipo: string;
  avaliacao: number;
  descricao: string;
  capa: string;
  cardapio: Menu[];
};

type MyGlobalContextProps = {
  modalIsVisible: boolean;
  setModalIsVisible: (visible: boolean) => void;
  restaurants: Restaurant[];
  setRestaurants: (restaurants: Restaurant[]) => void;
  selectedRestaurant: Restaurant | null;
  setSelectedRestaurant: (restaurant: Restaurant) => void;
  selectedDish: Menu | null;
  setSelectedDish: (menu: Menu) => void;
};

type MyProviderProps = {
  children: ReactNode;
};

const MyGlobalContext = createContext({} as MyGlobalContextProps);

const MyGlobalProvider = ({ children }: MyProviderProps) => {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [selectedRestaurant, setSelectedRestaurant] =
    useState<Restaurant | null>(null);
  const [selectedDish, setSelectedDish] = useState<Menu | null>(null);

  return (
    <MyGlobalContext.Provider
      value={{
        modalIsVisible,
        setModalIsVisible,
        restaurants,
        setRestaurants,
        selectedRestaurant,
        setSelectedRestaurant,
        selectedDish,
        setSelectedDish,
      }}
    >
      {children}
    </MyGlobalContext.Provider>
  );
};

export { MyGlobalContext, MyGlobalProvider };
