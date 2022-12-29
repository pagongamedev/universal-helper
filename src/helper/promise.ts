import { TypeGolangResponse } from './type';

export const GolangResponse = async (
  promiseAPI: any
): Promise<TypeGolangResponse> => {
  return promiseAPI
    .then((res: any) => {
      return { res: res, error: null };
    })
    .catch((error: any) => {
      return { res: null, error: error };
    });
};
