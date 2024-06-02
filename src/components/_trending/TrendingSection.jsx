"use client"

import React from 'react';
import {Carousel} from 'primereact/carousel';
import {STrendingContainer} from "@/styles/styledTrending";
import {fadeLeft} from "@/styles/styledAnimations";
import HeaderType from "@/components/_trending/HeaderType";
import TrendingCard from "@/components/_trending/TrendingCard";
import {useMediaQuery} from "react-responsive";

const responsiveOptions = [
	{
		breakpoint: '1024px',
		numVisible: 3,
		numScroll: 3
	},
	{
		breakpoint: '768px',
		numVisible: 2,
		numScroll: 2
	},
	{
		breakpoint: '560px',
		numVisible: 1,
		numScroll: 1
	}
];

function CarouselCard(props) {
	return (
		<TrendingCard
			img={props.img}
			title={props.title}
			artist={props.artist}
			description={props.description}
			type={props.type}
		/>
	);
}

function TrendingSection({headerContent, headerIcon, carouselData}) {
	const isMobile = useMediaQuery({maxWidth: 768});

	return (
		<>
			<HeaderType content={headerContent} icon={headerIcon} variants={fadeLeft} initial="initial" animate="show"/>
			<STrendingContainer
				variants={fadeLeft}
				initial="initial"
				animate="show"
			>
				<Carousel
					circular
					autoplayInterval={2000}
					numVisible={isMobile ? 1 : 3}
					value={carouselData}
					numScroll={1}
					itemTemplate={CarouselCard}
					responsiveOptions={responsiveOptions}
				/>
			</STrendingContainer>
		</>
	);
}

export default TrendingSection;
