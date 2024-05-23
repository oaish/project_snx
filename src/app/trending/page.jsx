'use client'

import TrendingTitle from "@/components/_trending/TrendingTitle";
import TrendingGrid from "@/components/_trending/TrendingGrid";
import {fadeLeft} from "@/styles/styledAnimations";
import {PageContainer} from "@/styles/styledGlobal";
import StyledProgressBar from "@/components/ui/StyledProgressBar";

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
				<TrendingTitle/>
				<TrendingGrid/>
			</PageContainer>
		</>
	)
}
