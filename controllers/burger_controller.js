const router = require(`express`).Router();
const burger = require(`../models/burger`);

router.get("/", (req, res) => {
    let hbsObj;
    burger.selectAll(function(data) {
        hbsObj = { burgers: data };
    });
    console.log(hbsObj);
    res.render("index", hbsObj);
});

module.exports = router;