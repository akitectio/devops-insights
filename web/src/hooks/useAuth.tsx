// hooks/useAuthRedirect.ts
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { selectIsLoggedIn } from '@/src/redux/auth/selectors'; // Adjust the path as needed

const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const router = useRouter();

  useEffect(() => {
    if (!isLoggedIn) {
      router.push('/login');
    }
  }, [isLoggedIn, router]);
};

export default useAuth;
