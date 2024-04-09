const Node = {
  "id": "2638f1f20857e8ed",
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
  "x": 690,
  "y": 80,
  "wires": [
    [
      "3ece71af790c7751",
      "a41f7310c7be4afd"
    ]
  ]
}

module.exports = Node;