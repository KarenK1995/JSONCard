require('dotenv').config();
require("./instrument.js");
const Sentry = require("@sentry/node");
const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const apiRouter = require("./router/apiRouter.js");
// const connectMongo = require("./mongoDB/connect");
// Note: Agora bot cannot run in Node.js - use agora/bot-runner.html in a browser instead

const app = express();
const PORT = process.env.NODE_ENV === "production"
  ? process.env.PORT_PRODUCTION || 3000
  : process.env.PORT_DEVELOPMENT || 8000;


app.use(cors());

app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
    limits: { fileSize: 50 * 1024 * 1024 },
  })
);

app.use(
  bodyParser.json({ limit: "50mb", type: "application/json", extended: true })
);

app.use(
  bodyParser.urlencoded({
    limit: "50mb",
    extended: true,
  })
);

app.use("/api", apiRouter);

// app.use(express.static(path.join(__dirname, "./client/build")));

const generalAppsDir = path.join(__dirname, "static", "general-apps");
app.use(express.static(generalAppsDir));
app.use(express.static(path.join(__dirname, "static")));

app.use('/admin', express.static(path.join(__dirname, './client/build')));

app.get("/", (req, res) => {
  res.sendFile(path.join(generalAppsDir, "index.html"));
})

const lingoDirectory = path.join(__dirname, "Lingo");
const comingSoonPage = path.join(lingoDirectory, "lesson-coming-soon.html");
const grammarBrowserPage = path.join(lingoDirectory, "grammar-browser.html");

app.use("/lingo", express.static(lingoDirectory));

app.get(["/grammer", "/grammar"], (req, res) => {
  res.sendFile(grammarBrowserPage);
});

app.get("/lingo/:lessonId", (req, res) => {
  const { lessonId } = req.params;
  const normalizedId = String(lessonId || "")
    .trim()
    .toUpperCase();

  const candidatePath = path.join(lingoDirectory, `${normalizedId}.html`);
  if (fs.existsSync(candidatePath)) {
    return res.sendFile(candidatePath);
  }

  return res.sendFile(comingSoonPage);
});

app.get("/privacy-policy", (req, res) => {
  res.sendFile(path.join(__dirname, "static", "privacy-policy.html"));
})

app.get("/debug-sentry", function mainHandler(req, res) {
  throw new Error("My first Sentry error!");
});


if (process.env.NODE_ENV === 'production') {
  Sentry.setupExpressErrorHandler(app);
  // Optional fallthrough error handler
  app.use(function onError(err, req, res, next) {
    // The error id is attached to `res.sentry` to be returned
    // and optionally displayed to the user for support.
    res.statusCode = 500;
    res.end(res.sentry + "\n");
  }); 
}

app.listen(PORT, () => {
  // connectMongo();
  console.log(`Example app listening on port ${PORT}`);
  // console.log("http:/192.168.1.108:3000");
});
