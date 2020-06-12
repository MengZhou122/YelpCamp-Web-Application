//all the middlewares goes here
//named index.js because it is considered as the main entrance of the folder when been required

var middlewareObj = {};
var Campground = require("../models/campground");
var Comment = require("../models/comment");

middlewareObj.checkCampgroundOwnership = function (req, res, next) {
    //is user logged in
    if (req.isAuthenticated()) {
        Campground.findById(req.params.id, function(err, foundCampground){
            if (err) {
                req.flash("error", "Campground not found"); 
                res.redirect("back");
            } else {
                //does the user own the campground. [equals]:author.id is an object and req.user._id is a string
                if (foundCampground.author.id.equals(req.user._id)){
                    next();
                } else {
                    req.flash("error", "You don't have permission to do that"); 
                    res.redirect("back");
                }
            }
        });
    } else {
        req.flash("error", "You need to be Logged in to do that!"); 
        res.redirect("back");
    }
};

middlewareObj.checkCommentOwnership = function(req, res, next) {
    //is user logged in
    if (req.isAuthenticated()) {
        Comment.findById(req.params.comment_id, function(err, foundComment){
            if (err) {
                res.redirect("back");
            } else {
                //does the user own the comment. [equals]:foundComment.author.id is an object and req.user._id is a string
                if (foundComment.author.id.equals(req.user._id)){
                    next();
                } else {
                    req.flash("error", "You don't have permission to do that"); 
                    res.redirect("back");
                }
            }
        });
    } else {
        req.flash("error", "You need to be Logged in to do that!"); 
        res.redirect("back");
    }
};

middlewareObj.isLoggedIn = function(req, res, next) {
    if(req.isAuthenticated()) {
        return next();
    }
    req.flash("error", "You need to be Logged in to do that!"); //flash name: error; vaklue:Please... the message will pass to next page
    res.redirect("/login");
}


module.exports = middlewareObj;