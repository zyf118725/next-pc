import { useRouter, useSearchParams } from 'next/navigation';

const useGoto = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  // 路由跳转
  const goto = (path: string) => router.push(path);

  // 获取参数
  const getPageParams = (name: string) => searchParams.get(name) ?? '';

  return { goto, getPageParams };
};

export default useGoto;
