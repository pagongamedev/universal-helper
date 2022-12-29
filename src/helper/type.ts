export type TypeGolangResponse = { res: any; error: Error | null };

export const ReturnInterfacePromise = (res: any): Promise<any> => {
  return new Promise((resolve) => {
    resolve(res);
  });
};
