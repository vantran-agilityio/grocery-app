import { useQuery, UseQueryResult } from '@tanstack/react-query';

// Services
import { getCategories } from '@services/category';

// Constants
import { QUERY_KEY } from '@repo/constants';

// Services
import { CategoryListResponse } from '@services/category/type';

const useCategoryList = (): UseQueryResult<CategoryListResponse> => {
  return useQuery({
    queryKey: [QUERY_KEY.CATEGORIES],
    queryFn: async () => {
      return await getCategories();
    },
  });
};

export default useCategoryList;
