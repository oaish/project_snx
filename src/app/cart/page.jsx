"use client"

import {PageContainer} from "@/styles/styledGlobal";
import StyledProgressBar from "@/components/ui/StyledProgressBar";
import {fadeLeft} from "@/styles/styledAnimations";
import {CartItem} from "@/components/_cart/CartItem";
import {ObjCart} from "@/lib/objCart";
import {styled} from "styled-components";
import useMobileDetect from "@/components/UseMobileDetect";
import {useState} from "react";

export default function Page() {
	const [cart, setCart] = useState(ObjCart);
	function calculateTotalPrice(cart) {
		return cart.reduce((total, item) => {
			const price = parseFloat(item.price.replace('$', ''));
			return total + price;
		}, 0);
	}

	const removeItem = (id) => {
		const newCart = cart.filter((item) => item.id !== id);
		setCart(newCart);
	};

	return (
		<>
			<CartPageContainer>
				<ItemsContainer>
					<div className="items">
						{cart.map((item, index) => (
							<CartItem
								key={index}
								id={item.id}
								name={item.name}
								price={item.price}
								img={item.img}
								type={item.type}
								removeItem={removeItem}
								showSeparator={index !== ObjCart.length - 1}
							/>
						))}
						{cart.length === 0 && <center>No items in the cart</center>}
					</div>
					<div className="checkout">
						<div className="pay-details">
							<h4>Number of items: {cart.length}</h4>
							<br/>
							<h3>Total: ${calculateTotalPrice(cart).toFixed(2)}</h3>
						</div>
						<div>
							<CheckoutButton>
								Checkout
							</CheckoutButton>
						</div>
					</div>
				</ItemsContainer>
			</CartPageContainer>
		</>
	);
}

const CartPageContainer = styled.div`
  background-color: var(--primary-color-black);
  padding-block: 1.5rem;
  margin-left: 5%;
  width: 100vw;
  padding-inline: 2.5rem 2rem;
  overflow: hidden;
  height: calc(100vh - 4rem);

  @media (max-width: 768px) {
    margin-left: 0;
    width: 100vw;
    height: calc(100vh - 10.625rem);
    padding-left: 0 !important;
    padding-top: 1rem;
    margin-top: 4rem;
  }
`;

const ItemsContainer = styled.div`
  width: 95%;
  display: flex;
  justify-content: space-between;

  > .items {
    margin: 0.5rem;
    width: 65%;
    height: calc(100vh - 8rem);
    padding: 0.25rem;
    background-color: var(--primary-comp-bg);
    border: 1px solid rgba(255, 255, 255, 0.2);
    //border-radius: 12px;
    overflow-y: auto;
    overflow-x: hidden;
  }

  > .checkout {
    width: 35%;
    margin-left: 0.5rem;

    @media (max-width: 768px) {
      margin-top: 1rem;
    }

    > .pay-details {
      margin: 0.5rem 0 0.5rem 0;
      padding: 1rem;
      background-color: var(--primary-comp-bg);
      border: 1px solid rgba(255, 255, 255, 0.2);
      //border-radius: 8px;
    }

    @media (max-width: 768px) {
      margin-left: 1rem;
      width: 105%;
    }
  }

  > div {

    > .seperator {
      align-items: center;
      justify-content: space-between;
      margin-left: 1rem;
      height: 1px;
      width: calc(100% - 2rem);
      background-color: rgba(255, 255, 255, 0.2);

      @media (max-width: 768px) {
        width: 90%;
      }
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;

    > .items {
      margin-left: 1rem;
      width: calc(100% + 1.125rem);
      height: calc(100vh - 26.5rem);
      padding: 0.25rem;
      background-color: var(--primary-comp-bg);
      overflow-x: hidden;
    }
  }
`

const CheckoutButton = styled.div`
  margin: 1rem 0 0.5rem 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  //border-radius: 8px;
  color: var(--primary-comp-bg);
  border: 1px solid rgba(255, 255, 255, 0.2);
  background-color: var(--primary-theme-color);
  transition: 0.25s all linear;
  font-size: 1.2rem;
  font-weight: bold;

  &:hover {
    background-color: var(--primary-comp-bg);
    color: var(--primary-theme-color);
    cursor: pointer;
  }
`
