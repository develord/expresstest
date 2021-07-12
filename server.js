const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const cors = require('cors')

const oraganigram = {
    name: "Naruto uzumaki",
    title: "CTO",
    img: "https://iconape.com/wp-content/files/hb/154859/svg/154859.svg",
    children: [
      {
        name: "Luffy",
        title: "Directeur Developpement",
        img: "https://icons.iconarchive.com/icons/crountch/one-piece-character/256/Monkey-D-Luffey-icon.png",
        children: [
          { 
            name: "Donald trump",
            title: "chef Equipe",
            img: "https://webmedias.ac-nice.fr/chasseursdactu/wp-content/uploads/sites/39/2018/03/trump-800x445.png",
            children: [
              { 
                name: "buggy ",
                title: "Developpeur",
                img: "https://i.skyrock.net/2767/78482767/pics/3002856667_1_17_zt0vAVxu.png",
              },
              { 
                name: "Gattuso",
                title: "Developpeur",
                img: "https://www.footyrenders.com/render/gennaro-gattuso-1.png"
              },
              { 
                name: "Pepe",
                title: "Developpeur",
                img: "http://www.footugalfrance.fr/media/bearleague/thumb/bl15676139172440.png"
              }
            ] 
          },
          { 
            name: "Kim Jong Un",
            title: "chef Equipe",
            img: "https://s3.getstickerpack.com/storage/uploads/sticker-pack/great-leader-kim-jong-un/sticker_3.png?d0206403c0cca86b656d68031fa585e1&d=200x200",
            children: [
              { 
                name: "Saitama",
                title: "Developpeur",
                img: "https://www.pngkey.com/png/full/146-1460159_saitama-sticker-one-punch-man-saitama-ok.png",
              },
              { 
                name: "Goku",
                title: "Developpeur",
                img: "https://i.pinimg.com/originals/d5/00/47/d50047b6bdfc27e96f6b9ffb40a25188.png"
              },
              { 
                name: "Madara",
                title: "Developpeur",
                img: "https://i.pinimg.com/originals/f2/fe/c2/f2fec265ef3f424cacefd43816ea65ad.png"
              }
            ] 
          }
        ]
      },
      {
        name: "Salt Bae",
        title: "Directeur Deployment",
        img: "https://emoji.gg/assets/emoji/2199-saltbae.png",
        children: [
          {
            name: "Elon Musk",
            title: "chef Equipe",
            img: "http://csc170.org/examples/gilacqua/project3/images/elon1.png",
          },
          {
            name: "Pep Guardiola",
            title: "chef Equipe",
            img: "https://i.4pcdn.org/sp/1537627538858.png",
          }
        ]
      }
    ]
}

app.use(cors())
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header('Access-Control-Allow-Methods: GET, POST, OPTIONS')
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    next()
  });

app.get('/oraganigram', function(req, res) {
    console.log("GET From SERVER")
    res.send(oraganigram)
})

app.listen(6069)

