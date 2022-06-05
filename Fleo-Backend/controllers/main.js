const company = require('../models/company');

module.exports.createCategory = async(req, res) => {
    try{
        let per = (req.body.currentSales / req.body.targetSales) * 100;

        let color = "";
        if(per <= 33){
            color = "red";
        }
        else if(per <= 66 && per > 33){
            color = "yellow";
        }
        else{
            color = "green";
        }
        let progressLabel = "";
        if(per <= 33){
            progressLabel = "At Risk";
        }
        else if(per <= 66 && per > 33){
            progressLabel = "Off Track";
        }
        else{
            progressLabel = "On Track";
        }
        let data = {
            name : req.body.name,
            currentSales : req.body.currentSales,
            targetSales : req.body.targetSales,
            progressPer : per,
            barColor : color,
            progressLabel : progressLabel
        };
        res.status(200).json(data);
        const comp = await company.create(data);
        console.log("Company created successfully with id: " + comp.id);

    }
    catch(err){
        console.log(err);
        res.status(401).json(err);
    }
}

module.exports.updateCategory = async(req, res) => {
    try{
        let per = (req.body.currentSales / req.body.targetSales) * 100;

        let color = "";
        if(per <= 33){
            color = "red";
        }
        else if(per <= 66 && per > 33){
            color = "yellow";
        }
        else{
            color = "green";
        }
        let progressLabel = "";
        if(per <= 33){
            progressLabel = "At Risk";
        }
        else if(per <= 66 && per > 33){
            progressLabel = "Off Track";
        }
        else{
            progressLabel = "On Track";
        }
        let data = {
            name : req.body.name,
            currentSales : req.body.currentSales,
            targetSales : req.body.targetSales,
            progressPer : per,
            barColor : color,
            progressLabel : progressLabel
        };
        res.status(200).json(data);
        const comp = await company.updateOne({name : req.body.name}, data);
        console.log("Company updated successfully with name: " + comp.name);

    }
    catch(err){
        console.log(err);
        res.status(401).json(err);
    }
}

module.exports.deleteCategory = async(req, res) => {
    try{
        const comp = await company.deleteOne({name : req.body.name});
        console.log("Company deleted successfully with name " + comp.name);
        res.status(200).json(comp);
    }
    catch(err){
        console.log(err);
        res.status(401).json(err);
    }
}