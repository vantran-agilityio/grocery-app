'use client';

import { useRouter } from 'next/navigation';
import { ReactNode } from 'react';

import { BackIcon, colors } from '@repo/ui';

import styles from './styles.module.css';

interface PostAuthLayoutProps {
  children: ReactNode;
  hideBackButton?: boolean;
  backgroundColor?: string;
}

const PostAuthLayout = ({
  children,
  hideBackButton = false,
  backgroundColor = colors.background.dark,
}: PostAuthLayoutProps) => {
  const router = useRouter();

  return (
    <section
      className={styles.contain}
      style={{
        backgroundColor,
      }}
    >
      <div className={styles.content}>
        {!hideBackButton && (
          <BackIcon
            color={colors.text.dark}
            style={{ padding: 15, cursor: 'pointer' }}
            onPress={() => router.back()}
          />
        )}
        {children}
      </div>
    </section>
  );
};

export default PostAuthLayout;
