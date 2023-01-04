import { Dispatch } from 'react';

export const GetTempWhenSetState = (setState: Dispatch<any>, value: any) => {
  setState(value);
  return value;
};
