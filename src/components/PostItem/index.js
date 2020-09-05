import React from "react"

import * as S from "./styled"

const PostItem = () => (
  <S.PostItemLink to="/slug/">
    <S.PostItemWrapper>
      <S.PostItemTag background="#47650b">Misc</S.PostItemTag>
      <S.PostItemInfo>
        <S.PostItemDate>
          05 de setembro de 2020 • 4 min de leitura
        </S.PostItemDate>
        <S.PostItemTitle>Titulo do Post</S.PostItemTitle>
        <S.PostItemDescription>Descrição do Post</S.PostItemDescription>
      </S.PostItemInfo>
    </S.PostItemWrapper>
  </S.PostItemLink>
)

export default PostItem
