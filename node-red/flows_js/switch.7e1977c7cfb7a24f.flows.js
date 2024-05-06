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
  "y": 1000,
  "wires": [
    [
      "b116d52f48b9a20d"
    ],
    [
      "a2fe1cd8c1009415"
    ]
  ]
}

module.exports = Node;