"use client";
import Layout from '@/componenets/Layout';
import { goodsList } from '@/api';
import { useEffect } from 'react';

export default function Goods() {
  useEffect(() => {
    getData();
  }, []);

  // 获取数据
  const getData = async () => {
    const res: any = await goodsList({});
    console.log('res: ', res);
  };
  return (
    <Layout>
      <h1>商品页面</h1>
      <h3>调用接口</h3>
    </Layout>
  );
}

