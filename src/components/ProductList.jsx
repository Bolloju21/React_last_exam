import React, { useEffect, useState } from 'react';
import ProductItem from './ProductItem';
import { SpinnerHOC } from './SpinnerHOC';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:3000/products')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <h2>Product Catalog</h2>
      <div>
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default SpinnerHOC(ProductList);
