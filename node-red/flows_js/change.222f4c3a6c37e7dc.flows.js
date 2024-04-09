const Node = {
  "id": "222f4c3a6c37e7dc",
  "type": "change",
  "z": "7d89c5933c6ac70c",
  "name": "Flyt payload \\n til msg.data",
  "rules": [
    {
      "t": "move",
      "p": "payload",
      "pt": "msg",
      "to": "data",
      "tot": "msg"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 590,
  "y": 300,
  "wires": [
    [
      "4350c7c94c855628"
    ]
  ]
}

module.exports = Node;