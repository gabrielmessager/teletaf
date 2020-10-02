import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import { Button } from "../Button"
import {
  ButtonContainer,
  NavbarContainer,
  StyledOrderedList,
  StyledList,
  Text,
} from "./Navbar.styles"

export function Navbar() {
  const [scrollPosition, setScrollPosition] = useState(0)
  const handleScroll = () => {
    const position = window.pageYOffset
    setScrollPosition(position)
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const hasScrolled = scrollPosition > 64

  return (
    <NavbarContainer>
      <Link to="/">
        <Text hasScrolled={hasScrolled}>TÉLÉTAF</Text>
      </Link>
      <ButtonContainer>
        <Button className="Navbar__Button">BLOG</Button>
        <Button className="Navbar__Button" href="/new-job-post">
          POST A JOB
        </Button>
      </ButtonContainer>
    </NavbarContainer>
  )
}
