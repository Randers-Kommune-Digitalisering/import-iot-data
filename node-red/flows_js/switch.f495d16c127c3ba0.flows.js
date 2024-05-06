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
  "y": 1760,
  "wires": [
    [
      "38afcc1229ffc351"
    ]
  ]
}

module.exports = Node;