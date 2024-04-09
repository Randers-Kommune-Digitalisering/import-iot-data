const Node = {
  "id": "2ce0af8021fc83ae",
  "type": "change",
  "z": "7d89c5933c6ac70c",
  "g": "a6ff98b819d2453d",
  "name": "Metric (Count)",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "{\t    \"op\": \"inc\",\t    \"val\": payload.affectedRows,\t    \"labels\": {\t        \"device\": data.id\t    }\t}",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 940,
  "y": 1320,
  "wires": [
    [
      "344832cf8a71d5c1"
    ]
  ]
}

module.exports = Node;