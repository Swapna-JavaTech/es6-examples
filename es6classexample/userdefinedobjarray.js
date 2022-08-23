var products = [
    {productId:123,productName:'Pen',productPrice:45},
    {productId:124,productName:'Pencil',productPrice:25},
    {productId:125,productName:'Eraser',productPrice:15}
    ,{productId:125,productName:'Sharpener',productPrice:15}
];

var fileteredProducts = products.filter(
    function(product){
        if(product.productPrice > 15)
        return product
    });

console.log(fileteredProducts);

var product = products.find(
    function(product){
        if(product.productPrice === 15)
        return product
    }   
);


console.log(product);

var isLessThan45OrNot = products.every(
    function(product){
        if(product.productPrice < 45)
        return product
    }  
);

console.log(isLessThan45OrNot);

var isSomeLessThan45OrNot = products.some(
    function(product){
        if(product.productPrice < 45)
        return product
    }  
);

console.log(isSomeLessThan45OrNot);

var totalValueOfProducts =
products.reduce(function(totalPrice ,product){
   return totalPrice += product.productPrice;
    //return 
},0);

console.log(totalValueOfProducts);