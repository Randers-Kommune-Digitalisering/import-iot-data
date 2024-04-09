const Node = {
  "id": "faa66823f24f2861",
  "type": "change",
  "z": "7d89c5933c6ac70c",
  "name": "Flyt msg.data \\n til payload",
  "rules": [
    {
      "t": "move",
      "p": "data",
      "pt": "msg",
      "to": "payload",
      "tot": "msg"
    },
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "payload ~> $type() = \"Array\" ?\t    payload\t:   [payload]",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 220,
  "y": 400,
  "wires": [
    [
      "ac8d0bcc64355618"
    ]
  ]
}

module.exports = Node;