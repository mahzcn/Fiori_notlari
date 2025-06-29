sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/StandardListItem",
], function(Controller , StandardListItem) {
    "use strict";
    return Controller.extend('ui5.product.controller.App', {
        onPressCreateNewProduct() {

            // Get the product name from the input field
            const sProductNAme = this.getView().byId("idProductName").getValue();

            // Add new item to the list
            this.getView().byId("idProductList").addItem(
                new StandardListItem({
                    title: sProductNAme,
                    type: "Active",
                    press: "onPressProduct"
                })
            );
    },
    onPressDeleteProduct(oEvent) {
        // Get the selected item from the list
                const oItem = oEvent.getParameter("listItem");
        // If an item is selected, remove it from the list
        if (oSelectedItem) {
            this.getView().byId("idProductList").removeItem(oItem);
        } 
    }})
})