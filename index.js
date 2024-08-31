const RED = require("node-red");

const express = require("express");
const app = express();
const server = require("http").createServer(app);

const settings = {
    httpAdminRoot: "",
    httpNodeRoot: "/api/",
    userDir: "./.nodered/",
    flowFile: "flows.json",
    credentialFile: "flows_cred.json",
    functionGlobalContext: {}
};

RED.init(server, settings);

app.use(settings.httpAdminRoot, RED.httpAdmin);
app.use(settings.httpNodeRoot, RED.httpNode);

server.listen(process.env.PORT || 3000, () => {
    console.log("Node-RED is running on port 3000");
});

RED.start();