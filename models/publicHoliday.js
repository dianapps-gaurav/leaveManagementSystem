const mongoose = require("mongoose");

const publicHolidaySchema = new mongoose.Schema ({
    holidayName: {
        type: String
    },
    holidayDate: {
        type: String
    }
});

publicHolidaySchema.set("timestamps",true);

const publicHoliday = mongoose.model("publicHoliday", publicHolidaySchema);

module.exports = { publicHoliday };