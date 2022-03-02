const db = require("../db");

module.exports = {
    displayAllData: (req,res) => {
        let sql = "select * from member";
        db.query(sql, (err,result) => {
            if(err){
                throw err;
            }else{
                res.json({
                    data: result
                })
            }
        })
    },
    displayData: (req,res) => {
        let id = req.params.id;
        let sql = "select * from member where id_member = ?";
        db.query(sql, id, (err,result) => {
            if(err){
                throw err;
            }else{
                if(result[0]){
                    res.json({
                        data: result[0]
                    })
                }else{
                    res.json({
                        message: "Data not found."
                    })
                }
            }
        })        
    },
    add: (req,res) => {
        let data = {
            nama_member: req.body.nama_member,
            alamat_member: req.body.alamat_member,
            jenis_kelamin: req.body.jenis_kelamin,
            telp_member: req.body.telp_member,
            no_ktp: req.body.no_ktp
        }
        let sql = "insert into member set ?";
        db.query(sql,data, (err,result) => {
            if(err){
                throw err;
            }else{
                res.json({
                    message: "Success added pelanggan.",
                    data
                })
            }
        })        
    },
    delete: (req,res) => {
        let id_member = req.body.id_member;
        let sql = "delete from member where id_member = ?";
        db.query(sql,id_member, (err,result) => {
            if(err){
                throw err;
            }else{
                res.json({
                    message: `Successfully delete pelanggan where id = ${id_member}.`
                })
            }
        })        
    },
    update: (req,res) => {
        let id_member = req.body.id_member;
        let data = {
            nama_member: req.body.nama_member,
            alamat_member: req.body.alamat_member,
            jenis_kelamin: req.body.jenis_kelamin,
            telp_member: req.body.telp_member,
            no_ktp: req.body.no_ktp
        }
        let sql = "update member set ? where id_member = ?";
        db.query(sql,[data, id_member], (err,result) => {
            if(err){
                throw err;
            }else{
                res.json({
                    message: `Successfully update pelanggan where id = ${id_member}.`,
                    data
                })
            }
        })        
    }
}