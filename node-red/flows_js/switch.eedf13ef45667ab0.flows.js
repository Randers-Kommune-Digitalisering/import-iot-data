const Node = {
  "id": "eedf13ef45667ab0",
  "type": "switch",
  "z": "7d89c5933c6ac70c",
  "name": "Findes måler?",
  "property": "payload ~> $count() > 0",
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
  "x": 320,
  "y": 620,
  "wires": [
    [
      "d1e08f70c9b8ec7d"
    ],
    [
      "7e1977c7cfb7a24f"
    ]
  ]
}

module.exports = Node;