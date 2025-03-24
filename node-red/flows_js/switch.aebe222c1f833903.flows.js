const Node = {
  "id": "aebe222c1f833903",
  "type": "switch",
  "z": "7d89c5933c6ac70c",
  "name": "Har values?",
  "property": "data.values",
  "propertyType": "msg",
  "rules": [
    {
      "t": "nempty"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 1,
  "x": 930,
  "y": 240,
  "wires": [
    [
      "3ece71af790c7751"
    ]
  ]
}

module.exports = Node;