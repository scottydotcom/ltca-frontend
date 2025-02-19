// function getSupplierCode(partcode) {
//   const positionOfColon = partcode.indexOf(":");
//   return partcode.substring(0, positionOfColon);
// }

// const partCode1 = "ACME:123-L";
// const partCode2 = "DI:12345-M";
// const partCode3 = "ACE:1-12";

// console.log(getSupplierCode(partCode1));
// console.log(getSupplierCode(partCode2));
// console.log(getSupplierCode(partCode3));

// function getProductNumber(partcode) {
//   const positionOfColon = partcode.indexOf(":");
//   const positionOfHyphen = partcode.indexOf("-");
//   return partcode.substring(positionOfColon + 1, positionOfHyphen);
// }
// console.log(getProductNumber(partCode1));
// console.log(getProductNumber(partCode2));
// console.log(getProductNumber(partCode3));

// function getSize(partCode) {
//   const positionOfHyphen = partCode.indexOf("-");
//   return partCode.substring(positionOfHyphen + 1);
// }
// console.log(getSize(partCode1));
// console.log(getSize(partCode2));
// console.log(getSize(partCode3));

// !using for loop
// function parsePartCode(partCode) {
//     const [supplierCode, productNumberSize] = partCode.split(":");
//     const [productNumber, size] = productNumberSize.split("-");
//     return { supplierCode, productNumber, size };
//   }
  
//   const partCodes = ["ACME:123-L", "DI:12345-M", "ACE:1-12"];
  
//   for (let i = 0; i < partCodes.length; i++) {
//     const partCode = partCodes[i];
//     const { supplierCode, productNumber, size } = parsePartCode(partCode);
//     console.log(
//       `Supplier: ${supplierCode},
//        Product Number: ${productNumber},
//        Size: ${size}`);
//   }
  
// !using forEach
function parsePartCode(partCode) {
    const [supplierCode, productNumberSize] = partCode.split(":");
    const [productNumber, size] = productNumberSize.split("-");
    return { supplierCode, productNumber, size };
  }
  const partCodes = ["ACME:123-L", "DI:12345-M", "ACE:1-12"];

//   partCodes.forEach(partCode => {
//     const { supplierCode, productNumber, size } = parsePartCode(partCode);
//     console.log(`Supplier: ${supplierCode}, Product Number: ${productNumber}, Size: ${size}`);
//   });
// function printPartCode(partCode, index) {
    function printPartCode(partCode) {
    const { supplierCode, productNumber, size } = parsePartCode(partCode);
    console.log(`Supplier: ${supplierCode}, Product Number: ${productNumber}, Size: ${size}`);
}
  partCodes.forEach(printPartCode);

// !using for (..of..)
// function parsePartCode(partCode) {
//     const [supplierCode, productNumberSize] = partCode.split(":");
//     const [productNumber, size] = productNumberSize.split("-");
//     return { supplierCode, productNumber, size };
//   }

//   const partCodes = ["ACME:123-L", "DI:12345-M", "ACE:1-12" ];

//   for (const partCode of partCodes) {
//     const { supplierCode, productNumber, size } = parsePartCode(partCode);
//     console.log(`Supplier: ${supplierCode}, Product Number: ${productNumber}, Size: ${size}`);
//   }