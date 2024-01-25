"use strict"

function isEnoughCapacity(products, containerSize) {
    let totalNumberProducts = 0;
    let number =  Object.values(products)
    for (const product of number) {
        totalNumberProducts += product;
    }
    if (totalNumberProducts <= containerSize) {
            return true;
    }
    return false;
}

