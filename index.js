const getVideo = require('./getVideo');
const express = require('express')
const app = express();

app.get('/:id', (req,res) => {

   getVideo(req.params.id).then(data=>res.send(JSON.stringify(data.response, null, 2))).catch(e=>res.send({'Error': 'Probably an unlisted video, try again'}))
    // res.send(JSON.stringify(getVideo(req.params.id)))
})

app.listen(3000)