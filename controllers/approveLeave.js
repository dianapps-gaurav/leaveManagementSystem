const leaveCollection = require("../models/leaveCollection");
const { orgRecord } = require("../models/organization");

const approveLeave = async (req,res) => {

    let dataToSave;
    let updatedOrg;
    
    if (req.user.role === "admin" && req.params.role === "hr") {
        try {
            const status = req.params.status;
            
            const user = await leaveCollection.findOne({ empId: req.params.empId });
            const date1 = user.from;
            const date2 = user.to;
            const diffTime = Math.abs(date2 - date1);
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
            const availDays = await orgRecord.findOne({ empId: req.params.empId });
           
            if (diffDays <= availDays.availHolidays) {
                user.leaveStatus = status;
                user.approvedBy = req.user.name;
                user.approvedAt = new Date();
                availDays.availHolidays -= diffDays;

                updatedOrg = await availDays.save();

                dataToSave = await user.save();
                return res.status(200).send({
                    message: "updated successfully"
                });
            } else {
                return res.status(400).send("insufficient leaves available");
            }
            
        } catch (error) {
            return res.status(400).send(error.message);
        }
        
    } else if (req.user.role === "hr" && req.params.role === "employee") {
        try {
            const status = req.params.status;
            
            const user = await leaveCollection.findOne({ empId: req.params.empId });
            const date1 = user.from;
            const date2 = user.to;
            const diffTime = Math.abs(date2 - date1);
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
            const availDays = await orgRecord.findOne({ empId: req.params.empId });

            if (diffDays <= availDays.availHolidays) {
                user.leaveStatus = status;
                user.approvedBy = req.user.name;
                user.approvedAt = new Date();
                availDays.availHolidays -= diffDays;

                updatedOrg = await availDays.save();

                dataToSave = await user.save();
                return res.status(200).send({
                    message: "updated successfully"
                });
            } else {
                return res.status(400).send("insufficient leaves available");
            }
            
        } catch (error) {
            return res.status(400).send(error.message);
        }
        
    }
};

module.exports = { approveLeave };