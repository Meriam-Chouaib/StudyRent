import aes from 'crypto-js/aes';
import { enc } from 'crypto-js';
import { clearLocalStorage } from './clearLoalStorage';
const AUTH_SECURITY_KEY = 'OIURGAEG6AETHA6T8H7HATH68R7THARTH';
export const deCryptData = (encryptedData: string) => {
  try {
    const decryptedData = aes
      .decrypt(encryptedData === null ? '' : encryptedData, AUTH_SECURITY_KEY)
      .toString(enc.Utf8);
    return decryptedData;
  } catch (error) {
    clearLocalStorage();
  }
};
