import { Button } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const Home = () => {
  const router = useRouter();

  const handleGoProfile = () => {
    router.push("/profile");
  };

  return (
    <div>
      <Link href={"/about"}>About kismina gidiyor</Link>
      <Button type="primary" onClick={() => handleGoProfile()}>
        Diğer Sayfaya Git
      </Button>
    </div>
  );
};

export default Home;
