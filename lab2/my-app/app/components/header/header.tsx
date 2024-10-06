import React from "react";
import styles from './header.module.css'
import { Button } from "@/components/ui/button"


const Header = () => {
  return(
    <div className={styles.header}>
      <Button>Новая задача</Button>
      <Button>Войти</Button>
      <Button></Button>
      <Button>Выйти</Button>
    </div>
  );
}

export default Header