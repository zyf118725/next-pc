'use client';
import React, { useEffect, useState } from 'react';
import styles from "./index.module.scss";
import useRoute from '@/hooks/useRoute';

const menus: Array<object> = [
  {
    name: '首页',
    path: '/'
  },
  {
    name: '个人中心',
    path: '/my'
  },
  {
    name: '商品列表',
    path: '/goods'
  },
];

export default function Header() {
  const { goto } = useRoute();
  const [pathname, setPathname] = useState('');

  useEffect(() => {
    const pathname = window.location.pathname;
    setPathname(pathname);
  });

  return (
    <div className={styles.headerWrap} >
      <div className={styles.logo}></div>
      <div className={styles.menuWrap}>
        {menus.map((item: any) => (
          <div
            className={`${styles.item} ${pathname === item.path ? styles.itemAct : ''}`}
            key={item.path}
            onClick={() => goto(item.path)}
          >
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
}
