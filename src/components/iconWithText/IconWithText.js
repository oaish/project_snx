"use client"

import s from "./iconWithText.module.css"
import styled from "styled-components";
import {useRef} from "react";
import useMobileDetect from "@/components/UseMobileDetect";

export default function IconWithText({imgSrc, imgAlt, textContent, onClick, hidden}) {
    const ref = useRef(null);
    const {isMobile} = useMobileDetect()
    if (hidden) return null
    return (
        <div className={s.wrapper} onClick={onClick}>
            <img ref={ref} className={s.img + ' ' + imgAlt} src={imgSrc} alt={imgAlt} onClick={() => {
                if (imgAlt !== "Esc") {
                    ref.current.classList.add(s.active);
                    setTimeout(() => ref.current.classList.remove(s.active), 300)
                }
            }}/>
            {textContent && !isMobile() && <StyledKeyText className={s.text}>{textContent}</StyledKeyText>}
        </div>
    )
}

const StyledKeyText = styled.p`
  color: var(--primary-text-color)
`;