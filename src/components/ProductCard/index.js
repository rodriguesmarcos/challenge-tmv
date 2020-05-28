import React from 'react';
import PropTypes from 'prop-types';

import { useCart } from '../../context/cart';

import { Container, ImageWrapper, Image, Title, Price, Button } from './styles';

const ProductCard = ({ product }) => {
  const { image, title, price } = product;
  const { addToCart } = useCart();
  return (
    <Container>
      <ImageWrapper>
        <Image src={image} alt={title} />
      </ImageWrapper>

      <Title>{title}</Title>
      <Price value={price} />
      <Button onClick={() => addToCart(product)}>Adicionar ao Carrinho</Button>
    </Container>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default ProductCard;
