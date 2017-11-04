// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Grabbing our models

var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

    // GET route for getting all of the patients
    // do i need unique routes for this? - yes, if rendering on seperate pages 
    app.get("/api/patient", function(req, res) {

        db.Patient.findAll({

        }).then(function(dbPatients) {
            // console.log(dbPatients);
            // console.log(patient_db.Patients);
            var jsonDate = (new Date()).toJSON();
            console.log(jsonDate);
            res.render("patients", { patient_db: dbPatients, first: dbPatients.first, last: dbPatients.last, admitted: dbPatients.admitted });
        });
        // return dbPatients;
    });

    app.post("/api/patient", function(req, res) {
        return db.Patient.create({
            first: req.body.first,
            last: req.body.last,
            admitted: new Date()
        }).then(function(dbPatients) {
            // console.log(dbPatient);
            var jsonDate = (new Date()).toJSON();
            console.log(jsonDate);
            console.log("we be posting")
            res.render("patients", { patient_db: dbPatients, first: dbPatients.first, last: dbPatients.last, admitted: dbPatients.admitted });
        });
    });
    // DELETE route for deleting Patients. You can access the Patient's id in req.params.id
    app.delete("/api/patient", function(req, res) {

        db.Patient.destroy({
            where: {

            }
        });


    });

    // DELETE FROM post WHERE status = 'inactive';

    // PUT route for updating todos. The updated todo will be available in req.body
    app.put("/api/patient", function(req, res) {

    });
};