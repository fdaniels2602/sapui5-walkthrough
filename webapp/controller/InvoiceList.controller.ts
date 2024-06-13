import BaseController from "./BaseController";
import JSONModel from "sap/ui/model/json/JSONModel";

import formatter from "../model/formatter";

/**
 * @namespace ui5.walkthrough.controller
 */
export default class App extends BaseController {
    
    public formatter = formatter;
    
    onInit(): void {
  
        const viewModel = new JSONModel({
            currency: "EUR"
        });
        this.getView()?.setModel(viewModel, "view");        
    } 
}