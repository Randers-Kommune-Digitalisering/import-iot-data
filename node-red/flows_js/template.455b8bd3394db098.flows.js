const Node = {
  "id": "455b8bd3394db098",
  "type": "template",
  "z": "7d89c5933c6ac70c",
  "name": "Forespørgsel ↓\\n Opdater målerens dateFirstUsed",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 650,
  "y": 1060,
  "wires": [
    [
      "fef97dc966ad4f16"
    ]
  ]
}

Node.template = `
UPDATE
    {{global.metadataTablename.maaler}}
SET 
    dateFirstUsed = CURRENT_TIMESTAMP
WHERE
    deviceEui = '{{data.deviceEui}}'
`

module.exports = Node;