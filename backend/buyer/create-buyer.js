const express = require('express')
const app = express()
const router = express.Router();

const mysql = require('../mysql')

router.post('/create-buyer', (req, res) => {
    let sql = `INSERT INTO prod_buyer (company_name_ch, company_name_en, subject, source,
        contact_name, position, tel, email, name, remark)
        VALUES ('${req.body.company_name_ch}', 
                '${req.body.company_name_en}', 
                '${req.body.subject}',
                '${req.body.source}',
                '${req.body.contact_name}',
                '${req.body.position}',
                '${req.body.tel}',
                '${req.body.email}',
                '${req.body.name}',
                '${req.body.remark}');`            
    mysql.query(sql, function (err, result) {
        res.json({
            res: typeof result == "object",
            id: req.body.id
        })
    })
})
module.exports = router;