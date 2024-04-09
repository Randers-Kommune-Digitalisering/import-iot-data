const Node = {
  "id": "19e80ee397d7c46a",
  "type": "change",
  "z": "7d89c5933c6ac70c",
  "g": "a6ff98b819d2453d",
  "name": "Metric (Status)",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "{\t    \"op\": \"set\",\t    \"val\": payload.warningCount > 0 ? 0 : 1,\t    \"labels\": {\t        \"device\": data.id\t    }\t}",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 940,
  "y": 1280,
  "wires": [
    [
      "00837b57c8d1708d"
    ]
  ]
}

module.exports = Node;