"use client";

import {styled} from "styled-components";
import {useRef, useState} from "react";
import {FaX} from "react-icons/fa6";
import {FaMinus, FaPlus} from "react-icons/fa";

export const CartItem = (props) => {
    const dec = useRef(null);
    const getPrice = () => {
        return parseFloat(props.price.replace('$', ''))
    }

    const [quantity, setQuantity] = useState(1);
    const [price, setPrice] = useState(getPrice());
    const incrementQuantity = () => {
        if (quantity === 1) {
            dec.current.style.opacity = 1;
        }
        setQuantity(prevQuantity => prevQuantity + 1);
        setPrice(() => getPrice() * (quantity + 1));
    };
    const decrementQuantity = () => {
        if (quantity === 2) {
            dec.current.style.opacity = 0.5;
        }
        if (quantity > 1) {
            setQuantity(prevQuantity => prevQuantity - 1);
            setPrice(() => getPrice() * (quantity - 1));
        }
    };

    return (
        <>
            <ItemContainer>
                <ModelContainer>
                    <img src={props.img} alt="model_image"/>
                </ModelContainer>
                <DetailsContainer>
                    <TopContainer>
                        <div>
                            <p className="name">Name: {props.name}</p>
                            <p className="type">Type: {props.type}</p>
                        </div>
                        <RemoveContainer onClick={() => props.removeItem(props.id)}>
                            <FaX/>
                        </RemoveContainer>
                    </TopContainer>
                    <BottomContainer>
                        <PriceContainer>
                            <p>${price.toFixed(2)}</p>
                        </PriceContainer>
                        <QuantityContainer>
                            <div>
                                <div onClick={incrementQuantity} className="button">
                                    <FaPlus/>
                                </div>
                                <div>
                                    {quantity}
                                </div>
                                <div onClick={decrementQuantity} className="button dec" ref={dec}>
                                    <FaMinus/>
                                </div>
                            </div>
                        </QuantityContainer>
                    </BottomContainer>
                </DetailsContainer>
            </ItemContainer>
            {props.showSeparator && <div className="seperator"></div>}
        </>
    );
};


const ItemContainer = styled.div`
  padding: -1rem;
  width: 100%;
  display: flex;
  align-items: center;
  height: 145px;

  @media (max-width: 768px) {
    height: fit-content;
  }
`

const ModelContainer = styled.div`
  width: 180px;

  > img {
    object-fit: cover;
    height: 125px;
    width: 145px;
    margin-block: 5px;
    margin-inline: 10px 5px;
    background-color: #1d1d1d;
    box-shadow: 0 0 .4rem rgba(0, 0, 0, 0.5);
    border: 1px solid rgba(255, 255, 255, 0.2);
  }

  @media (max-width: 768px) {
    width: 150px;

    > img {
      margin-block: 8px;
      height: 105px;
      width: 115px;
    }
  }
`

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 115px;
  width: 60%;
  @media (max-width: 768px) {
    padding-bottom: 5px;
  }
`

const TopContainer = styled.div`
  display: flex;
  margin-bottom: 2rem;
  justify-content: space-between;

  > div > .name {
    font-size: 1.2rem;
  }

  > div > .type {
    color: #ccc;
    font-size: 0.9rem;
  }

  @media (max-width: 768px) {
    margin-bottom: 1rem;
    padding-top: .5rem;

    > div > .name {
      font-size: 0.9rem;
    }

    > div > .type {
      font-size: 0.8rem;
    }
  }
`

const BottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

const PriceContainer = styled.div`
  > p {
    font-size: 1.1rem;
    font-weight: bold;
  }

  @media (max-width: 768px) {
    > p {
      font-size: 0.9rem;
      font-weight: bold;
    }
  }
`

const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
  border-radius: 8px;
  margin-right: -10rem;
  box-shadow: 0 0 .4rem rgba(0, 0, 0, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.1);

  > div {
    display: flex;
    align-items: center;
    background-color: var(--primary-color-black);
    border-radius: 8px;
    justify-content: center;
  }

  > div > div {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2rem;
    width: 2rem;
  }

  > div > .button {
    &:hover {
      cursor: pointer;
    }

    &:active {
      opacity: 0.7;
    }
  }

  .dec {
    opacity: 0.5;
  }

  @media (max-width: 768px) {
    margin-right: 0.5rem;
    margin-top: -.3rem;
  }
`

const RemoveContainer = styled.div`
  display: flex;
  width: 2rem;
  height: 2rem;
  border-radius: 8px;
  align-items: center;
  background-color: var(--primary-color-black);
  justify-content: center;
  margin-right: -10rem;
  box-shadow: 0 0 .4rem rgba(0, 0, 0, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.1);

  &:hover {
    cursor: pointer;
  }

  &:active {
    scale: 0.9;
  }

  @media (max-width: 768px) {
    margin-right: 0.5rem;
  }
`
