import React, { createContext, useContext, useEffect, useState } from 'react'
import CartDialog from '../components/CartDialog';


const CartContext = createContext();


export function useCart() {
  return useContext(CartContext);
};


const readCartFromLocalStorage = () => {
  const cart = localStorage.getItem("cart");
  return cart ? JSON.parse(cart) : null;
}


const writeCartToLocalStorage = (cart) => {
  localStorage.setItem("cart", JSON.stringify(cart));
}


export function CartContextProvider({ children }) {
  const [goods, setGoods] = useState(() => readCartFromLocalStorage() ?? {});
  const [isOpen, setIsOpen] = useState(false);

  const addGood = ({ id }) => {
    setGoods(goods => { return { ...goods, [id]: goods[id] ? goods[id] + 1 : 1 } });
  }

  const removeGood = ({ id }) => {
    setGoods(goods => {
      if (goods[id] > 1) {
        return { ...goods, [id]: goods[id] - 1 };
      } else {
        const newGoods = { ...goods };
        delete newGoods[id];
        return newGoods;
      }
    });
  }

  const openCart = () => {
    setIsOpen(true);
  }

  const closeCart = () => {
    setIsOpen(false);
  }

  const contextValue = {
    goods,
    addGood,
    removeGood,
    openCart,
  }

  useEffect(() => {
    writeCartToLocalStorage(goods);
  }, [goods]);

  return (
    <CartContext.Provider value={contextValue}>
      {children}
      <CartDialog open={isOpen} onClose={closeCart} />
    </CartContext.Provider>
  );
}
