const Node = {
  "id": "8a10027f55bcb820",
  "type": "change",
  "z": "7d89c5933c6ac70c",
  "name": "",
  "rules": [
    {
      "t": "set",
      "p": "data.values",
      "pt": "msg",
      "to": "data.values @ $value . (\t    \"value\" in ($value ~> $keys()) ?\t    $value\t)",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 720,
  "y": 1000,
  "wires": [
    [
      "b4fd60643915511f"
    ]
  ]
}

module.exports = Node;