import CryptoJS from 'crypto-js';
import { onlyEmailTypeRegex, passwordRegex } from '@utils/regex';
import * as crypto from 'crypto';
import Buffer from 'buffer';

export const encrypt = (value: string): string => {
  const key = process.env.REACT_APP_AES_KEY || 'keys';
  const encrypted = CryptoJS.AES.encrypt(value, key).toString();
  return encodeURIComponent(encrypted);
};

export const rsaEncrypt = (value: string): string => {
  let key = '';
  const PUBLIC_KEY = process.env.REACT_APP_RSA_PUBLIC_KEY;
  if (PUBLIC_KEY) key = PUBLIC_KEY.replace(/\\n/g, '\n');
  const {
    Buffer: { from },
  } = Buffer;
  return crypto.publicEncrypt(key, from(value)).toString('hex');
};

export const validationCheck = (value: string, key: string): boolean => {
  switch (key) {
    case 'account':
      return onlyEmailTypeRegex.test(value);
    case 'password':
      return passwordRegex.test(value);
    default:
      return false;
  }
};
