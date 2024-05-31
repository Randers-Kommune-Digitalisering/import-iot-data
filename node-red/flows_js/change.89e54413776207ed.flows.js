const Node = {
  "id": "89e54413776207ed",
  "type": "change",
  "z": "f93fc1e5c4176e6a",
  "name": "Set payload & \\n productType",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "data.data",
      "tot": "msg",
      "dc": true
    },
    {
      "t": "set",
      "p": "productType",
      "pt": "msg",
      "to": "data.productType",
      "tot": "msg",
      "dc": true
    },
    {
      "t": "set",
      "p": "unit",
      "pt": "msg",
      "to": "data.unit",
      "tot": "msg"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 200,
  "y": 80,
  "wires": [
    [
      "afcfa99e04d7d010"
    ]
  ]
}

module.exports = Node;