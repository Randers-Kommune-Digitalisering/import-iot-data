const Node = {
  "id": "1a33bcf0c8ae419c",
  "type": "template",
  "z": "7d89c5933c6ac70c",
  "name": "Forespørgsel ↓\\n Tjek om data eksisterer",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 590,
  "y": 760,
  "wires": [
    [
      "c8b0f8f8c8eeedfa"
    ]
  ]
}

Node.template = `
SELECT
    COUNT(*) as count
FROM
    INFORMATION_SCHEMA.TABLES 
WHERE
    TABLE_NAME = '{{payload.dataTablename}}'
`

module.exports = Node;