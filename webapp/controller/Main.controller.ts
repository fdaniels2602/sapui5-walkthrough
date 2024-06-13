import MessageBox from "sap/m/MessageBox";
import BaseController from "./BaseController";
import JSONModel from "sap/ui/model/json/JSONModel";
import ResourceBundle from "sap/base/i18n/ResourceBundle";

/**
 * @namespace za.co.fuad.controller
 */
export default class Main extends BaseController {

	onInit(): void {
		// set data model on view
		const data = {
			recipient: {
				name: 'World'
			}
		};

		const dataModel = new JSONModel(data);
		this.getView()?.setModel(dataModel);

	}

	public sayHello(): void {
		// read message from the i18n model
		const recipient = (this.getView().getModel() as JSONModel)?.getProperty("/recipient/name");
		const resourceBundle = this.getResourceBundle() as ResourceBundle;
		const msg = resourceBundle.getText("helloMsg", [recipient]) || "no text defined";
		MessageBox.show(msg);
	}
}
