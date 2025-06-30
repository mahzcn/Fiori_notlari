sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/ObjectListItem",
    "sap/m/ObjectAttribute",
    "sap/m/ObjectStatus",
    "sap/ui/core/Fragment",
    "ui5/product/list/model/models"
], function (Controller, ObjectListItem, ObjectAttribute, ObjectStatus,  Fragment ,models) {
    "use strict";
    return Controller.extend('ui5.product.controller.App', {
        onPressCreateNewProduct() {
            const oData = this.getView().getModel("input").getData()

            //  Add new item to the list
            const oProductModel = this.getView().getModel("product")
            const aItems = oProductModel.getProperty("/items")

            aItems.push(oData)
            oProductModel.setProperty("/items", aItems)


            this._oCreateProductDialog.close()
        },
        onPressDeleteProduct(oEvent) {
            const oItem = oEvent.getParameter("listItem");

            // Get the selected item from the list
            const oModel = this.getView().getModel("product")
            const iIndex = oItem.getBindingContext("product").getPath().split("/").pop()
            
            oModel.getData().items.splice(iIndex, 1)
            oModel.refresh()
            console.log(iIndex)
        }, onPressAddNewProduct() {
            if (!this._oCreateProductDialog) {
            Fragment.load({
                id: this.getView().getId(),
                name: "ui5.product.list.view.fragments.CreateProduct",
                controller: this
            }).then(oDialog => {
                this._oCreateProductDialog = oDialog
                this.getView().addDependent(oDialog); 
                oDialog.open();
            });
            }else{
                this._oCreateProductDialog.open()
            }
        },
        onPressCancelNewProduct() {
            this._oCreateProductDialog.close()
        }
        ,
        _getAvailabilityText(oDate) {
            return oDate > new Date() ? "Taze" : "Bozuk";
        },
        _getAvailabilityState(oDate) {
            return oDate > new Date() ? "Success" : "Error";
        },
        onAfterCloseDialog() {
            this.getOwnerComponent().setModel(models.createInputModel(), "input")
        }
    })
})