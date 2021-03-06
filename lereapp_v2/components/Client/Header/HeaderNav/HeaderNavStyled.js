import styled from "styled-components";

const StyledBurger = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  position: fixed;
  right: 15px;
  z-index: 4;
  display: none;
  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
    top: 25px;
  }
  @media (max-width: 500px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
    top: 15px;
  }
  div {
    height: 0.25rem;
    border-radius: 5px;
    background-color: black;
    transform-origin: 1px;
    transition: all 0.2s linear;
    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }
    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;
const Nav = styled.nav`
  width: 100%;
  padding: 10px 80px 18px 80px;
  display: flex;
  justify-content: space-between;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  @media (max-width: 599.95px) {
    padding: 18px 0 18px 20px;
  }
  @media (max-width: 1340px) {
    padding: 20px;
  }
  @media (max-width: 1024px) {
    padding: 15px;
    display: flex;
    align-items: center;
  }
`;
const RightNav = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  margin-bottom: 0;
  margin-right: 10px;
  align-items: center;
  @media (max-width: 1024px) {
    margin-right: 0;
    padding-left: 0;
  }
  li {
    padding: 0px 23px;
    @media (max-width: 1024px) {
      padding: 0px 20px;
    }
    a {
      color: black;
      font-style: normal;
      font-weight: bold;
      font-size: 16px;
      line-height: 22px;
      text-decoration: none;
      &:hover {
        color: #2faf62;
      }
    }
  }
  @media (max-width: 1023px) {
    flex-flow: column nowrap;
    background-color: #ffffff;
    position: fixed;
    z-index: 3;
    margin-right: 0;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    box-shadow: ${({ open }) =>
      open ? "-4px 0px 10px rgba(0, 0, 0, 0.3);" : "unset"};
    top: 0;
    right: 0;
    height: 100vh;
    width: 30%;
    align-items: flex-end;
    padding-top: 5rem;
    li {
      padding-top: 25px;
      a {
        color: black;
      }
      &:nth-child(3) {
        display: none;
      }
    }
  }
  @media (max-width: 414px) {
    width: 50%;
  }
`;
const styles = (theme) => ({
    right_nav_main: {
        display: "flex",
      },
      uploadproduct: {
        color: "#2faf62 !important",
      },
      right_nav_main_test: {
        position: "absoulute",
      },
      showLogin: {
        position: "relative",
        "&:hover": {
          cursor: "pointer",
        },
      },
  });
export { StyledBurger, Nav, RightNav,styles };
