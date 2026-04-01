const Node = {
  "id": "aebe222c1f833903",
  "type": "switch",
  "z": "7d89c5933c6ac70c",
  "name": "Har values?",
  "property": "data",
  "propertyType": "jsonata",
  "rules": [
    {
      "t": "hask",
      "v": "values",
      "vt": "str"
    },
    {
      "t": "hask",
      "v": "data",
      "vt": "str"
    },
    {
      "t": "else"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 3,
  "x": 930,
  "y": 220,
  "wires": [
    [
      "3ece71af790c7751"
    ],
    [
      "3ece71af790c7751"
    ],
    [
      "09b92b3224e5d8f9"
    ]
  ]
}

module.exports = Node;