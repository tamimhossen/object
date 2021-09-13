const name = 'kuddus';

function add( num1, num2 ) {
    result = num1 + num2;
    console.log('name inside ', name);
    function double(num) {
        return num * 2;
    }

    const total = double(result);
    return total;
}

// console.log('name outside', name);
// console.log('result Outside ', result);

const sum = add(13, 21);
console.log(sum);
console.log('result Outside ', result);
