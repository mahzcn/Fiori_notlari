
sap.ui.define(["sap/ui/core/library"], function(coreLibrary) {
    "use strict";

    const ValueState = coreLibrary.ValueState;

    return{
                formatAvailabilityText: function (sValue) {
            if (!sValue || isNaN(new Date(sValue).getTime())) {
                return "-";
            }
            const oBundle = this.getOwnerComponent().getModel("i18n").getResourceBundle()

            return new Date(sValue) <= new Date() ? oBundle.getText("unavailable") : oBundle.getText("available")
        },
                formatAvailabilityState: function (sValue) {
            if (!sValue || isNaN(new Date(sValue).getTime())) {
                return ValueState.None;
            }

            return new Date(sValue) <= new Date() ? ValueState.Error : ValueState.Success;
        }
    }
})



