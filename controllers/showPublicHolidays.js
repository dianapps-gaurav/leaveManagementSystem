const { publicHoliday } = require("../models/publicHoliday");

const showPublicHolidays = async (req,res) => {
    const holidays = await publicHoliday.find({},{ "_id": 0, "holidayName": 1, "holidayDate": 1, "createdAt": 0, "updatedAt": 0 });
    
    res.send(200).send({
        data: holidays
    });
};

module.exports = { showPublicHolidays };