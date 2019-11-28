/////  Module Pattern


// budgetController
var budgetController = (function(){
    var x = 23;
    var add = function(a){
        return x+a;
    }

    return {
        publicTest: function(b){
            console.log(add(b));            
        }
    }
})();


// controller
var controller = (function(){

    document.addEventListener('keypress', function(e){
        // console.log(e);

        if(e.keyCode === 13 || e.which === 13){
            console.log('ENTER was pressed.');            
        }

    });

})();