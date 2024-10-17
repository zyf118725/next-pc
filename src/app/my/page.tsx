"use client";
import Layout from '@/componenets/Layout';
import { Button } from 'antd';
import { useEffect } from 'react';
import { useAtom } from 'jotai';
import { userStore } from '@/stores';

export default function My() {
  const [user, setUser] = useAtom(userStore);

  return (
    <div>
      <Layout>
        <h1>个人中心</h1>
        <div>
          <Button onClick={() => setUser({ name: 'lisi', age: 18 })}>jotai-设置个人信息</Button>
          姓名：{user?.name},age: {user?.age}
        </div>
      </Layout>
    </div>
  );
}

