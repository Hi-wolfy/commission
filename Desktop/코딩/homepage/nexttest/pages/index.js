import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, BrowserRouter } from "react-router-dom";

import "tailwindcss/tailwind.css";
// tailwind를 한번 써보기로 함!

import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import AppNavbar from "../components/AppNavbar";

import logo from "../public/img/logo.svg";

import ai from "../pages/ai";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>AI4Blockchain</title>
      </Head>

      <AppNavbar />

      <main className={styles.main}>Main content</main>
      <footer className={styles.footer}>
        <Image src={logo} alt="logo" width={100} height={50} />
        AI4Blockchain : Seoul & Gyeonggi, Republic of korea | CEO : Chae jin ho
        Tel : 031-438-7001 | 사업자등록번호 : 855 87 01977
        <br />
        Fax : 0504 282 6680 E-mail : AIfor@AI4Blockchain.com | Copyrightⓒ 2021
        All Rights Reserved
      </footer>
    </div>
  );
}
