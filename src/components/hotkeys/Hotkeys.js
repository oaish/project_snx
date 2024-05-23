import React from "react"
import IconWithText from "../iconWithText/IconWithText"
import useStore from "@/states/modelState"
import s from "./hotkeys.module.css"
import styled from "styled-components";
import useMobileDetect from "@/components/UseMobileDetect";

const Hotkeys = ({onClick}) => {
    const {decalPath, animation} = useStore()
    const {isMobile} = useMobileDetect()
    const width = isMobile() ? "50px" : (decalPath ? "200px" : "120px")
    return (
        <StyledKeysContainer className={s.wrapper} style={{width: width, display: (!decalPath && animation) ? "none" : null, padding: '5px 5px', margin: '20px'}}>
            {(decalPath && !isMobile()) && (
                <>
                    <div className={s.inner}>
                        <>
                            <IconWithText
                                imgSrc={'/keys/keyUp.svg'}
                                imgAlt="up"
                                textContent="Scale up"
                            />
                            <IconWithText
                                imgSrc={'/keys/keyDown.svg'}
                                imgAlt="down"
                                textContent="Scale down"
                            />
                            <IconWithText
                                imgSrc={'/keys/keyEscRed.svg'}
                                imgAlt="Esc"
                                textContent="Cancel"
                            />
                        </>
                    </div>
                    { !animation && <hr style={{height: '5px', color: 'white'}}/> }
                </>
            )}
            {!animation && (
                <div className={s.inner}>
                    <IconWithText
                        imgSrc={'/keys/keyR.svg'}
                        imgAlt="rotate"
                        textContent={!isMobile() && "Rotate"}
                        onClick={() => onClick(prev => prev + 90)}
                    />
                </div>
            )}
        </StyledKeysContainer>
    )
}

export default Hotkeys

const StyledKeysContainer = styled.div`
  background-color: var(--primary-color-black);
`;
