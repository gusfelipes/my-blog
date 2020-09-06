import React, { useState, useEffect } from "react"

import { Home } from "@styled-icons/boxicons-regular/Home"
import { SearchAlt as Search } from "@styled-icons/boxicons-regular/SearchAlt"
import { UpArrowAlt as UpArrow } from "@styled-icons/boxicons-regular/UpArrowAlt"
import { LightBulb } from "@styled-icons/octicons/LightBulb"
import { Grid } from "@styled-icons/boxicons-solid/Grid"

import * as S from "./styled"

const MenuBar = () => {
  const [theme, setTheme] = useState(null)

  const isDarkMode = theme === "dark"

  useEffect(() => {
    setTheme(window.__theme)
    window.__onThemeChange = () => setTheme(window.__theme)
  }, [])

  return (
    <S.MenuBarWrapper>
      <S.MenuBarGroup>
        <S.MenuBarLink to="/" alt="Voltar para Home">
          <S.MenuBarItem>
            <Home />
          </S.MenuBarItem>
        </S.MenuBarLink>
        <S.MenuBarLink to="/search" alt="Pesquisar">
          <S.MenuBarItem>
            <Search />
          </S.MenuBarItem>
        </S.MenuBarLink>
      </S.MenuBarGroup>
      <S.MenuBarGroup>
        <S.MenuBarItem
          title="Mudar o tema"
          onClick={() => {
            window.__setPreferredTheme(isDarkMode ? "light" : "dark")
          }}
          className={theme}
        >
          <LightBulb />
        </S.MenuBarItem>
        <S.MenuBarItem title="Mudar visualização">
          <Grid />
        </S.MenuBarItem>
        <S.MenuBarItem title="Ir para o topo">
          <UpArrow />
        </S.MenuBarItem>
      </S.MenuBarGroup>
    </S.MenuBarWrapper>
  )
}

export default MenuBar
