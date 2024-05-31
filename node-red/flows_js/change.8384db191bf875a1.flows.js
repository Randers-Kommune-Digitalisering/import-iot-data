const Node = {
  "id": "8384db191bf875a1",
  "type": "change",
  "z": "f93fc1e5c4176e6a",
  "name": "Multiply values for L conversion",
  "rules": [
    {
      "t": "set",
      "p": "data",
      "pt": "msg",
      "to": "data ~> | $.values | {\t    \t    /* 1 pulse = 10 liter */\t    \"value\": value * 10\t} |",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 650,
  "y": 180,
  "wires": [
    []
  ]
}

module.exports = Node;