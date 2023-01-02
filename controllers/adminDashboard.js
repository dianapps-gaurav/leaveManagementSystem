const allLeaveRecord = require("../models/leaveCollection");

const adminDashboard = async (req,res) => {
    
    const allLeave = await allLeaveRecord.find({},{ "_id": 0, "empId": 1, "name": 1, "reason": 1, "from": 1, "to": 1,"leaveStatus": 1, "approvedBy": 1, "approvedAt": 1, "appliedAt": 1 }).sort({ "appliedAt": -1 });

    res.status(200).send({
        data: allLeave
    });
};

module.exports = { adminDashboard };