import React, { FC } from 'react';
import * as S from './Avatar.style';
import * as T from './Avatar.type';

const Avatar: FC<T.AvatarPorps> = ({ ...props }: T.AvatarPorps) => (
  <S.Wrapper>
    <S.Picture>
      <S.Avatar {...props} />
    </S.Picture>
  </S.Wrapper>
);

export default Avatar;
