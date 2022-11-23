import React, { createContext, useContext, useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';

const Context = createContext();

export const StateContext = ({ children }) => {
    const [showCart, setshowCart] = useState(false);
    const [cartItems, setcartItems] = useState();
    const [totalPrice, settotalPrice] = useState();
    const [totalQty, settotalQty] = useState();
    const [qty, setQty] = useState(1);
    
    const incQty = () => {
        setQty((num => num + 1));
    }

    const decQty = () => {
        setQty((num) => {
            if (num > 0 ) return  num - 1;
            return num = 0;
        });
    }
     
        return (
            <Context.Provider
              value={{
                showCart,
                cartItems,
                totalPrice,
                totalQty,
                qty,
                incQty,
                decQty,
                
              
              }}
            >
              {children}
            </Context.Provider>
          )
}

export const useStateContext = () => useContext(Context);