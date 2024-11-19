sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox"
],
function (Controller, MessageBox) {
    "use strict";
    return Controller.extend("sap.btp.project1.controller.View1", {
        onInit: function () {
            this.i18n = this.getOwnerComponent().getModel("i18n").getResourceBundle();
        },

        onPress: function () {
            MessageBox.alert(this.i18n.getText("buttonMsg"));
        }
    });
});
