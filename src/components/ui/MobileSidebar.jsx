"use client"

import React, {useEffect, useRef, useState} from "react";
import * as NLS from "../../styles/styledNav";
import {StyledLink, StyledNotLink} from "@/styles/styledNav";
import {NavLinksTopMiddle} from "@/lib/objNav";
import "../../styles/nav.css";
import "driver.js/dist/driver.css";
import {useRouter} from "next/navigation";
import useAppStore from "@/states/appState";
import {showToast} from "@/lib/helper";
import {FaMoon, FaSun} from "react-icons/fa";
import {styled} from "styled-components";
import {motion} from "framer-motion";
import {fadeConUp, fadeRight} from "@/styles/styledAnimations";


export const MobileSidebar = ({setSidebarOpen}) => {
    const router = useRouter();

    const [userData, setUserData] = useState([]);
    const toastRef = useRef(null);

    const {user, setUser} = useAppStore();

    const fetchUserData = async () => {
        try {
            const email = document.cookie.split(';')[0].split('=')[1]
            if (email === "false") {
                throw new Error("User not found");
            }

            const options = {
                method: "POST",
                body: JSON.stringify({
                    email: email
                }),
                headers: {
                    "Content-Type": "application/json",
                }
            };

            const res = await fetch("/api/get/user/profile", options);
            const data = await res.json();
            if (!data || data.length === 0) {
                return;
            }

            setUserData(data)

        } catch (error) {
            router.push("/auth");
            console.error("Error fetching user data:", error);
            showToast("error", "Error", "Failed to fetch user data.", toastRef);
        }
    };

    useEffect(() => {
        fetchUserData().then();
    }, []);


    const [isDarkTheme, setIsDarkTheme] = useState(true);

    const handleThemeToggle = () => {
        setIsDarkTheme(!isDarkTheme);
        document.documentElement.style.setProperty('--primary-color-black', isDarkTheme ? '#e0ffff' : '#1d1d1d');
        document.documentElement.style.setProperty('--primary-text-color', isDarkTheme ? '#1d1d1d' : '#008080');
        document.documentElement.style.setProperty('--primary-comp-bg', isDarkTheme ? '#b0e0e6' : '#2c2c2c');
        document.documentElement.style.setProperty('--dropdown-text', isDarkTheme ? '#008080' : '#000');
    };

    return (
        <MobileNavContainer
            variants={fadeRight}
            initial="initial"
            animate="show"
            exit="exit"
        >
            <NLS.NavSubContainer>
                <NLS.NavSubRight>
                    <NLS.NavStyledUl>
                        {NavLinksTopMiddle.map((navLink, index) => (
                            <NLS.NavStyledLi key={index} className="middle-links" onClick={() => setSidebarOpen(false)}>
                                <StyledLink id={navLink.id} href={navLink.path}>
                                    <NLS.NavStyledIcon>{navLink.icon}</NLS.NavStyledIcon>
                                </StyledLink>
                            </NLS.NavStyledLi>
                        ))}
                        <NLS.NavStyledLi className="middle-links">
                            <StyledNotLink id="theme-link" onClick={() => handleThemeToggle()}>
                                <NLS.NavStyledIcon onClick={() => setIsDarkTheme(!isDarkTheme)}>
                                    {isDarkTheme ? <FaSun/> : <FaMoon/>}
                                </NLS.NavStyledIcon>
                            </StyledNotLink>
                        </NLS.NavStyledLi>
                    </NLS.NavStyledUl>
                </NLS.NavSubRight>
            </NLS.NavSubContainer>
        </MobileNavContainer>
    );
};

const MobileNavContainer = styled(motion.div)`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: fixed;
    width: 4rem;
    left: 0;
    top: 4rem;
    z-index: 10000;
    background-color: #1d1d1d;
    height: Calc(100dvh - 4rem);
    border-right: 4px solid var(--primary-theme-color);
  }
`;
