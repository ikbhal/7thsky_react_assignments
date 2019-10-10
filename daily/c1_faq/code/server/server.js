const express = require('express');
const app = express();
const http = require('http').Server(app);
app.use(express.json());
const server = http.listen(3001, function() {
    console.log('listening on *:3001');
});


var faq = [

{ 
    q: "Q. When does a new batch start?",
    a: "A. A new batch starts on the 1st of every month"
},
{
    q: "Q. Why Offline?",
    a: "A. Learning is a lot about the right environment. It's easier to create it when everyone is in the same location. There is a lot of intangible value that only-online-courses miss out on e.g. friendships, soft skills, motivation, spirit of shipping, and hi-fives etc.\n"
    + "Also, what we have to offer is very unique to us, things that are hard to transfer online. Maybe we can offer part of our courses online in future."
},
{
    q: "Q. Why Dharamshala?",
    a: "A. Dharamshala is a beautiful Himalayan town and has a small tech community. It's relatively cheaper as compared to other metros in India which means its less burdening for everyone, us and the students.\n"
    + "We moved here couple of years ago and can't imagine going anywhere else. Wake up to great views, fresh air and water. Heck, unlike metros we don't have to pay for playing ground or drinking water. Thanks internet."
}
];
app.get('/ping', function(req, res){
    res.send("pong");
});

app.get('/faq', function(req, res){
    res.json(faq);
});
