const Node = {
  "id": "94c08cd5b3d4e152",
  "type": "template",
  "z": "7d89c5933c6ac70c",
  "name": "Forespørgsel ↓\\n Opdater device metadata tabel",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 710,
  "y": 1600,
  "wires": [
    [
      "8acdb2123b63ed5e"
    ]
  ]
}

Node.template = `
UPDATE
    {{global.metadataTablename.maaler}}
SET
    lastObservation = '{{data.observedAt}}',
    dataTablename = '{{data.tablename}}',
    rssi = {{data.rssi}},
    batteryLevel = {{data.batteryLevel}}
WHERE
    deviceEui = '{{data.deviceEui}}'
`

module.exports = Node;