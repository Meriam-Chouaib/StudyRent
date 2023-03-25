/* eslint-disable @typescript-eslint/no-explicit-any */
import aes from 'crypto-js/aes';

// encrypt data
const AUTH_SECURITY_KEY = 'OIURGAEG6AETHA6T8H7HATH68R7THARTH';

export const encryptData = (data: any) => {
  const encryptedData = aes.encrypt(JSON.stringify(data), AUTH_SECURITY_KEY).toString();
  return encryptedData;
};
