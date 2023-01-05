import Dayjs from 'dayjs';
import { Timestamp } from 'firebase/firestore';

export const ParseDate = (object: any) => {
  // Date
  if (Object.getPrototypeOf(object) === Date.prototype) {
    return object;
  }

  // Firestore TimeStamp
  if (Object.getPrototypeOf(object) === Timestamp.prototype) {
    return object.toDate();
  }

  // Dayjs
  if (Object.getPrototypeOf(object) === Dayjs.prototype) {
    return object.toDate();
  }

  console.log('Not Support');
  return object;
};
