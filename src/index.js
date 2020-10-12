module.exports = function toReadable (number) {
    let singleDigits = ['one','two','three','four','five','six','seven','eight','nine','ten'];
    let hundredDigits = ['one hundred','two hundred', 'three hundred', 'four hundred', 'five hundred', 'six hundred', 'seven hundred', 'eight hundred', 'nine hundred'];
    let decimalDigits = ['twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
    let teenDigits = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let result = '';
    let getArrayFromNumber = number.toString().split('');
    switch (getArrayFromNumber.length) {
        case 3 :
            if (getArrayFromNumber[1] === '1') {
                if (getArrayFromNumber[2] === '0') {

                    return `${hundredDigits[(getArrayFromNumber[0]) - 1]} ${singleDigits[singleDigits.length-1]}`;
                    break
                }
                result =`${hundredDigits[(getArrayFromNumber[0]) - 1]} ${teenDigits[(getArrayFromNumber[2]) - 1]}`;

                return result.split(' ').filter(it => it !== 'undefined').join(' ');
                break
            }
            result =`${hundredDigits[(getArrayFromNumber[0]) - 1]} ${decimalDigits[(getArrayFromNumber[1]) - 2]} ${singleDigits[(getArrayFromNumber[2]) - 1]}`
            return result.split(' ').filter(it => it !== 'undefined').join(' ');
            break
        case 2 :
            if (getArrayFromNumber[0] === '1') {
                if (getArrayFromNumber[1] === '0') {
                    return `${singleDigits[singleDigits.length-1]}`;
                    break
                }
                result =`${teenDigits[(getArrayFromNumber[1]) - 1]}`;
                return result.split(' ').filter(it => it !== 'undefined').join(' ');
                break
            }
            result =`${decimalDigits[(getArrayFromNumber[0]) - 2]} ${singleDigits[(getArrayFromNumber[1]) - 1]}`

            return result.split(' ').filter(it => it !== 'undefined').join(' ');
            break
        case 1 :
            if (getArrayFromNumber[0] === '0') {
                return 'zero'
            }

            return `${singleDigits[(getArrayFromNumber[0]) - 1]}`;
            break
        default:

            return
            break
    }
}
