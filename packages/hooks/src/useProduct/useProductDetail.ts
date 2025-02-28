import { useQuery, UseQueryResult } from '@tanstack/react-query';

// Services
import { getProductDetail } from '@services/product';

// Constants
import { QUERY_KEY } from '@repo/constants';

// Models
import { Product } from '@repo/models';

const useProductDetail = (id: number): UseQueryResult<Product> => {
  return useQuery({
    queryKey: [`${QUERY_KEY.PRODUCT_DETAIL}-${id}`],
    queryFn: async () => {
      const response = await getProductDetail(id);

      return new Product({ ...response, image: response.images[0] });
    },
  });
};

export default useProductDetail;
