const qs = require('qs');
const xf = require('xfetch-js');
const urlencode = require('urlencode')




const getVideo = id => 
    
    xf.get(`https://www.youtube.com/get_video_info`, { qs: { video_id: id, el: 'detailpage' } })
      .text()
      .then(data=> {
            const obj = qs.parse(data)
            if (obj.adaptive_fmts) {
                return { response : parseString(obj.adaptive_fmts) } 
            } else {
                return 'No adaptive formats'
            }

           

        })








const parseString = (str) => {

    const parseRegex = /([^=&]+)/g
    const formatInfo = str.replace(/xtags=/g, 'xtags=0')
                        .split(/,/g)
                        .map(str=>str.match(parseRegex))
    const dataArray = [];
    for (let i = 0; i < formatInfo.length; i++) {
        let temp = {};
        for(let j=0; j<formatInfo[i].length; j++) {
            if (j%2 === 0) {
                Object.assign(temp, {[formatInfo[i][j]]:urlencode.decode(formatInfo[i][j+1])})
            }
        }
        dataArray.push(temp)
    }
    return dataArray
}


module.exports = getVideo;
        