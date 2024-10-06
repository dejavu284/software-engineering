import React from 'react';
import Image from 'next/image';
import style from './header.module.css'

const Avatar = () => {
  return (
    <Image
      className={style.imageAvatar}
      src="/images/avatar.png"
      alt="Аватарка пользователя"
      width={40}
      height={40}
    />
  );
};

export default Avatar;
