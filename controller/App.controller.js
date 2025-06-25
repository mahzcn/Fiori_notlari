sap.ui.define(["sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"

], function(Controller, MessageToast){
    "use strict";
    return Controller.extend
    { 'ui5.product.list.controoller.App' , {
        onPressCreateNewProduct: function() {
            MessageToast.show("Create New Product button pressed", {
                at : "top center",
            }
            )
    }
    }
    }
    });