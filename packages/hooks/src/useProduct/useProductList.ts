import { useQuery, UseQueryResult } from '@tanstack/react-query';

// Services
import { getProducts } from '@services/product';

// Constants
import { QUERY_KEY } from '@repo/constants';

// Models
import { Product } from '@repo/models';

const useProductList = (): UseQueryResult<Product[]> => {
  return useQuery({
    queryKey: [QUERY_KEY.PRODUCTS],
    queryFn: async () => {
      const result: Product[] = [];
      const response = await getProducts();
      response.products.forEach((product) => {
        result.push(new Product({ ...product, image: product.images[0] }));
      });
      return result;
    },
  });
};

export default useProductList;
