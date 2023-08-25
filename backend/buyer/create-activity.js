const express = require('express')
const app = express()
const router = express.Router();

const mysql = require('../mysql')

router.post('/create-activity', (req, res) => {
    let sql = `INSERT INTO prod_activity ( id, name, head_name, sex, company_name_ch, supply_company_name,
        contact_method, prodcts, time, dtm)
        VALUES ('${req.body.id}', 
                '${req.body.name}', 
                '${req.body.head_name}',
                '${req.body.sex}',
                '${req.body.company_name_ch}',
                '${req.body.supply_company_name}',
                '${req.body.contact_method}',
                '${req.body.prodcts}',
                NOW(),
                '${req.body.dtm}');`            
    mysql.query(sql, function (err, result) {
        res.json({
            res: typeof result == "object",
            id: req.body.id
        })
    })
})
module.exports = router;