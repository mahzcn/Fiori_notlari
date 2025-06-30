sap.ui.define([
    "sap/ui/core/UIComponent",
    "ui5/product/list/model/models"
], function (UIComponent, models) {
    "use strict";

    return UIComponent.extend("ui5.product.list.Component", {
        metadata: {
            interfaces: ["sap.ui.core.IAsyncContentCreation"],
            manifest: "json"
        },

        init: function () {
            // base component init
            UIComponent.prototype.init.apply(this, arguments);
        
            // set the input model
            this.setModel(models.createInputModel(), "input")
            
        }

    });
});
