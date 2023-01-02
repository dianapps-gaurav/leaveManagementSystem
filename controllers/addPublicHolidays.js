const { publicHoliday } = require("../models/publicHoliday");

const addPublicHolidays = async (req,res) => {
    try {
        
        const data = new publicHoliday({
            holidayName: req.body.holidayName,
            holidayDate: req.body.holidayDate
        });
        const dataSave = await data.save();

        return res.status(200).send({
            message: "data inserted successfully"
        });

    } catch (error) {
        return res.status(400).send({
            message: error.message
        });
    }
};

module.exports = { addPublicHolidays };