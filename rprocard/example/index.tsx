import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ProductCard } from '../.';

const App = () => {
  const product1 = {
    id: '1',
    title: `Taza Dev`,
  };
  return (
    <div>
      <ProductCard
        key={product1.id}
        product={product1}
        initialValues={{ quantity: 4, maxQuantity: 10 }}
      >
        {({
          reset,
          decrease,
          increase,
          product,
          isMaxQuantityReached,
          quantity,
          maxQuantity,
        }) => (
          <>
            <ProductCard.Image />
            <ProductCard.Title />
            <ProductCard.Buttons />
          </>
        )}
      </ProductCard>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
