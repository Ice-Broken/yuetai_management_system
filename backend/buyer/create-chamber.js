const express = require('express')
const app = express()
const router = express.Router();

const mysql = require('../mysql')

router.post('/create-chamber', (req, res) => {
    let sql = `INSERT INTO prod_chamber (chamber_name_ch, chamber_name_en, contact_name, 
        position, address, tel, fax, email, remark, time)
        VALUES ('${req.body.chamber_name_ch}', 
                '${req.body.chamber_name_en}', 
                '${req.body.contact_name}', 
                '${req.body.position}', 
                '${req.body.address}',
                '${req.body.tel}', 
                '${req.body.fax}',
                '${req.body.email}',
                '${req.body.remark}',
                NOW());`               
    mysql.query(sql, function (err, result) {
        res.json({
            res: typeof result == "object",
        })
    })
})
module.exports = router;
