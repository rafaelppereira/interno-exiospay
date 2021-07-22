import Head from 'next/head';
import { GetStaticProps } from 'next';

import { SubscribeButton } from '../components/SubscribeButton';
import { NewSubscribeModal } from '../components/NewSubscribeModal';
import { useState } from 'react';

import styles from './home.module.scss';

interface HomeProps {
  product: {
    amount: number;
  }
}

export default function Home({ product }: HomeProps) {
  
  const [isNewSubscribeModal, setIsNewSubscribeModal] = useState(false);

  function handleOpenNewSubscribeModal() {
    setIsNewSubscribeModal(true);
  }

  function handleCloseNewSubscribeModal() {
    setIsNewSubscribeModal(false)
  }

  return (
    <>
      <Head>
        <meta name="author" content="exiospay - Milennials" />
        <meta name="description" content="exiospay is a quick and practical way to make your payment controls even easier." />
        <meta name="keywords" content="payments, solutions, facility, ease, monthly fee, exiospace" />
        <meta name="robots" content="index,follow" />
        <meta name="theme-color" content="#121414" />
        <meta name="format-detection" content="telephone=no" />
        <meta property="og:title" content="Welcome to exiospay 💚 | Payment control platform" />
        <meta property="og:site_name" content="exiospay" />
        <meta property="og:description" content="exiospay is a quick and practical way to make your payment controls even easier." />
        <meta property="og:url" content="https://exiospace.com" />
        <meta property="og:image" content="/favicon.png" />
        <meta property="og:image:type" content="image/svg" />
        <title>Welcome to exiospay 💚 | Payment control platform</title>
      </Head>
      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👏 Hey, welcome</span>
          <h1>The easiest way <br /> to manage <span>personal</span> <br /> finances pro.</h1>
          <p>
            Get acess to all the functions <br />
            <span>for {product.amount} month</span>
          </p>
          <SubscribeButton
            onOpenNewSubscribeButton={handleOpenNewSubscribeModal}
          />
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
      <NewSubscribeModal
        isOpen={isNewSubscribeModal}
        onRequestClose={handleCloseNewSubscribeModal}
      />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {

  const value = 2990

  const product = {
    amount: new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(value / 100),
  }
  
  return {
    props: {
      product
    },
    revalidate: 60 * 60 * 24
  }
}
