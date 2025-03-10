'use client';

import localFont from 'next/font/local';
import {
  FontWeight,
  Typography,
  Button,
  ToastProvider,
  useToast,
} from '@repo/ui';

import styles from '../styles/index.module.css';
import { API_URL } from '@repo/constants';
import { useEffect } from 'react';
import Link from 'next/link';

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
  console.log('API_URL', API_URL);

  return (
    <ToastProvider>
      <div className={poppins.className}>
        <div className={styles.container}>
          <h1 style={{ fontWeight: 500 }}>Web</h1>
          <Typography fontWeight={FontWeight.Bold}> Native</Typography>
          <Link href="/signup">
            <div>123</div>
          </Link>
        </div>
      </div>
    </ToastProvider>
  );
}
