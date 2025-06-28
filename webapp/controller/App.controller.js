sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], function(Controller,MessageToast){
    "use strict";
    return Controller.extend('ui5.product.controller.App', {
        onPressCreateNewProduct() {

            const oBoundle = this.getOwnerComponent().getModel("i18n").getResourceBundle();

            MessageToast.show(oBoundle.getText("messageText",["Salatalık"]), {
                at: 'center center'
                
            })
        }
    })
})