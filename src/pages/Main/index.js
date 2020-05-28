import React from 'react';

import api from '../../services/api';

import ProductCard from '../../components/ProductCard';

import { Container, Loading, Grid } from './styles';

const Main = () => {
  const [products, setProducts] = React.useState([]);
  const [status, setStatus] = React.useState('idle');

  React.useEffect(() => {
    const fetchProducts = async () => {
      setStatus('pending');
      try {
        const results = await api.get('products');
        setStatus('resolved');
        setProducts(results.data);
      } catch (err) {
        setStatus('rejected');
      }
    };

    fetchProducts();
  }, []);

  return (
    <Container>
      {!products.length && <Loading>Loading...</Loading>}
      <Grid
        data={products}
        status={status}
        renderItem={(item) => <ProductCard product={item} />}
        keyExtractor={(item) => item.title}
        columns={3}
      />
    </Container>
  );
};

export default Main;
