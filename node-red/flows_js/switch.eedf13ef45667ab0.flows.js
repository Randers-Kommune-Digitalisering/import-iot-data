const Node = {
  "id": "eedf13ef45667ab0",
  "type": "switch",
  "z": "7d89c5933c6ac70c",
  "name": "Findes måler?",
  "property": "metadata != null and (metadata ~> $exists())",
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
  "y": 720,
  "wires": [
    [
      "d1e08f70c9b8ec7d"
    ],
    [
      "1a33bcf0c8ae419c"
    ]
  ]
}

module.exports = Node;