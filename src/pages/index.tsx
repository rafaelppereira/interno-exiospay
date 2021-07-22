import Head from 'next/head';
import { SubscribeButton } from '../components/SubscribeButton';

import styles from './home.module.scss';

export default function Home() {
  return (
    <>
      <Head>
        <title>Welcome to exiospay 💚 | Payment control platform</title>
      </Head>
      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👏 Hey, welcome</span>
          <h1>The easiest way <br /> to manage <span>personal</span> <br /> finances pro.</h1>
          <p>
            Get acess to all the functions <br />
            <span>for $29,90 month</span>
          </p>
          <SubscribeButton />
        </section>
        <div className={styles.image}></div>
      </main>
      <footer className={styles.footerContainer}>
        <section className={styles.footerContent}>
          <p>© Copyright 2021 by exiospay <span>US</span> |  All rights reserved</p>
          <nav>
            <a href="" title="Terms" >Terms</a>
            <a href="" title="Privacy" >Privacy</a>
            <a href="" title="Security" >Security</a>
            <a href="" title="Contact" >Contact</a>
          </nav>
        </section>
      </footer>
    </>
  )
}
