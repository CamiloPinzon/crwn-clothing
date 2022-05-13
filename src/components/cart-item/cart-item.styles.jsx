import styled from 'styled-components';

export const Price = styled.span`
  font-size: 13px;
`;

export const Name = styled.span`
  font-size: 15px;
  font-weight:bold;
`;

export const ItemDetails = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 10px 20px;
  font-size: 13px;
  `;

export const CartItemContainer = styled.div`
  width: 100%;
  display: flex;
  height: 80px;
  margin-bottom: 15px;

  img {
    width: 65px;
    height: auto;
  }
`;
  