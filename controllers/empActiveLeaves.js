const leaveCollection = require("../models/leaveCollection");

const empActiveLeaves = (req,res) => {
    const activeLeaves = leaveCollection.find({ $and: [{ leaveStatus: "pending" },{ role: "employee" }] }, { "name": 1, "reason": 1, "from": 1, "to": 1, "leaveStatus": 1 });

    res.json({
        output: activeLeaves
    });
};

module.exports = empActiveLeaves;