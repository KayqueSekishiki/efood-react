import { createContext, ReactNode, useState } from "react";

type MyGlobalContextProps = {
  modalIsVisible: boolean;
  setModalIsVisible: (visible: boolean) => void;
};

type MyProviderProps = {
  children: ReactNode;
};

const MyGlobalContext = createContext({} as MyGlobalContextProps);

const MyGlobalProvider = ({ children }: MyProviderProps) => {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  return (
    <MyGlobalContext.Provider value={{ modalIsVisible, setModalIsVisible }}>
      {children}
    </MyGlobalContext.Provider>
  );
};

export { MyGlobalContext, MyGlobalProvider };
