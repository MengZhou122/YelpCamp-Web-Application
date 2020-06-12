var express = require("express");
var router = express.Router({mergeParams: true});//merge the params from campground and the comments together
var Campground = require("../models/campground");
var Comment = require("../models/comment");
var middleware = require("../middleware")

//Comments new
router.get("/new", middleware.isLoggedIn, function(req, res){
    Campground.findById(req.params.id, function(err, campground){
        if (err) {
            console.log(err);
        } else {
            res.render("comments/new", {campground: campground});
        }
    })
});

//Comments create
router.post("/", middleware.isLoggedIn, function(req, res){
    //lookup campground using ID
    Campground.findById(req.params.id, function(err, campground){
        if (err) {
            console.log(err);
            res.redirect("/campgrounds");
        } else {
        //create new comments
            Comment.create(req.body.comment, function(err, comment){
                if (err) {
                    req.flash("error", "Something went wrong"); 
                    console.log(err);
                } else {
                    //add username and id to comment
                    comment.author.id = req.user._id;
                    comment.author.username = req.user.username;
                    comment.save();
                    
                    //connect new commnets to campground
                    campground.comments.push(comment);
                    campground.save();
                    
                    //redirect to campground show page
                    req.flash("success", "Suucessfully added comments!"); 
                    res.redirect("/campgrounds/" + campground._id);
                }
            })
        }
    })
});

//Edit route
router.get("/:comment_id/edit", middleware.checkCommentOwnership, function(req, res) {
    Comment.findById(req.params.comment_id, function(err, foundComment) {
        if (err) {
            res.redirect("back");
        } else {
            //retreive the campground id from requset, avoid use findById to be lightweight
            res.render("comments/edit", {campground_id: req.params.id, comment: foundComment});
        }
    })
});

//Update route
router.put("/:comment_id", middleware.checkCommentOwnership, function(req, res){
    Comment.findByIdAndUpdate(req.params.comment_id, req.body.comment, function(err, updatededComment){
        if (err) {
            res.redirect("back");
        } else {
            res.redirect("/campgrounds/" + req.params.id);
        }
    })
});

//Destory route
router.delete("/:comment_id", middleware.checkCommentOwnership, function(req, res) {
  //findByIdAndRmove
  Comment.findByIdAndRemove(req.params.comment_id, function(err){
      if(err) {
          res.redirect("back");
      } else {
          req.flash("success", "Comment deleted"); 
          res.redirect("/campgrounds/" + req.params.id);
      }
  });
});

module.exports = router;