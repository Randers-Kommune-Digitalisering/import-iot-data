const Node = {
  "id": "a41f7310c7be4afd",
  "type": "change",
  "z": "7d89c5933c6ac70c",
  "name": "Sæt status",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "OK",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "statusCode",
      "pt": "msg",
      "to": "200",
      "tot": "num"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 990,
  "y": 80,
  "wires": [
    [
      "16cdd2346236e5ea"
    ]
  ]
}

module.exports = Node;