function getSupplier(code){
    return code.substring(0, code.indexOf(':'));
}

function getProductNumber(code){
    let indexStart = code.indexOf(':') +1;
    let indexEnd = code.indexOf('-');
    return code.substring(indexStart, indexEnd);
}

function getSize(code){
    let indexStart = code.indexOf('-') + 1;
    return code.substring(indexStart)
}
console.log(getSupplier('ACME:123-L'));
console.log(getProductNumber('ACME:123-L')); 
console.log(getSize('ACME:123-L')); 


console.log(getSupplier('DI:12345-M'));
console.log(getProductNumber('DI:12345-M'));
console.log(getSize('DI:12345-M')); 

console.log(getSupplier('ACE:1-12')); 
console.log(getProductNumber('ACE:1-12')); 
console.log(getSize('ACE:1-12')); 