const express = require("express");
const router = express.Router();
const { verifyUserToken } = require("../middleware/verifyUserToken");
const { profileDashboard } = require("../controllers/userPage");
const { isHr } = require("../middleware/verifyRole");
const { loginUser } = require("../controllers/login");
const empActiveLeaves = require("../controllers/empActiveLeaves");
const { insertData } = require("../controllers/registerEmployee");
const { isEmpOrHr } = require("../middleware/verifyRole");
const { applyLeave } = require("../controllers/applyLeave");
const { adminDashboard } = require("../controllers/adminDashboard");
const { isAdmin } = require("../middleware/verifyRole");
const { showPublicHolidays } = require("../controllers/showPublicHolidays");
const { addPublicHolidays } = require("../controllers/addPublicHolidays");
const { approveLeave } = require("../controllers/approveLeave");
const { showAllUsers } = require("../controllers/showAllUsers");

router.post("/login", loginUser);
router.post("/register/hr", verifyUserToken, isAdmin, insertData);
router.get("/userDashboard",verifyUserToken,profileDashboard);
router.get("/hr/empLeaves", verifyUserToken,isHr,empActiveLeaves);
router.post("/register/employee", verifyUserToken, isHr, insertData);
router.post("/user/leaveApplication", verifyUserToken, isEmpOrHr, applyLeave);
router.get("/admin/adminDashboard", verifyUserToken, isAdmin, adminDashboard);
router.get("/all/publicHolidays", showPublicHolidays);
router.post("/add/publicHolidays", verifyUserToken, isHr, addPublicHolidays);
router.put("/leave/approveLeaves/:empId/:role/:status", verifyUserToken , approveLeave);
router.get("/organization/hierarchy", showAllUsers);
module.exports = router;
