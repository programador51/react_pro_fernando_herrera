import React from 'react';
import render from 'react-test-renderer';
import { ProductTitle } from '../../src/components/ProductTitle';
import { ProductCard } from '../../src/pages/ProductCard';
import { product1 } from '../data/products';

describe('ProductTitle', () => {
  test('Debe de mostrar el componente correctamente con el titulo personalizado', () => {
    const wrapper = render.create(<ProductTitle title="Custom product" />);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('Mostrar el componente con el nombre del producto', () => {
    const wrapper = render.create(
      <ProductCard product={product1}>
        {() => (
          <>
            <ProductTitle />
          </>
        )}
      </ProductCard>
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
