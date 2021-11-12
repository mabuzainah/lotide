const assertArraysEquals = function (arr1, arr2){
    if ((arr1 !== undefined) && (arr2 !== undefined)){
        eqArrays (arr1,arr2);
    } else {
        return undefined;
    }
}

const eqArrays = function (array1, array2){
    if (array1.length !== array2.length){
        return false;
    } else {
        array1.every((v, i) => v === array2[i])
    }
};

