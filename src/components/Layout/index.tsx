'use client';
import React, { useEffect, useState } from 'react';
import styles from "./index.module.scss";
import Header from './Header';

export default function Layout({
  children
}: { children: any }) {

  return (
    <div className={styles.layoutWrap}>
      <Header />
      {children}
      {/* <div className={styles.footerWrap}>footer</div> */}
    </div>
  );
}
