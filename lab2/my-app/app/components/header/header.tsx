import React from "react";
import Image from 'next/image';
import styles from './header.module.css'
import Avatar from './avatar'
import { Button } from "@/components/ui/button"


const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.leftSideHeader}>
        <Button>Новая задача</Button>
      </div>
      <div className={styles.rightSideHeader}>
        <Button>Войти</Button>
        <Button>Выйти</Button>
        <Button className={styles.buttonAvatar}>
          <Avatar />
        </Button>
      </div>
    </div>
  );
}

export default Header