const Node = {
  "id": "e0d41eb0bcfb6c58",
  "type": "change",
  "z": "7d89c5933c6ac70c",
  "g": "a6ff98b819d2453d",
  "name": "Metric (Time)",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "{\t    \"op\": \"set\",\t    \"val\": $millis(),\t    \"labels\": {\t        \"device\": data.id\t    }\t}",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 930,
  "y": 1400,
  "wires": [
    [
      "75e2baba734d0c8e"
    ]
  ]
}

module.exports = Node;