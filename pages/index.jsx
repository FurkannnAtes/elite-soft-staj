import Image from "next/image";
import Banner from "../components/Home/Banner";
import { Button } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Card from "../components/Home/Card";
import axios from "axios";

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

  useEffect(() => {
    getUsers();
  }, []);

  const createUser = async () => {
    try {
      const res = await axios.post("/api/user", {
        email: "tolga@hotmail.com",
        username: "tolga",
      });
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getUsers = async () => {
    try {
      const res = await axios.get("/api/user");

      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
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
      <Button type="primary" onClick={() => createUser()}>
        Create user
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
