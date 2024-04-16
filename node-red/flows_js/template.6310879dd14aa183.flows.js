const Node = {
  "id": "6310879dd14aa183",
  "type": "template",
  "z": "eef226cd62dde078",
  "name": "",
  "field": "sql",
  "fieldType": "msg",
  "format": "handlebars",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 320,
  "y": 100,
  "wires": [
    [
      "470c5d56685536b6"
    ]
  ]
}

Node.template = `
SELECT deviceEui FROM  {{global.metadataTablename.maaler}}
`

module.exports = Node;