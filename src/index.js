const ones = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
//const hundred = ['', 'one hundred', 'two hundred', 'three hundred', 'four hundred', 'five hundred', 'six hundred', 'seven hundred', 'eight hundred', 'nine hundred']//

module.exports = function toReadable (number) {
  if (number < 20) {
    return ones[number];
  } else if (number < 100) {
    const lastDigit = number % 10;
    const ten = ((number - lastDigit) / 10);

    return `${tens[ten]}${lastDigit ? ' ' + ones[lastDigit] : ''}`;

  } else {
    const hundred = ((number - (number % 100)) / 100);
    const rest = number % 100;
    if (rest === 0) {
      
      return `${ones[hundred]} hundred`;
    } else if (rest < 20) {

      return `${ones[hundred]} hundred ${ones[rest]}`;
    } else {
      const ten = ((rest - (rest % 10)) / 10);
      const lastDigit = rest % 10;

      return `${ones[hundred]} hundred ${tens[ten]}${lastDigit ? ' ' + ones[lastDigit] : ''}`;
    }
  }
};


