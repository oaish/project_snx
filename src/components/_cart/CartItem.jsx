"use client"

import {styled} from "styled-components";
import {FaMinus, FaPlus} from "react-icons/fa";
import {useState} from "react";
import {FaTrashCan} from "react-icons/fa6";

export const CartItem = (props) => {
	const [quantity, setQuantity] = useState(1);
	const decQuantity = () => {
		if (quantity <= 1) {
			alert("Quantity cant be less than 1");
		} else {
			setQuantity(quantity - 1);
		}
	}

	return (
		<>
			<StyledCartItem>
				<ModelContainer>
					<img src={props.img} alt=""/>
					<div>
						<p>{props.name}</p>
						<p>{props.type}</p>
					</div>
				</ModelContainer>
				<QuantityContainer>
					<FaPlus size={30} onClick={() => setQuantity(quantity + 1)}/>
					<p>Quantity: {quantity}</p>
					<FaMinus size={30} onClick={decQuantity}/>
				</QuantityContainer>
				<PriceContainer>
					<h4>Price: {props.price}</h4>
					<FaTrashCan size={30}/>
				</PriceContainer>
			</StyledCartItem>
		</>
	)
}

const StyledCartItem = styled.div`
    margin-left: 2rem;
    margin-bottom: 0.5rem;
    border-radius: 10px;
    height: 11rem;
    width: 90%;
    background-color: var(--primary-comp-bg);
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: 0.25s all linear;
    color: var(--primary-theme-color);

    &:hover {
        cursor: pointer;
        opacity: 0.8;

        > div > img {
            box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.5)
        }
    }
`

const ModelContainer = styled.div`
    width: 33%;
    display: flex;
    align-items: center;

    > img {
        margin-left: 1rem;
        margin-right: 1rem;
        object-fit: cover;
        width: 9rem;
        height: 9rem;
        border-radius: 8px;
        backdrop-filter: blur(20px) saturate(180%);
        -webkit-backdrop-filter: blur(20px) saturate(180%);
        background-color: rgba(61, 61, 61, 0.4);
        transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
`

const QuantityContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 20%;

    > p {
        font-size: 1.5rem;
    }

    > svg {
        padding: 0.20rem;
        border: 2px solid var(--primary-theme-color);
        border-radius: 8px;
        transition: 0.25s all linear;

        &:hover {
            border: 2px solid var(--primary-text-color);
            color: var(--primary-text-color);
        }
    }
`
const PriceContainer = styled.div`
    margin-right: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    > h4 {
        margin-right: 1rem;
        font-size: 1.5rem;
        font-weight: bold;
    }

    > svg {
        padding: 0.20rem;
        border: 2px solid var(--primary-theme-color);
        border-radius: 8px;
        transition: 0.25s all linear;

        &:hover {
            border: 2px solid var(--primary-text-color);
            color: var(--primary-text-color);
        }
    }
`
