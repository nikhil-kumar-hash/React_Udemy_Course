// basic difference includes Scope of variables

// var is function scope i.e. within the function
// let is block scoped i.e within the {} braces
// const is similar to let but value can be only assigned once

function fib() {
    var t = 12;

    function rep () {
        console.log(t);
    }
    rep();
    console.log(t);
}

fib();
