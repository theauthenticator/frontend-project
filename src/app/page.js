import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>


        <a href="/dashboard" style={{
          display: 'inline-block',
          padding: '10px 20px',
          backgroundColor: '#20232a',
          color: '#61dafb',
          textDecoration: 'none',
          borderRadius: '5px',
          textAlign: 'center',
          marginRight: '10px'
        }}>
          Dashboard Design Page
        </a>

        <a href="/leaderboard" style={{
          display: 'inline-block',
          padding: '10px 20px',
          backgroundColor: '#20232a',
          color: '#61dafb',
          textDecoration: 'none',
          borderRadius: '5px',
          textAlign: 'center'
        }}>
          Leaderboard Design Page
        </a>


        <a href="/predict-events" style={{
          display: 'inline-block',
          padding: '10px 20px',
          backgroundColor: '#20232a',
          color: '#61dafb',
          textDecoration: 'none',
          borderRadius: '5px',
          textAlign: 'center'
        }}>
          Predict Events Design Page
        </a>

      </main>
      <footer className={styles.footer}>
        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
