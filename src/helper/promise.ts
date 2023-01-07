import { TypeGolangResponse } from './type';

export const GolangResponse = async (
  promiseAPI: any
): Promise<TypeGolangResponse> => {
  try {
    return promiseAPI
      .then((res: any) => {
        return { res: res, error: null };
      })
      .catch((error: any) => {
        return { res: null, error: error };
      });
  } catch (error) {
    return { res: null, error: error };
  }
};
