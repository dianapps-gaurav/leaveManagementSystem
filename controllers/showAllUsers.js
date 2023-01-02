const { orgRecord } = require("../models/organization");

const showAllUsers = async (req,res) => {
    try {
        const data = await orgRecord.find({},{ "empId": 1, "name": 1 , "_id": 0, "role": 1, "email": 1, "contact": 1 }).sort({ "roleCode": 0 });

        return res.status(200).send(data);
    } catch (error) {
        return res.status(400).send(error.message);
    }
};

module.exports = { showAllUsers };