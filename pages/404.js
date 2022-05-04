import { useRouter } from "next/router";
import { useEffect } from "react";
import Link from "next/link";

const NotFound = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);
  return (
    <div>
      <h2>Ooooops!</h2>
      <p>This page is not found...</p>
      <Link href="/">
        <a>Home</a>
      </Link>
    </div>
  );
};

export default NotFound;
