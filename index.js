sap.ui.define(['sap/m/Button'], function(Button) {
    "use strict";
    new Button( {
    text: "Create new Product",
    press: () => {
        console.log("Button pressed");
    }
}).placeAt("content");
});
