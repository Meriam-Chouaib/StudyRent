/* eslint-disable @typescript-eslint/no-explicit-any */
import { CONSTANTS } from '../../config/constants';

import { encryptData } from './encrypt';
import { deCryptData } from './decrypt';

// Extract data from local storage buy a key
export const getPersistData = (key: string, parse: boolean) => {
  try {
    const value = localStorage.getItem(key);
    if (value) {
      const valueDecrypted = deCryptData(value);
      return parse ? JSON.parse(valueDecrypted || CONSTANTS.EmptyJsonString) : valueDecrypted;
    }
  } catch (error) {
    return undefined;
  }
};

export const persistData = (key: string, data: any) => {
  if (typeof data === CONSTANTS.Undefined) {
    return;
  }
  const dataString: string = encryptData(data);
  localStorage.setItem(key, dataString);
};

// encrypt data
