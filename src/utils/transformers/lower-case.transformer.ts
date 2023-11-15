import { TransformFnParams } from 'class-transformer/types/interfaces';
import { MaybeType } from 'shared-kommshop-types';

export const lowerCaseTransformer = (
  params: TransformFnParams,
): MaybeType<string> => params.value?.toLowerCase().trim();
