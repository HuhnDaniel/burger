const router = require(`express`).Router();
const burger = require(`../models/burger`);

router.get(`/`, (req, res) => {
    let hbsObj;
    burger.selectAll(function(data) {
        hbsObj = { burgers: data };
        res.render(`index`, hbsObj);
    });
});

router.post(`/api/burgers`, (req, res) => {
    burger.insertOne(`burger_name`, req.body.burger_name, (result) => {
        res.json({ id: result.insertID });
    });
});

module.exports = router;