
export const Heading = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 20px 10%;
    background: seaGreen;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 100;
`;

/*
header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 20px 10%;
    background: seaGreen;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 100;
}
*/

export const Logo = styled.a`
    font-size: 32px;
    color: #fff;
    font-weight: 700;
`;

/*
.logo {
    font-size: 32px;
    color: #fff;
    font-weight: 700;
}
*/

export const Navbar = styled.nav`


    a {
        position: relative;
        font-size: 18px;
        color: #fff;
        font-weight: 500;
        margin-left: 40px;
    }

    a::before {
        content: '';
        position: absolute;
        top: 100%;
        left: 0;
        width: 0;
        height: 2px;
        background-color: #fff;
        transition: .4s;
    }

    a:hover::before {
        width: 100%;
    }

    @media(max-width: 480px) {

    }
`;

/*
.Navbar a {
    position: relative;
    font-size: 18px;
    color: #fff;
    font-weight: 500;
    margin-left: 40px;
}

.Navbar a::before {
    content: '';
    position: absolute;
    top: 100%;
    left: 0;
    width: 0;
    height: 2px;
    background-color: #fff;
    transition: .4s;
}

.Navbar a:hover::before {
    width: 100%;
}
*/