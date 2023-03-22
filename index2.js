let x;

if(typeof x === "number") {
    console.log('х - это число')
} else if (typeof x === 'string') {
    console.log('х - это строка')
} else if (typeof x === 'boolean') {
    console.log('х - это логический тип') 
} else {
    console.log('Тип х не определен')
}
