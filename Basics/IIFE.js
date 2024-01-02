//immediately invoked function call
// global scode ke possession ko hatane k liye parenthesis is used and hence function run on its own
(
    function add(){   // named iife as add is name
        console.log(3+4);
    }
)();
(
 () => {
        console.log(3-4);
    }
)(); // it will not run as compiler did not know where the prvious func ended so we put a semi colon there to mark terminated


(    //  unnamed iife
    (name)=> {
        console.log(name);
    }
)("manav")

