"use client"

import {CartItem} from "@/components/_cart/CartItem";
import {ObjCart} from "@/lib/objCart";
import {styled} from "styled-components";
import {useState} from "react";
import {fadeLeft} from "@/styles/styledAnimations";
import {motion} from "framer-motion";
import {FaBoxOpen} from "react-icons/fa";
import {Button} from "@/components/_ui/Button";

export default function Page() {
	const [cart, setCart] = useState(ObjCart.map(item => ({...item, quantity: 1})));

	function calculateTotalPrice(cart) {
		return cart.reduce((total, item) => {
			const price = parseFloat(item.price.replace('$', ''));
			return total + (price * item.quantity);
		}, 0);
	}

	const removeItem = (id) => {
		const newCart = cart.filter((item) => item.id !== id);
		setCart(newCart);
	};

	const updateQuantity = (id, quantity) => {
		const newCart = cart.map((item) =>
			item.id === id ? {...item, quantity: quantity} : item
		);
		setCart(newCart);
	};

	const checkout = () => {
		console.log("Checked Out")
	}

	return (
		<>
			<CartPageContainer
				variants={fadeLeft}
				initial="initial"
				animate="show"
			>
				<ItemsContainer
					variants={fadeLeft}
				>
					<div className="items">
						{cart.map((item, index) => (
							<CartItem
								variants={fadeLeft}
								key={index}
								id={item.id}
								name={item.name}
								price={item.price}
								img={item.img}
								type={item.type}
								quantity={item.quantity}
								removeItem={removeItem}
								updateQuantity={updateQuantity}
								showSeparator={index !== ObjCart.length - 1}
							/>
						))}
						{cart.length === 0 && <EmptyCart><FaBoxOpen/> No items in the cart</EmptyCart>}
					</div>
					<div className="checkout">
						<div className="pay-details">
							<h4>Number of items: <span>{cart.length}</span></h4>
							<br/>
							<h3>Total: <span>${calculateTotalPrice(cart).toFixed(2)}</span></h3>
						</div>
						<div>
							<Button onClick={checkout} text={"Checkout"}/>
						</div>
					</div>
				</ItemsContainer>
			</CartPageContainer>
		</>
	);
}


const CartPageContainer = styled(motion.div)`
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

const ItemsContainer = styled(motion.div)`
    width: 95%;
    display: flex;
    justify-content: space-between;

    > .items {
        margin: 0.5rem;
        width: 65%;
        height: calc(100vh - 8rem);
        padding: 0.5rem 3rem 0.5rem 1rem;
        background-color: var(--primary-comp-bg);
        border: 1px solid rgba(255, 255, 255, 0.2);
        overflow-y: auto;
        overflow-x: hidden;
    }

    > .checkout {
        width: 35%;
        margin-left: 0.5rem;
        color: var(--primary-text-color);

        @media (max-width: 768px) {
            margin-top: 1rem;
        }

        > .pay-details {
            margin: 0.5rem 0 0.5rem 0;
            padding: 1rem;
            background-color: var(--primary-comp-bg);
            border: 1px solid rgba(255, 255, 255, 0.2);
            font-size: 1.15rem;

            > h4, h3 {
                > span {
                    font-weight: bold;
                }
            }
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
            width: 100%;
            background-color: var(--primary-text-color);

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

// const CheckoutButton = styled.div`
//     margin: 1rem 0 0.5rem 0;
//     width: 100%;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     padding: 0.5rem;
//     color: var(--primary-comp-bg);
//     border: 1px solid rgba(255, 255, 255, 0.2);
//     background-color: var(--primary-theme-color);
//     transition: 0.25s all linear;
//     font-size: 1.2rem;
//     font-weight: bold;
//
//     &:hover {
//         background-color: var(--primary-comp-bg);
//         color: var(--primary-theme-color);
//         cursor: pointer;
//     }
// `

const EmptyCart = styled.div`
    height: 35rem;
    color: var(--primary-text-color);
    font-weight: bold;
    font-size: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;

    > svg {
        margin-right: 1rem;
    }

    @media (max-width: 768px) {
        height: 25rem;
        display: flex;
        font-size: 2rem;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

`
