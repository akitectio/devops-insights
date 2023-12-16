import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { isLogin } from "@/src/redux/auth/selectors";

const useAuth = () => {
  const isLoggedIn = useSelector(isLogin);
  const router = useRouter();

  useEffect(() => {
    if (!isLoggedIn) {
      router.push("/login");
    }
  }, [isLoggedIn, router]);
};

export default useAuth;
