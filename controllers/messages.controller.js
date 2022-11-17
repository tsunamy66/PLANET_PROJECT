const path = require('path')
const model = require('../models/friends.model')
function getMessages(req, res) {
    res.render('messages', {
        title: 'Messages to My friends!',
        friend:'Elon Musk'
    })
    // console.log(path.join(__dirname,'..','public','images','car.jpg'))
    // res.sendFile(path.join(__dirname,'..','public','images','car.jpg'))
    //res.send(`<ul><li>Hello Albert</li></ul>`)
}
function postMessage(req, res) {
    res.send("Updating message.......");
    console.log("Updating message.......");
    console.log(req.body);
    model.push(req.body);
//  req.on("data", function (data) {
//       const friend = data.toString();
//      console.log(`request:`, friend);
//     friends.push(JSON.parse(friend));
//  });
//  req.pipe(res)
//   console.log(end.toString());
//   req.on("end",(end)=>{
}
module.exports = {
    getMessages,
    postMessage
}