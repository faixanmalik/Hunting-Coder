import * as fs from 'fs';

export default function handler(req, res) {
fs.readFile(`blogdata/${req.query.slug}.json`, 'utf8', function (err,data) {
    if (err) {
        res.status(500).json({error:err})
    }
    res.status(200).json(JSON.parse(data))
  });
}