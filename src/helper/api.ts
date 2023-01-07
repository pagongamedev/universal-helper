import { TypeGolangResponse } from './type';

export const GolangResponse = async (
  promiseAPI: any
): Promise<TypeGolangResponse> => {
  try {
    return promiseAPI
      .then((res: any) => {
        return { res: res.data, error: null };
      })
      .catch((error: any) => {
        if (error.response && typeof error.response.data == 'object') {
          return { res: error.response.data, error: error };
        }
        return { res: null, error: error };
      });
  } catch (error: any) {
    return { res: null, error: error };
  }
};
