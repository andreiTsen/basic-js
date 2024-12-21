const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {

  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }

  encrypt(msg, key) {
    if (!msg || !key) {
      throw new Error('Incorrect arguments!');
    }

    const result = this._process(msg, key, 'encrypt');
    return this.isDirect ? result : result.split('').reverse().join('');
    // remove line with error and write your code here
  }
  decrypt(msg, key) {
    if (!msg || !key) {
      throw new Error('Incorrect arguments!');
    }

    const result = this._process(msg, key, 'decrypt');
    return this.isDirect ? result : result.split('').reverse().join('');
    // remove line with error and write your code here
  }

  _process(msg, key, mode) {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const upperMsg = msg.toUpperCase();
    const upperKey = key.toUpperCase();
    let result = '';
    let keyIndex = 0;

    for (let i = 0; i < upperMsg.length; i++) {
      const char = upperMsg[i];
      if (alphabet.includes(char)) {
        const charIndex = alphabet.indexOf(char);
        const keyChar = upperKey[keyIndex % upperKey.length];
        const keyShift = alphabet.indexOf(keyChar);
        let newIndex;

        if (mode === 'encrypt') {
          newIndex = (charIndex + keyShift) % alphabet.length;
        } else {
          newIndex = (charIndex - keyShift + alphabet.length) % alphabet.length;
        }

        result += alphabet[newIndex];
        keyIndex++;
      } else {
        result += char;
      }
    }

    return result;
  }
}

module.exports = {
  VigenereCipheringMachine
};
