const Node = {
  "id": "d64e6d1b2aeeb641",
  "type": "template",
  "z": "7d89c5933c6ac70c",
  "name": "Forespørgsel ↓\\n Tjek om måler eksisterer \\n i metadata tabel",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 350,
  "y": 480,
  "wires": [
    [
      "672fb90834185d0d"
    ]
  ]
}

Node.template = `
SELECT
    lastObservation
FROM {{global.metadataTablename.maaler}}
WHERE deviceEui = '{{data.deviceEui}}'
ORDER BY lastObservation DESC LIMIT 1
`

module.exports = Node;