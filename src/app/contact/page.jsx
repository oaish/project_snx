"use client"

import {PageContainer} from "@/styles/styledGlobal";
import ContactAbout from "@/components/_contacts/ContactAbout";
import ContactLinks from "@/components/_contacts/ContactLinks";
import ContactFAQ from "@/components/_contacts/ContactFAQ";
import ContactReview from "@/components/_contacts/ContactReview";
import StyledProgressBar from "@/components/ui/StyledProgressBar";
import React from "react";
import {fadeLeft} from "@/styles/styledAnimations";

export default function Page() {
	return (
		<>
			<StyledProgressBar/>
			<PageContainer
				variants={fadeLeft}
				initial="initial"
				animate="show"
				style={{
					paddingLeft: "2.5rem"
				}}
			>
				<ContactAbout/>
				<ContactLinks/>
				<ContactFAQ/>
				<ContactReview/>
			</PageContainer>
		</>
	);
}
