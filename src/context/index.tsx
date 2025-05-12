import { createContext, ReactNode, useState } from "react";
import { Dishe, Restaurant } from "../services/api";

type MyGlobalContextProps = {
  modalIsVisible: boolean;
  setModalIsVisible: (visible: boolean) => void;
  restaurants: Restaurant[];
  setRestaurants: (restaurants: Restaurant[]) => void;
  selectedRestaurant: Restaurant | null;
  setSelectedRestaurant: (restaurant: Restaurant) => void;
  selectedDish: Dishe | null;
  setSelectedDish: (dishe: Dishe) => void;
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
  const [selectedDish, setSelectedDish] = useState<Dishe | null>(null);

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
