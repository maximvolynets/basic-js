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

  constructor(direct = true) {
     this.direct = direct;
     // this.alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }

  encrypt(message, key) {
     try {
        if (arguments.length < 2) {
           throw new Error('Incorrect arguments!');
        } else {
           let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'; // аглицикй алпхабет
           let result_crypt = [];
           let count_Noletter = 0;

           [...message].forEach((item, index) => {
              if (alphabet.indexOf(item.toUpperCase()) == -1) {
                 result_crypt.push(item);
                 count_Noletter++;
              } else {
                 result_crypt.push(alphabet[(
                    alphabet.indexOf(item.toUpperCase()) +
                    alphabet.indexOf(key[(index - count_Noletter) % key.length].toUpperCase())
                 ) % 26]);
              }
           });
           return this.direct ? result_crypt.join('') : result_crypt.reverse().join('');
        }
     } catch {
        throw new Error('Incorrect arguments!');
     }
  }

  decrypt(encryptedMessage, key) {
     try {
        if (arguments.length < 2) {
           throw new Error('Incorrect arguments!');
        } else {

           let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'; // аглицикй алпхабет
           let result_crypt = [];
           let count_Noletter = 0;

           [...encryptedMessage].forEach((item, index) => {
              if (alphabet.indexOf(item.toUpperCase()) == -1) {
                 result_crypt.push(item);
                 count_Noletter++;
              } else {
                 result_crypt.push(alphabet[(
                    (alphabet.indexOf(item.toUpperCase()) - alphabet.indexOf(key[(index - count_Noletter) % key.length].toUpperCase())) > 0 ?
                       alphabet.indexOf(item.toUpperCase()) - alphabet.indexOf(key[(index - count_Noletter) % key.length].toUpperCase()) :
                       (alphabet.indexOf(item.toUpperCase()) - alphabet.indexOf(key[(index - count_Noletter) % key.length].toUpperCase())) + 26
                 ) % 26]);
              }
           });
           return this.direct ? result_crypt.join('') : result_crypt.reverse().join('');

        }
     } catch {
        throw new Error('Incorrect arguments!');
     }
  }
}

module.exports = {
  VigenereCipheringMachine
};
