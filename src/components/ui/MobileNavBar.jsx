import {AnimatePresence, motion} from "framer-motion";
import {styled} from "styled-components";
import React from "react";
import ShirtIcon from "@/lib/objNav";
import Link from "next/link";
import {FaUserEdit} from "react-icons/fa";
import {MobileSidebar} from "@/components/ui/MobileSidebar";
import {usePathname} from "next/navigation";

export default function MobileNavBar() {
    const [sidebarOpen, setSidebarOpen] = React.useState(false);
    const pathname = usePathname()


    const getTitle = () => {
        if (pathname === '/') {
            return 'Home'
        }
        if (pathname.includes('/create')) {
            return 'Create'
        }
        if (pathname === '/contact') {
            return 'Contact'
        }
        if (pathname === '/trending') {
            return 'Trending'
        }
        if (pathname === '/cart') {
            return 'Cart'
        }
    }

    return (
        <>
            <StyledNav>
                <div id="project-link" onClick={() => setSidebarOpen(!sidebarOpen)}>
                    <ShirtIcon/>
                </div>
                <div className="title">{getTitle()}</div>
                <Link id="profile-link" href={'/'}>
                    <FaUserEdit/>
                </Link>
            </StyledNav>
            <AnimatePresence>
                {sidebarOpen && <MobileSidebar setSidebarOpen={setSidebarOpen}/>}
            </AnimatePresence>
        </>
    )
}

const StyledNav = styled(motion.div)`
  display: none;

  @media (max-width: 768px) {
    position: fixed;
    display: grid;
    width: 100vw;
    left: 0;
    top: 0;
    height: 4rem;
    z-index: 100;
    background: #1d1d1d;
    grid-template-columns: 4rem 1fr 4rem;
    border-bottom: 4px solid var(--primary-theme-color);
  }

  #project-link, #profile-link {
    background: #2c2c2c;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--primary-theme-color);

    > svg {
      width: 40%;
      height: 40%;
    }
  }

  #project-link {
    border-right: 4px solid var(--primary-theme-color);
  }

  #profile-link {
    border-left: 4px solid var(--primary-theme-color);
  }

  .title {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    font-weight: bold;
    color: var(--primary-theme-color);
  }
`;
