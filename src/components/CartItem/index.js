import React, { useState } from 'react';
import { FiMinus, FiPlus, FiX, FiCheck } from 'react-icons/fi';
import PropTypes from 'prop-types';

import { useCart } from '../../context/cart';

import {
  Container,
  Image,
  Title,
  Qty,
  Button,
  Input,
  SubTotal,
  Message,
  MessageText,
  DeleteButton,
} from './styles';

const CartItem = ({ product }) => {
  const [showMessage, setShowMessage] = useState(false);
  const { increment, decrement, updateQty, removeProduct } = useCart();
  const { id, image, title, qty, price } = product;

  const handleChangeQuantity = ({ target }) => {
    updateQty(id, Number(target.value));
  };

  const handleDecrement = () => {
    if (qty - 1 !== 0) {
      decrement(id);
    } else {
      setShowMessage(true);
    }
  };

  const handleCancelDelete = () => {
    setShowMessage(false);
  };

  const handleDelete = () => {
    removeProduct(id);
  };

  return (
    <Container>
      <Image src={image} />
      <Title>{title}</Title>
      {showMessage ? (
        <Message>
          <MessageText>
            Remove <strong>{title}</strong> from cart?
          </MessageText>
          <Button onClick={handleCancelDelete}>
            <FiX />
          </Button>
          <DeleteButton onClick={handleDelete}>
            <FiCheck />
          </DeleteButton>
        </Message>
      ) : (
        <>
          <Qty>
            <Button onClick={handleDecrement}>
              <FiMinus />
            </Button>
            <Input value={qty} onChange={handleChangeQuantity} />
            <Button onClick={() => increment(id)}>
              <FiPlus />
            </Button>
          </Qty>
          <SubTotal value={qty * price} />
          <DeleteButton onClick={handleDelete}>
            <FiX />
          </DeleteButton>
        </>
      )}
    </Container>
  );
};

CartItem.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    qty: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default CartItem;
