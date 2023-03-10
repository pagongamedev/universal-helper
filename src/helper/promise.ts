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
  } catch (error: any) {
    return { res: null, error: error };
  }
};

export const GolangToThrowResponse = async (
  promise: Promise<TypeGolangResponse>
) => {
  const resPromise = await promise;
  if (resPromise.error) {
    console.log('error :', resPromise.error);
    throw resPromise.error;
  }
  return resPromise.res;
};
