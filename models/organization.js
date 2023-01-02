const mongoose = require("mongoose");

const organizationSchema = new mongoose.Schema ({
    empId: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true
        
    },
    email: {
        type: String,
        required: true
    },
    contact: {
        type: String,
        required: true,
        min: 10,
        max: 10
    },
    address: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: [ "admin","hr","employee" ],
        required: true
    },
    roleCode: {
        type: String 
    },
    availHolidays: {
        type: Number,
        default: 2
    },
    addedBy: {
        type: String,
        required: true
    },
    
    modifiedBy: {
        type: String,
    },
   
    employeeStatus: {
        type: String,
        enum: [ "active","inactive" ],
        default: "active"
    },
    birthDate: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    token: { type: String }
});

organizationSchema.set("timestamps",{
    createdAt: "addedAt",
    updatedAt: "modifiedAt"
});

const orgRecord = mongoose.model("orgRecord", organizationSchema);

module.exports = { orgRecord };