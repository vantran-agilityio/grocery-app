'use client';

import localFont from 'next/font/local';
import { FontWeight, Typography } from '@repo/ui';

import styles from '../styles/index.module.css';

const poppins = localFont({
  src: [
    {
      path: '../assets/fonts/Poppins-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../assets/fonts/Poppins-Medium.ttf',
      weight: '500',
      style: 'medium',
    },
    {
      path: '../assets/fonts/Poppins-SemiBold.ttf',
      weight: '600',
      style: 'semi-bold',
    },
    {
      path: '../assets/fonts/Poppins-Bold.ttf',
      weight: '700',
      style: 'bold',
    },
  ],
});

export default function Web() {
  return (
    <div className={poppins.className}>
      <div className={styles.container}>
        <h1 style={{ fontWeight: 500 }}>Web</h1>
        <Typography fontWeight={FontWeight.Bold}> Native</Typography>
      </div>
    </div>
  );
}
