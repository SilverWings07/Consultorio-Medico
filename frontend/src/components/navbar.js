import styled from "styled-components";

export const Heading = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 15px 5%;
    background: seaGreen;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 100;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

export const Logo = styled.a`
    font-size: 28px;
    color: #fff;
    font-weight: 700;
    text-decoration: none;
    cursor: pointer;

    @media (max-width: 480px) {
        font-size: 20px;
    }
`;

export const Navbar = styled.nav`
    display: flex;
    gap: 20px;

    a {
        font-size: 18px;
        color: #fff;
        font-weight: 500;
        text-decoration: none;
        position: relative;
        transition: color 0.3s ease;
        cursor: pointer;
        padding-right: 30px;

        @media (max-width: 480px) {
            font-size: 12px;
            padding-right: 2px;
        }
    }

    a:hover {
        color: lightyellow;
    }

    a::before {
        content: '';
        position: absolute;
        top: 100%;
        left: 0;
        width: 0;
        height: 2px;
        background-color: #fff;
        transition: width 0.4s ease-in-out;
    }

    a:hover::before {
        width: 70%;

        @media (max-width: 480px) {
            width: 90%;
        }
    }
`;
