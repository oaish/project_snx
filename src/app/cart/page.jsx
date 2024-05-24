"use client"

import {PageContainer} from "@/styles/styledGlobal";
import StyledProgressBar from "@/components/ui/StyledProgressBar";
import {fadeLeft} from "@/styles/styledAnimations";
import HeaderTitle from "@/components/ui/HeaderTitle";
import {FaCartShopping} from "react-icons/fa6";
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
				<HeaderTitle icon={<FaCartShopping/>} content={"Your Cart"}/>
				{ObjCart.map((item, index) => (
					<CartItem key={index} name={item.name} price={item.price} img={item.img} type={item.type}/>
				))}
				<CartDetailsContainer>
					<TotalText>Items: {ObjCart.length}</TotalText>
					<TotalText>Total: ${totalPrice}.00</TotalText>
					<CheckoutButton>Checkout</CheckoutButton>
				</CartDetailsContainer>
			</PageContainer>
		</>
	);
}

const CartDetailsContainer = styled.div`
    margin-top: 2rem;
    margin-left: 2rem;
    display: flex;
    width: 90%;
    align-items: center;
    justify-content: space-between;
    border-top: 2px solid var(--primary-theme-color);
    padding-top: 1rem;
`

const TotalText = styled.h1`
    margin-left: 2rem;
    font-weight: bold;
    font-size: 1.5rem;
    color: var(--primary-theme-color);
`
const CheckoutButton = styled.button`
    color: var(--primary-theme-color);
    padding: 0.5rem;
    border-radius: 8px;
    font-size: 1.5rem;
    font-weight: bold;
    background-color: var(--primary-comp-bg);
    transition: 0.25s all linear;

    &:hover {
        background-color: var(--primary-theme-color);
        color: var(--primary-comp-bg);
    }
`
