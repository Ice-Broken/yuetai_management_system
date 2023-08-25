const express = require('express')
const app = express()
const router = express.Router();

const mysql = require('../mysql')

router.post('/read-bbuyer', (req, res) => {
    let sql = `select * from ${req.body.col} where bbuyer_name_ch='${req.body.id}';`
    mysql.query(sql, function (err, result) {
        res.json({
            res: result
        })
    });
})
module.exports = router;