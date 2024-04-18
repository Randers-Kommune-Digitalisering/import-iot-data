const Node = {
  "id": "c9061ad4a3b7b107",
  "type": "template",
  "z": "063dcf457f2b884b",
  "name": "Forespørgsel ↓\\n Læs alle målere",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 340,
  "y": 120,
  "wires": [
    [
      "eae80798d2eda6de"
    ]
  ]
}

Node.template = `
SELECT
    deviceEui
FROM {{global.metadataTablename.maaler}}
`

module.exports = Node;