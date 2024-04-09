const Node = {
  "id": "5b758c284e8ad568",
  "type": "switch",
  "z": "7d89c5933c6ac70c",
  "name": "",
  "property": "data.decoder",
  "propertyType": "msg",
  "rules": [
    {
      "t": "eq",
      "v": "adeunis",
      "vt": "str"
    },
    {
      "t": "else"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 2,
  "x": 190,
  "y": 1220,
  "wires": [
    [
      "0e07e080c569c09a"
    ],
    [
      "566cab7b80234005"
    ]
  ]
}

module.exports = Node;