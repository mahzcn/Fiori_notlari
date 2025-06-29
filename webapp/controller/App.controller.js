sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/ObjectListItem",
    "sap/m/ObjectAttribute",
    "sap/m/ObjectStatus",
    "sap/ui/core/Fragment"
], function (Controller, ObjectListItem, ObjectAttribute, ObjectStatus, Fragment) {
    "use strict";
    return Controller.extend('ui5.product.controller.App', {
        onPressCreateNewProduct() {

            // Get the product name from the input field
            const sProductNAme = this.getView().byId("idProductName").getValue();
            const oCatagory = this.getView().byId("idCatogary").getSelectedItem();
            const sPrice = this.getView().byId("idPrice").getValue();
            const sSktDate = this.getView().byId("idSktDate").getDateValue();
            const sAktarimDate = this.getView().byId("idAktarimDate").getDateValue();
            // Add new item to the list
            this.getView().byId("idProductList").addItem(
                new ObjectListItem({
                    title: sProductNAme,
                    number: sPrice,
                    numberUnit: "TRY",
                    attributes: [
                        new ObjectAttribute({
                            title: "Katagori",
                            text: oCatagory.getText()
                        }),
                        new ObjectAttribute({
                            title: "SKT",
                            text: sSktDate ? sSktDate.toLocaleDateString() : ""
                        })
                    ],
                    firstStatus: new ObjectStatus({
                        text: this._getAvailabilityText(sAktarimDate),
                        state: this._getAvailabilityState(sAktarimDate)
                    })
                })
            );
            this._oCreateProductDialog.close()
        },
        onPressDeleteProduct(oEvent) {

            // Get the selected item from the list
            const oItem = oEvent.getParameter("listItem");
            // If an item is selected, remove it from the list
            if (oItem) {
                this.getView().byId("idProductList").removeItem(oItem);
            }
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
        }
    })
})