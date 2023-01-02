const mongoose = require("mongoose");

const leaveSchema = new mongoose.Schema({
    empId: {
        type: String
    },
    role: {
        type: String,
        enum: [ "hr", "employee" ]
    },
    name: {
        type: String
    },
    reason: {
        type: String
    },
    from: {
        type: Date
    },
    to: {
        type: Date
    },
    leaveStatus: {
        type: String,
        enum: [ "pending", "approved", "rejected" ],
        default: "pending"
    },
    approvedBy: {
        type: String,
        
    },
    approvedAt: {
        type: Date
    }
    
});

leaveSchema.set("timestamps",{
    createdAt: "appliedAt",
    
});

const leaveModel = mongoose.model("leave", leaveSchema);

module.exports = leaveModel;

