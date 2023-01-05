import Dayjs from 'dayjs';
import { Timestamp } from 'firebase/firestore';

export const WaitForMilliSecond = (delay: number) => {
  return new Promise((res) => setTimeout(res, delay));
};

export const IsJsonFirestoreTimeStamp = (object: any) => {
  return 'seconds' in object && 'nanoseconds' in object;
};

export const ConvertJsonFirestoreTimeStampToDate = ({
  seconds,
  nanoseconds,
}: {
  seconds: number;
  nanoseconds: number;
}) => {
  return new Date(seconds * 1000 + nanoseconds / 1000000);
};

export const ParseDate = (object: any) => {
  // Date
  if (Object.getPrototypeOf(object) === Date.prototype) {
    return object;
  }

  // Dayjs
  if (Object.getPrototypeOf(object) === Dayjs.prototype) {
    return object.toDate();
  }

  // Firestore TimeStamp
  if (Object.getPrototypeOf(object) === Timestamp.prototype) {
    return object.toDate();
  }

  // Json Firestore TimeStamp
  if (IsJsonFirestoreTimeStamp(object)) {
    return ConvertJsonFirestoreTimeStampToDate(object);
  }

  console.log('ParseDate : Not Support');
  return object;
};
