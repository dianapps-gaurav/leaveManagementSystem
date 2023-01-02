const leaveApplication = require("../models/leaveCollection");

const applyLeave = async (req,res) => {
    try {
        const data = new leaveApplication ({
            empId: req.user.id,
            name: req.user.name,
            role: req.user.role,
            reason: req.body.reason,
            from: new Date(req.body.from),
            to: new Date(req.body.to) ,
        });
        const dataToSave = await data.save();

        return res.status(200).send({
            message: "leave applied successfully"
        });
    
    } catch (error) {
        return res.status(400).send({
            message: error.message
        });
    }
};

module.exports = { applyLeave };