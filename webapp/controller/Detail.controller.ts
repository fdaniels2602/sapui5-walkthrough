import { Route$PatternMatchedEvent } from "sap/ui/core/routing/Route";
import BaseController from "./BaseController";

export default class Detail extends BaseController {

    onInit(): void {
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