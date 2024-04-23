const Node = {
  "id": "f495d16c127c3ba0",
  "type": "switch",
  "z": "7d89c5933c6ac70c",
  "name": "",
  "property": "payload.warningCount > 0 or error ~> $exists()",
  "propertyType": "jsonata",
  "rules": [
    {
      "t": "false"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 1,
  "x": 190,
  "y": 1600,
  "wires": [
    [
      "94c08cd5b3d4e152"
    ]
  ]
}

module.exports = Node;