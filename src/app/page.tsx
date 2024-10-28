'use client';
import Layout from '@/components/Layout';
import styles from "./page.module.scss";
import { Button } from 'antd';

export default function Home() {

  return (
    <Layout>
      <h1>欢迎使用nextjs</h1>
      <Button type='primary'>antd按钮</Button>
    </Layout>
  );
}
