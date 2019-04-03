import * as express from "express";

const router = express();

router.get("/", (req, res) => {
    res.send("ciao");
});

module.exports = router;
