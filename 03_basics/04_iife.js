// Immediately Invoked Function Expressions (IIFE)

// prevent from global variable is polluted and immediately execute function
(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')