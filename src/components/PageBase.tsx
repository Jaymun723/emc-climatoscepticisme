import * as React from "react"
import { styled } from "linaria/react"

export enum Categories {
  Economie = 0,
  Social = 1,
  Politique = 2,
}

export const Page = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

export const Wrapper = styled.main`
  width: 100%;
  max-width: 1140px;
  padding: 10px;
  @media (max-width: 1140px) {
    padding: 25px;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Arial, Helvetica, sans-serif;
`

export const Title = styled.h1`
  font-family: "Playfair Display", serif;
  font-size: 3rem;
  text-align: center;

  @media (max-width: 460px) {
    font-size: 2rem;
  }
`

export const NavBar = styled.nav`
  border-top: 1px solid grey;
  display: flex;
  width: 100%;
  justify-content: space-around;
  padding: 0;
`

export const NavLink = styled.a<{ active?: boolean; onClick: () => void }>`
  color: grey;
  text-decoration: none;
  cursor: pointer;
  font-size: 1.5rem;
  padding: 10px;
  width: 100%;
  text-align: center;
  transition: background-color 0.5s;
  background-color: ${(props) => (props.active ? "rgba(0, 0, 0, 0.1)" : "transparent")};

  &:hover {
    text-decoration: underline;
    background-color: rgba(0, 0, 0, 0.1);
  }
`
