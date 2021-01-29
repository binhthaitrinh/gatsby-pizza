import React from 'react';

const OrderContext = React.createContext();

function OrderProvider({ children }) {
  const [order, setOrder] = React.useState([]);

  return (
    <OrderContext.Provider value={[order, setOrder]}>
      {children}
    </OrderContext.Provider>
  );
}

export { OrderContext, OrderProvider };
