
const leaveCollection = require("../models/leaveCollection");
const profileDashboard = async (req,res) => {
    try {
        const data = await leaveCollection.find({ empId: req.user.id },{ "_id": 0, "appliedAt": 1, "from": 1, "to": 1, "reason": 1,"leaveStatus": 1, "approvedBy": 1, "approvedAt": 1 });

        return res.status(200).send({
            message: data
        });
    } catch (error) {
        return res.status(400).send({
            message: error.message
        });
    }
};

module.exports = { profileDashboard };