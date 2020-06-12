var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
    {
        name: "Cloud's Rest",
        image: "https://images.unsplash.com/photo-1571863533956-01c88e79957e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1334&q=80",
        description: "The heigh moutain which will halt the clouds around you!Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        name: "Desert Masa",
        image: "https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
        description: "In the middle of nowhere, you are the king of the world! Tellus integer feugiat scelerisque varius morbi enim nunc. Enim nunc faucibus a pellentesque sit amet porttitor eget. Turpis egestas sed tempus urna et pharetra pharetra. Cursus euismod quis viverra nibh cras pulvinar mattis nunc sed. Metus dictum at tempor commodo ullamcorper a lacus. Sem fringilla ut morbi tincidunt augue interdum. Ornare suspendisse sed nisi lacus sed viverra tellus. Eget egestas purus viverra accumsan in nisl nisi leo. Id volutpat lacus laoreet non."
    },
    {
        name: "Canyon Floor",
        image: "https://images.unsplash.com/photo-1515444744559-7be63e1600de?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
        description: "At he bottom of the Greate Canyon, awssome place for kayaking! Quis imperdiet massa tincidunt nunc pulvinar sapien. Varius duis at consectetur lorem donec massa. Quam adipiscing vitae proin sagittis nisl. Massa ultricies mi quis hendrerit dolor magna eget est lorem. Netus et malesuada fames ac turpis egestas integer. Volutpat est velit egestas dui. Sed arcu non odio euismod lacinia at. Vitae proin sagittis nisl rhoncus mattis rhoncus. Morbi quis commodo odio aenean sed. Vitae nunc vel risus tor neque vitae tempus."
    }
]

function seedDB(){
    //Remove all compgrounds
    Campground.deleteMany({}, function(){
        // if (err) {
        //     console.log(err);
        // } else {
        //     console.log("removed campgrounds");
        //     Comment.remove({}, function(err){
        //         if (err) {
        //             console.log(err)
        //         } else {
        //             console.log("Removed comments!");
        //         }
        //     });
        //     //add a few campgorunds
        //     data.forEach(function(seed){
        //         Campground.create(seed, function(err, campgorund){
        //             if (err) {
        //                 console.log(err);
        //             } else {
        //                 console.log("added a campgorund");
                        
        //                 //create a comment
        //                 Comment.create(
        //                     {
        //                         text: "This place is great, but I wish there was Internet here!",
        //                         author: "Nomandi"
        //                     }, function(err, comment) {
        //                         if (err) {
        //                             console.log(err);
        //                         } else {
        //                             campgorund.comments.push(comment);
        //                             campgorund.save();
        //                             console.log("Created new comment");
        //                         }
        //                     }
        //                 )
        //             }
        //         });
        //     });
        //}
    });
    
    
    //add a few comments
}

module.exports = seedDB;