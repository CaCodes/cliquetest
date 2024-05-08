import forge from 'node-forge';
import config from '../config/index';

const {securityKey} = config;

const security = {
  /**
     * Encrypt with 3DES
     * @param {*} data utf8 string
     * @param {String} key
     * @returns {String} Output is a base64 string
 */
  encryption: (key, data) => {
    let md5Key = forge.md.md5.create();
    md5Key.update(key);
    md5Key = md5Key.digest().toHex();

    const cipher = forge.cipher.createCipher('3DES-ECB', md5Key.substring(0, 24));
    cipher.start();
    cipher.update(forge.util.createBuffer(Buffer.from(data, 'utf8').toString('binary')));
    cipher.finish();

    const encrypted = cipher.output;
    return Buffer.from(encrypted.getBytes(), 'binary').toString('base64');
  },


  /**
     * Decrypt with 3DES
     * @param {String} data a base64 string
     * @param {String} key
     * @returns {*} Output is a base64 string
 */
  decryption: (key, data) => {
    let md5Key = forge.md.md5.create();
    md5Key.update(key);
    md5Key = md5Key.digest().toHex();
    const decipher = forge.cipher.createDecipher('3DES-ECB', md5Key.substring(0, 24));
    decipher.start();

    const inputEx = forge.util.createBuffer(Buffer.from(data, 'base64').toString('binary'));
    decipher.update(inputEx);
    decipher.finish();
    const decrypted = decipher.output;
    return Buffer.from(decrypted.getBytes(), 'binary').toString('utf8');
  },


  /**
     * Flutter Encrypt with 3DES
     * @param {String} data a base64 string
     * @param {String} key
     * @returns {*} Output is a base64 string
 */
  flutterwaveEncryption: (key, data) => {
    const cipher = forge.cipher.createCipher(
      '3DES-ECB',
      forge.util.createBuffer(key),
    );
    cipher.start({ iv: '' });
    cipher.update(forge.util.createBuffer(data, 'utf-8'));
    cipher.finish();
    const encrypted = cipher.output;
    return forge.util.encode64(encrypted.getBytes());
  },

};

export default security;
