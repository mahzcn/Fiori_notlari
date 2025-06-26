sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], function(Controller,MessageToast){
    "use strict";
    return Controller.extend('ui5.product.controller.App', {
        onPressCreateNewProduct: function() {
            MessageToast.show('Create New Product button pressed', {
                at: 'center top'
            })
        }
    })
})