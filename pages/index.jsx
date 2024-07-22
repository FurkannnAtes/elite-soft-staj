import Image from "next/image";
import Banner from "../components/Home/Banner";
import { Button } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Card from "../components/Home/Card";

const data = [
  { title: "Başlık 1", content: "İçerik 1" },
  { title: "Başlık 2", content: "İçerik 2" },
  { title: "Başlık 3", content: "İçerik 3" },
];

const Home = () => {
  const [name, setName] = useState("furkan");

  const router = useRouter();

  const handleGoProfile = () => {
    router.push("/profile");
  };

  const changeName = (name) => {
    // if (name == "furkan") {
    //   setName("tolga");
    // } else {
    //   setName("furkan");
    // }
    setName(name);
  };

  return (
    <div>
      <h1>
        <p>
          <span></span>
        </p>
      </h1>
      <Link href={"/about"}>About kismina gidiyor</Link>
      <Button type="primary" onClick={() => handleGoProfile()}>
        Diğer Sayfaya Git
      </Button>
      <Button type="primary" onClick={() => changeName("Tolga")}>
        Ismi degistir
      </Button>
      {name}
      <Banner />

      {data.map((cardInfo, i) => (
        <Card number={1} cardInfo={cardInfo} key={i} />
      ))}
    </div>
  );
};

export default Home;
