const isHr = (req,res,next) => {
    
    if (req.user.role === "hr") {
        
        next();
    } else {
      
        return res.status(401).send("unauthorized");
    }

};

const isEmpOrHr = (req,res,next) => {
    if (req.user.role === "hr" || req.user.role === "employee") {
        next();
    } else {
        return res.status(401).send("unauthorized");
    }
};

const isAdmin = (req,res,next) => {
    
    if (req.user.role === "admin") {
        next();
    } else {
    
        return res.status(400).send("unauthorized");
    }
};

module.exports = {
    isHr , 
    isEmpOrHr,
    isAdmin
};
