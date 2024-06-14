import MockServer from "sap/ui/core/util/MockServer";
import UriParameters from "sap/base/util/UriParameters";

class MyMockSever extends MockServer {
    
}

export default {

    init: function () {
        // create
        const mockServer = new MyMockSever({
            rootUri: sap.ui.require.toUrl("za/co/fuad/V2/Northwind/Northwind.svc/")
        });

        const uriParameters = new UriParameters(window.location.href);

        // configure mock server with a delay
        MockServer.config({
            autoRespond: true,
            autoRespondAfter: parseInt(uriParameters.get("serverDelay") || "500")
        });

        // simulate
        const path = sap.ui.require.toUrl("za/co/fuad/localService");
        mockServer.simulate(path + "/metadata.xml", path + "/mockdata");

        // start
        mockServer.start();
    }
};