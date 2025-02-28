import { useQuery, UseQueryResult } from '@tanstack/react-query';

// Services
import { searchProducts } from '@services/product';

// Constants
import { QUERY_KEY } from '@repo/constants';

// Models
import { Product } from '@repo/models';

const useProductSearch = (searchValue: string): UseQueryResult<Product[]> => {
  return useQuery({
    queryKey: [QUERY_KEY.PRODUCT_SEARCH],
    queryFn: async () => {
      const result: Product[] = [];
      const response = await searchProducts(searchValue);
      response.products.forEach((product) => {
        result.push(new Product({ ...product, image: product.images[0] }));
      });
      return result;
    },
  });
};

export default useProductSearch;
