import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "src/styles/Home.module.css";
import { useGetUser } from "src/utils/hooks/useGetUser";

export default function Home() {
  const router = useRouter();
  const { getUserFn } = useGetUser();
  const handleClick = () => {
    getUserFn();
    router.push("/sakagura");
  };
  return (
    <div className={styles.container}>
      <Head>
        <title className="">Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="mx-auto w-11/12">
        <button
          className="w-full h-[60px] bg-red-600 rounded-lg"
          onClick={handleClick}
        >
          酒蔵に行く
        </button>
      </div>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
