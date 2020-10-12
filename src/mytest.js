const toReadable = (number) => {
    let singleDigits = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
    let hundredDigits = ['one hundred','two hundred', 'three hundred', 'four hundred', 'five hundred', 'six hundred', 'seven hundred', 'eight hundred', 'nine hundred'];
    let decimalDigits = ['twenty','thirty ','forty', 'fifty', 'sixty', 'seventy','eighty','ninety'];
    let teenDigits = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let result = '';
    let getArrayFromNumber = number.toString().split('');
    switch (getArrayFromNumber.length) {
        case 3 :
            if (getArrayFromNumber[1] === '1') {
                result =`${hundredDigits[(getArrayFromNumber[0]) - 1]} ${teenDigits[(getArrayFromNumber[2]) - 1]}`;
                console.log(result.split(' ').filter(it => it !== 'undefined').join(' '));
                return result.split(' ').filter(it => it !== 'undefined').join(' ');
                break
            }
            result =`${hundredDigits[(getArrayFromNumber[0]) - 1]} ${decimalDigits[(getArrayFromNumber[1]) - 2]} ${singleDigits[(getArrayFromNumber[2]) - 1]}`
            console.log(result.split(' ').filter(it => it !== 'undefined').join(' '));
            return result.split('').filter(it => it !== undefined).join('');
            break
        case 2 :
            if (getArrayFromNumber[0] === '1') {
                result =`${teenDigits[(getArrayFromNumber[1]) - 1]}`;
                console.log(result.split(' ').filter(it => it !== 'undefined').join(' '));
                return result.split(' ').filter(it => it !== 'undefined').join(' ');
                break
            }
            result =`${decimalDigits[(getArrayFromNumber[0]) - 2]} ${singleDigits[(getArrayFromNumber[0]) - 2]}`
            console.log(result.split(' ').filter(it => it !== 'undefined').join(' '));
            return result.split(' ').filter(it => it !== 'undefined').join(' ');
            break
        default:
            return
            break
    }
}

toReadable(711);
