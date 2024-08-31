const RED = require("node-red");

const express = require("express");
const app = express();
const server = require("http").createServer(app);

const settings = {
    ui: { path: "dashboard" },
    httpAdminRoot: "/admin/",
    httpNodeRoot: "",
    userDir: "./.nodered/",
    flowFile: "flows.json",
    credentialFile: "flows_cred.json",
    functionGlobalContext: {}
};

RED.init(server, settings);

app.use(settings.httpAdminRoot, RED.httpAdmin);
app.use(settings.httpNodeRoot, RED.httpNode);
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

server.listen(process.env.PORT || 3000, () => {
    console.log("Node-RED is running on port 3000");
});

RED.start();