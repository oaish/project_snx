"use client";

import {keyframes, styled} from "styled-components";
import {FaMinus, FaPlus} from "react-icons/fa";
import {FaTrashCan} from "react-icons/fa6";
import {useRef, useState} from "react";

export const CartItem = (props) => {
	const [quantity, setQuantity] = useState(1);
	const [showDetails, setShowDetails] = useState(false);
	const [isAnimating, setIsAnimating] = useState(false);
	const detailsRef = useRef(null);

	const toggleDetails = () => {
		if (showDetails) {
			setIsAnimating(true);
			setTimeout(() => {
				setShowDetails(false);
				setIsAnimating(false);
			}, 150);
		} else {
			setShowDetails(true);
		}
	};

	const decQuantity = () => {
		if (quantity <= 1) {
			alert("Quantity can't be less than 1");
		} else {
			setQuantity(quantity - 1);
		}
	};

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
				<ToggleContainer>
					<ToggleButton onClick={toggleDetails}>
						{!showDetails ? "Show Details" : "Hide Details"}
					</ToggleButton>
				</ToggleContainer>
			</StyledCartItem>
			{(showDetails || isAnimating) && (
				<DetailsContainer ref={detailsRef} className={showDetails && !isAnimating ? "show" : "hide"}>
					<QuantityContainer>
						<FaPlus size={30} onClick={() => setQuantity(quantity + 1)}/>
						<p>Quantity: {quantity}</p>
						<FaMinus size={30} onClick={decQuantity}/>
					</QuantityContainer>
					<PriceContainer>
						<h4>Price: {props.price}</h4>
						<FaTrashCan size={30}/>
					</PriceContainer>
				</DetailsContainer>
			)}
		</>
	);
};

const slideIn = keyframes`
    from {
        transform: translateX(100%);
        opacity: 0;
    }
    to {
        transform: translateX(0);
        opacity: 1;
    }
`;

const slideOut = keyframes`
    from {
        transform: translateX(0);
        opacity: 1;
    }
    to {
        transform: translateX(100%);
        opacity: 0;
    }
`;

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
            box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.5);
        }
    }

    @media (max-width: 768px) {
        flex-direction: column;
        height: auto;
        padding: 1rem;
        width: 100%;
        margin-left: 1rem;
    }
`;

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

    @media (max-width: 768px) {
        width: 100%;
        justify-content: center;
        margin-bottom: 1rem;
    }
`;

const DetailsContainer = styled.div`
    &.show {
        animation: ${slideIn} 0.3s forwards;
        padding: 1rem;
        margin-left: 2rem;
        margin-top: 1rem;
        margin-bottom: 1rem;
        display: flex;
        align-items: center;
        border-radius: 10px;
        justify-content: space-between;
        width: 90%;
        background-color: var(--primary-comp-bg);
    }

    &.hide {
        animation: ${slideOut} 0.3s forwards;
        padding: 1rem;
        margin-left: 2rem;
        margin-top: 1rem;
        margin-bottom: 1rem;
        display: flex;
        align-items: center;
        border-radius: 10px;
        justify-content: space-between;
        width: 90%;
        background-color: var(--primary-comp-bg);
    }

    @media (max-width: 768px) {
        width: 90%;
        margin-left: 2rem;
        flex-direction: column;
        align-items: center;
    }
`;

const QuantityContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 50%;
    transition: all 0.3s ease-in-out;

    > p {
        font-size: 1.5rem;
        color: var(--primary-text-color);
    }

    > svg {
        padding: 0.20rem;
        border: 2px solid var(--primary-theme-color);
        color: var(--primary-theme-color);
        border-radius: 8px;
        transition: 0.25s all linear;

        &:hover {
            cursor: pointer;
            border: 2px solid var(--primary-text-color);
            color: var(--primary-text-color);
        }
    }

    @media (max-width: 768px) {
        width: 100%;
        justify-content: space-around;
        margin-bottom: 1rem;
    }
`;

const PriceContainer = styled.div`
    margin-right: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    transition: all 0.3s ease-in-out;

    > h4 {
        color: var(--primary-text-color);
        margin-right: 1rem;
        font-size: 1.5rem;
        font-weight: bold;
    }

    > svg {
        padding: 0.20rem;
        border: 2px solid var(--primary-theme-color);
        color: var(--primary-theme-color);
        border-radius: 8px;
        transition: 0.25s all linear;

        &:hover {
            cursor: pointer;
            border: 2px solid var(--primary-text-color);
            color: var (--primary-text-color);
        }
    }

    @media (max-width: 768px) {
        width: 100%;
        justify-content: center;
    }
`;

const ToggleContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 15%;

    @media (max-width: 768px) {
        width: 100%;
        justify-content: center;
        margin-bottom: 1rem;
    }
`;

const ToggleButton = styled.button`
    padding: 0.5rem 1rem;
    background-color: var(--primary-color-black);
    color: var(--primary-text-color);
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;

    @media (max-width: 768px) {
        width: 100%;
    }

    &:hover {
        background-color: var(--primary-theme-color);
        color: var(--primary-color-black);
    }
`;
