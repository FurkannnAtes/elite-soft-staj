import { Button } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const Home = () => {
  const router = useRouter();

  const goHome = () => {
    console.log("tıklandı");
    router.push("/about");
  };

  return (
    <div>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About Us</Link>
        </li>
        <li>
          <Link href="/profile">Profile</Link>
        </li>
      </ul>
      <div>
        <Button onClick={goHome} type="primary">
          Go to About
        </Button>
      </div>
    </div>
  );
};

export default Home;
