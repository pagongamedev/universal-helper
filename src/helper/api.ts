import { TypeAPIDataGolangResponse, TypeGolangResponse } from './type';

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

export const GolangToThrowResponse = async (
  promise: Promise<TypeAPIDataGolangResponse>
) => {
  const resAPI = await promise;
  if (resAPI.error) {
    console.log('error :', resAPI.error);
    throw resAPI.error;
  }
  return resAPI.res?.data;
};
