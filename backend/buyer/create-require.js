const express = require('express')
const app = express()
const router = express.Router();

const mysql = require('../mysql')

router.post('/create-require', (req, res) => {
    let sql = `INSERT INTO prod_requirement ( id, password, name, sex, tel, subject, email, time,
        company_name_ch, company_name_en, contact_name, prodcts, requirement, amount, link, date)
        VALUES ('${req.body.id}', 
                '', 
                '${req.body.name}', 
                '${req.body.sex}', 
                '${req.body.tel}', 
                '${req.body.subject}', 
                '${req.body.email}',
                NOW(),
                '${req.body.company_name_ch}',
                '${req.body.company_name_en}',
                '${req.body.contact_name}',
                '${req.body.prodcts}',
                '${req.body.require}',
                '${req.body.amount}',
                '${req.body.link}',
                '${req.body.date}');`               
    mysql.query(sql, function (err, result) {
        res.json({
            res: typeof result == "object",
            id: req.body.id
        })
    })
})
module.exports = router;
