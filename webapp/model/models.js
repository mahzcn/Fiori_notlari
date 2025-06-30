sap.ui.define(["sap/ui/model/json/JSONModel"], function(JSONModel) {
    return {
        createInputModel(){
            return new JSONModel({
                Name: "",
                Category: "",
                Price: "",
                SktDate: null,
                AktarimDate: null,
                
            })
        }
    }
})