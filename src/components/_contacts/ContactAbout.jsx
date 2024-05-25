import {FaPerson} from "react-icons/fa6";
import {fadeLeft} from "@/styles/styledAnimations";
import {StyledTitle} from "@/styles/styledHome";
import React from "react";
import {styled} from "styled-components";
import ShirtIcon from "@/lib/objNav";

export default function ContactAbout() {
	return (
		<>
			<AboutContainer
				variants={fadeLeft}
				initial="initial"
				animate="show"
			>
				<div className="text-container">
					<StyledTitle
						variants={fadeLeft}
					>
						<FaPerson/> About Us
					</StyledTitle>
					<AboutParagraph
						variants={fadeLeft}
					>
						SnX is a pioneering platform revolutionizing outfit customization through advanced 3D
						technology. With a vision to democratize fashion, SnX empowers individuals to express their
						unique style effortlessly.
						<br/>
						<br/>
						Our intuitive interface offers endless customization options, from
						fabric selection to fit adjustments, ensuring every outfit reflects your personality.
						Committed
						to sustainability, SnX promotes eco-friendly practices and ethical sourcing. Join our
						community
						of fashion enthusiasts, designers, and trendsetters, and explore the limitless possibilities
						of
						our self-expression.
						<br/>
						<br/>
						Experience the future of fashion with SnX – where creativity knows no bounds,
						and individuality reigns supreme. Welcome to a world where fashion meets innovation, only at
						SnX.
					</AboutParagraph>
				</div>
				<div className="logo">
					<ShirtIcon/>
				</div>
			</AboutContainer>
		</>
	)
}

const AboutContainer = styled.div`
    margin: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 90%;

    > .text-container {
        width: 70%;
    }

    > .logo {
        width: 30%;

        > svg {
            width: 12rem;
            height: 12rem;
            color: var(--primary-theme-color);
        }
    }

    > div > h1 {
        margin-bottom: 3rem;
    }
`

const AboutParagraph = styled.p`
    text-align: justify;
    margin-left: 5rem;
    margin-right: 9rem;
    font-size: 1.2rem;
    color: var(--primary-text-color)
`
