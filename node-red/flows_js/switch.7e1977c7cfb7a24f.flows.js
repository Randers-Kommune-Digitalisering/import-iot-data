const Node = {
  "id": "7e1977c7cfb7a24f",
  "type": "switch",
  "z": "7d89c5933c6ac70c",
  "name": "Findes datatabel?",
  "property": "payload[0].count > 0",
  "propertyType": "jsonata",
  "rules": [
    {
      "t": "false"
    },
    {
      "t": "true"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 2,
  "x": 330,
  "y": 780,
  "wires": [
    [
      "b116d52f48b9a20d"
    ],
    [
      "afdc1ce4ae2d97d3"
    ]
  ]
}

module.exports = Node;