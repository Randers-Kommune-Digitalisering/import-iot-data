const Node = {
  "id": "603b599ad5e95714",
  "type": "change",
  "z": "f93fc1e5c4176e6a",
  "name": "Divide values for m2 conversion",
  "rules": [
    {
      "t": "set",
      "p": "data",
      "pt": "msg",
      "to": "data ~> | $.values | {\t    \"value\": value * 0.1\t} |",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 630,
  "y": 140,
  "wires": [
    []
  ]
}

module.exports = Node;