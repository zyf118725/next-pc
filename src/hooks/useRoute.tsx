import { useRouter } from 'next/navigation';

const useGoto = () => {
  const router = useRouter();
  // 路由跳转
  const goto = (path: string) => router.push(path);

  return { goto };
};

export default useGoto;
