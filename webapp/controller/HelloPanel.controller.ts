import BaseController from "./BaseController";
import MessageToast from "sap/m/MessageToast";
import JSONModel from "sap/ui/model/json/JSONModel";
import ResourceModel from "sap/ui/model/resource/ResourceModel";
import ResourceBundle from "sap/base/i18n/ResourceBundle";

/**
 * @namespace ui5.walkthrough.controller
 */
export default class HelloPanel extends BaseController {

    onShowHello(): void {
        // read msg from i18n model
        // functions with generic return values require casting 
        const resourceBundle = <ResourceBundle> (<ResourceModel> this.getView()?.getModel("i18n"))?.getResourceBundle();
        const recipient = (<JSONModel> this.getView()?.getModel())?.getProperty("/recipient/name") as string;
        const msg = resourceBundle.getText("helloMsg", [recipient]) || "no text defined";
        // show message
        MessageToast.show(msg);
    }

}