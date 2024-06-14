import BaseController from "./BaseController";
import JSONModel from "sap/ui/model/json/JSONModel";
import { SearchField$SearchEvent } from "sap/m/SearchField";
import Filter from "sap/ui/model/Filter";
import FilterOperator from "sap/ui/model/FilterOperator";
import ListBinding from "sap/ui/model/ListBinding";
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

    onFilterInvoices(evt: SearchField$SearchEvent): void {
        // build filter array
        const filter = [];
        const query = evt.getParameter("query");

        // if query is captured then add as a filter
        if (query) {
            filter.push(new Filter("ProductName", FilterOperator.Contains, query));
        }

        // filter binding
        const list = this.byId("InvoiceList");
        const binding = list?.getBinding("items") as ListBinding;
        binding ?.filter(filter);
    }
}