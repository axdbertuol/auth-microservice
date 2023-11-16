import {
  IPaginationOptions,
  InfinityPaginationResultType,
} from 'kommshop-types';

export const infinityPagination = <T>(
  data: T[],
  options: IPaginationOptions,
): InfinityPaginationResultType<T> => {
  return {
    data,
    hasNextPage: data.length === options.limit,
  };
};
