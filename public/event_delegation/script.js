var controller = (function(){

    console.log('script started');

    
    var deleteContainer = function(e){
        
        // console.log(e.target);
        // console.log(e.target.parentNode.parentNode.parentNode.id);
        
        var areaID;
        areaID = e.target.parentNode.parentNode.parentNode.id;

        if(areaID){
            console.log(areaID);
        }
        
        
    }


    document.querySelector(".container").addEventListener('click', deleteContainer);




})();