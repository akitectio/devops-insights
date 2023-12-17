import { useEffect } from "react";
import { useRouter } from "next/router";

const useAuth = () => {
  const isLoggedIn = false;
  const router = useRouter();

  useEffect(() => {
    if (!isLoggedIn) {
      router.push("/login");
    }
  }, [isLoggedIn, router]);
};

export default useAuth;
