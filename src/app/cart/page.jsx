"use client"

import {PageContainer} from "@/styles/styledGlobal";
import StyledProgressBar from "@/components/ui/StyledProgressBar";
import {fadeLeft} from "@/styles/styledAnimations";
import {CartItem} from "@/components/_cart/CartItem";
import {ObjCart} from "@/lib/objCart";
import {styled} from "styled-components";

export default function Page() {
	function calculateTotalPrice(cart) {
		return cart.reduce((total, item) => {
			const price = parseFloat(item.price.replace('$', ''));
			return total + price;
		}, 0);
	}

	const totalPrice = calculateTotalPrice(ObjCart);
	return (
		<>
			<StyledProgressBar/>
			<PageContainer
				variants={fadeLeft}
				initial="initial"
				animate="show"
				style={{
					paddingLeft: "2.5rem",
				}}
			>
				<ItemsContainer>
					<div className="items">
						{ObjCart.map((item, index) => (
							<CartItem
								key={index}
								name={item.name}
								price={item.price}
								img={item.img}
								type={item.type}
								showSeparator={index !== ObjCart.length - 1}
							/>
						))}
					</div>
					<div className="checkout">
						<div className="pay-details">
							<h4>Number of items: {ObjCart.length}</h4>
							<br/>
							<h3>Total: ${totalPrice}.00</h3>
						</div>
						<div>
							<CheckoutButton>
								Checkout
							</CheckoutButton>
						</div>
					</div>
				</ItemsContainer>
			</PageContainer>
		</>
	);
}

const ItemsContainer = styled.div`
    width: 95%;
    display: flex;
    justify-content: space-between;

    > .items {
        margin: 0.5rem;
        width: 65%;
        padding: 0.25rem;
        background-color: var(--primary-comp-bg);
        border-radius: 12px;
        overflow-y: auto;
        overflow-x: hidden;
    }

    > .checkout {
        width: 35%;
        border-radius: 12px;

        > .pay-details {
            margin: 1rem 0.5rem 0.5rem;
            padding: 1rem;
            background-color: var(--primary-comp-bg);
            border-radius: 8px;
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
            width: 95%;
            background-color: var(--primary-text-color);

            @media (max-width: 768px) {
                width: 90%;
            }
        }
    }

    @media (max-width: 768px) {
        flex-direction: column;

        > .items {
            margin-left: 1.5rem;
            width: 100%;
            padding: 0.25rem;
            background-color: var(--primary-comp-bg);
            border-radius: 12px;
            overflow-y: auto;
            overflow-x: hidden;
        }
    }
`

const CheckoutButton = styled.div`
    margin: 1rem 0.5rem 0.5rem;
    width: 95%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
    border-radius: 8px;
    color: var(--primary-comp-bg);
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
