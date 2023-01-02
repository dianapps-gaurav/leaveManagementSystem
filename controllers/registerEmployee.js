const userModel = require("../models/organization");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config({ path: ".env" });
const insertData = async (req,res) => {
    try {
        
        const hashPassword = await bcrypt.hash(req.body.password,saltRounds);
        const data = new userModel({
    
            empId: req.body.empId,
            name: req.body.name,
            email: req.body.email,
            contact: req.body.contact,
            address: req.body.address,
            role: req.body.role,
            addedBy: req.user.name, 
        
            birthDate: req.body.birthDate,
            password: hashPassword,
        
        });

        if (req.body.role === "admin") {
            data.roleCode = "1";
        } else if (req.body.role === "hr") {
            data.roleCode = "2";
        } else if (req.body.role === "employee") {
            data.roleCode = "3";
        }

        const token = jwt.sign({ id: req.body.emp_id },process.env.SECRET_KEY);

        data.token = token;
    
        const dataToSave = await data.save();

        return res.status(200).send({
            message: "user added successfully "
        });
    } catch (error) {
        return res.status(400).send({ message: error.message });
    }
};

module.exports = { insertData };

