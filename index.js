const getVideo = require('./getVideo');
const express = require('express')
const app = express();
const port = process.env.PORT || 5000;

app.get('/:id', (req,res) => {

   getVideo(req.params.id).then(data=>res.send(JSON.stringify(data.response, null, 2))).catch(e=>res.send({'Error': 'Probably an unlisted video, try again'}))
    // res.send(JSON.stringify(getVideo(req.params.id)))
})

app.listen(process.env.PORT)