// module.exports =
function toReadable (number) {
    const numberToString = number.toString();
    let result;

    if (numberToString === '1') {
      result = numberToString.replace('1', 'one')
    } else if (numberToString === '2') {
      result = numberToString.replace('2', 'two')
    } else {
      result = 'oops'
    }

    return result;
}

console.log(toReadable(1));
