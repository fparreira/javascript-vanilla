// BUDGET CONTROLLER
var budgetController = (function(){




})();


var Expanse = function(id, description, value){
    this.id = id;
    this.description = description;
    this.value = value;
};

Expanse.prototype.escreve = function(){
    console.log('test function');
    
}



// UI CONTROLLER
var UIController = (function(){

    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn'
    };

    return {
        getinput: function() {
            return {
                type: document.querySelector(DOMstrings.inputType).value,
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputValue).value
            };
        },

        getDOMstrings: function(){
            return DOMstrings;
        }
    }

})();

// GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl){

    var setupEventListeners = function(){
        var DOM = UICtrl.getDOMstrings();

        // click button
        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

        // press enter key
        document.addEventListener('keypress', function(e){
            if(e.keyCode === 13 || e.which === 13){
                ctrlAddItem();
            }
        })
    };



    var ctrlAddItem = function(){

        // Get the field input data
        var input = UICtrl.getinput();

        // add item to budget controller

        // add item to ui 

        // calculate the budget

        // display the budget to ui

        
    }

    return {
        init: function(){
            console.log('Application has started!!');
            setupEventListeners();
        }
    }



})(budgetController, UIController);


controller.init();
