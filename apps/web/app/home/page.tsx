/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useCallback } from 'react';

import {
  Button,
  CartIcon,
  Categories,
  colors,
  FeaturedProducts,
  SearchBar,
} from '@repo/ui';
import { PostAuthLayout } from '@layouts';

const HomeScreen = () => {
  const route = useRouter();
  const pathname = usePathname();

  const handleNavigateToProductDetails = useCallback((id: number) => {
    console.log('handleNavigateToProductDetails', id);

    route.push(`/product/${id}`);
  }, []);

  const handleNavigateToSearchScreen = useCallback(() => {
    if (!pathname.includes('search')) {
      route.push('/search');
    }
  }, [pathname]);

  const handleNavigateToCartScreen = useCallback(() => {
    route.push('/cart');
  }, []);

  return (
    <PostAuthLayout hideBackButton backgroundColor={colors.background.primary}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          flexDirection: 'row',
        }}
      >
        <SearchBar
          onNavigateToSearch={handleNavigateToSearchScreen}
          backgroundInputColor={colors.background.primary}
        />

        <Button
          style={{
            margin: 15,
            backgroundColor: colors.primary.dark,
            display: 'flex',
            width: 50,
            height: 50,
            borderRadius: 25,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={handleNavigateToCartScreen}
        >
          <CartIcon />
        </Button>
      </div>

      <Categories />
      <FeaturedProducts onNavigateToDetails={handleNavigateToProductDetails} />
    </PostAuthLayout>
  );
};

export default HomeScreen;
