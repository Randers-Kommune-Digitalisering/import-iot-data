const Node = {
  "id": "ef4237b9fbacf84f",
  "type": "change",
  "z": "f637fce5f03731d6",
  "g": "4b90a672643d16a1",
  "name": "clean",
  "rules": [
    {
      "t": "delete",
      "p": "host",
      "pt": "msg"
    },
    {
      "t": "delete",
      "p": "port",
      "pt": "msg"
    },
    {
      "t": "delete",
      "p": "database",
      "pt": "msg"
    },
    {
      "t": "delete",
      "p": "username",
      "pt": "msg"
    },
    {
      "t": "delete",
      "p": "password",
      "pt": "msg"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 530,
  "y": 100,
  "wires": [
    [
      "adbb1417bddbc2a7"
    ]
  ]
}

module.exports = Node;