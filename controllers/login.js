const User = require("../models/organization");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const loginValidation = require("../validations/loginValidation");

dotenv.config({ path: ".env" });
const loginUser = async (req,res) => {
    
    try {
        
        const { email, password } = req.body;
        const validation = loginValidation(req.body);

        if (validation && validation.error === true) {
            return res.send(validation.message);
        
        }
    
        const user = await User.findOne({ email: email });

        const matchPassword = await bcrypt.compare(password, user.password);

        if (matchPassword) {
          
            const token = jwt.sign(
                { id: user.empId ,role: user.role,email: user.email ,name: user.name },
                process.env.SECRET_KEY
           
            );

            user.token = token;
            const dataSave = await user.save();
            
            res.status(200).send({ "token": token });
        }
        res.status(400).send("Invalid Credentials");

    } catch (err) {
        res.send(err);
    }
};

module.exports = {
    loginUser
};
            