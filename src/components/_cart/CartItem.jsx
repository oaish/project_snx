"use client";

import {styled} from "styled-components";
import {useState} from "react";
import {FaX} from "react-icons/fa6";
import {FaMinus, FaPlus} from "react-icons/fa";

export const CartItem = (props) => {
	const [quantity, setQuantity] = useState(1);
	const incrementQuantity = () => {
		setQuantity(prevQuantity => prevQuantity + 1);
	};
	const decrementQuantity = () => {
		if (quantity <= 1) {
			alert("Quantity is required");
		} else {
			setQuantity(prevQuantity => prevQuantity - 1);
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
						<RemoveContainer>
							<FaX/>
						</RemoveContainer>
					</TopContainer>
					<BottomContainer>
						<PriceContainer>
							<p>Price: {props.price}</p>
						</PriceContainer>
						<QuantityContainer>
							<div>
								<div onClick={incrementQuantity} className="button">
									<FaPlus/>
								</div>
								<div>
									{quantity}
								</div>
								<div onClick={decrementQuantity} className="button">
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
    @media (max-width: 768px) {
        height: fit-content;
    }
`

const ModelContainer = styled.div`
    width: 30%;

    > img {
        object-fit: cover;
        height: 50%;
        width: 75%;
    }

    @media (max-width: 768px) {
        width: 40%;
        > img {
            width: 150%;
            height: 150%;
        }
    }
`

const DetailsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    width: 60%;
    @media (max-width: 768px) {
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
        font-size: 0.9rem;
    }

    @media (max-width: 768px) {

        padding-top: 1rem;

        > div > .name {
            margin-top: 1rem;
            font-size: 0.9rem;
        }

        > div > .type {
            margin-top: 1rem;
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
            margin-top: 1rem;
            font-size: 0.9rem;
            font-weight: bold;
        }
    }
`

const QuantityContainer = styled.div`
    display: flex;
    align-items: center;
    border-radius: 8px;

    @media (min-width: 800px) {
        margin-right: -4rem;
    }

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
    }

    @media (max-width: 768px) {
        margin-right: 0.5rem;
        margin-top: -3rem;
        margin-bottom: 1rem;
        > div {
            flex-direction: column;
        }
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

    &:hover {
        cursor: pointer;
    }

    @media (min-width: 800px) {
        margin-right: -4rem;
    }

    @media (max-width: 768px) {
        margin-right: 0.5rem;
    }
`
