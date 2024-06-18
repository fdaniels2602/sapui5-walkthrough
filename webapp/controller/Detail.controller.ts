import { Route$PatternMatchedEvent } from "sap/ui/core/routing/Route";
import BaseController from "./BaseController";
import JSONModel from "sap/ui/model/json/JSONModel";

export default class Detail extends BaseController {

    onInit(): void {
        const viewModel = new JSONModel({
            currency: "EUR"
        });
        this.getView().setModel(viewModel, "view");
        
        const router = this.getOwnerComponent().getRouter();
        router.getRoute("detail").attachPatternMatched(this.onObjectMatched, this);

    }

    onObjectMatched(event: Route$PatternMatchedEvent): void {
        this.getView().bindElement({
            path: "/" + window.decodeURIComponent( (event.getParameter("arguments")).invoicePath),
            model: "invoice"
        })
    }
}