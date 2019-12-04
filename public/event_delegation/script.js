var controller = (function(){

    console.log('script started');

    
    var deleteContainer = function(e){
        
        console.log(e.target);
        
    }


    document.querySelector(".container").addEventListener('click', deleteContainer);




})();