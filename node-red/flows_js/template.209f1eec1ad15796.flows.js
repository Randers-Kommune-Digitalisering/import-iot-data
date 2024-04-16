const Node = {
  "id": "209f1eec1ad15796",
  "type": "template",
  "z": "eef226cd62dde078",
  "name": "DROP",
  "field": "sql",
  "fieldType": "msg",
  "format": "handlebars",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 450,
  "y": 400,
  "wires": [
    [
      "1f61fb9cdab32b2d"
    ]
  ]
}

Node.template = `
DROP TABLE {{global.metadataTablename.maaler}}
`

module.exports = Node;