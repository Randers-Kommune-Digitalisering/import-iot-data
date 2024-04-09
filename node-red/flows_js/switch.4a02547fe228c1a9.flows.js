const Node = {
  "id": "4a02547fe228c1a9",
  "type": "switch",
  "z": "f93fc1e5c4176e6a",
  "name": "",
  "property": "productType",
  "propertyType": "msg",
  "rules": [
    {
      "t": "eq",
      "v": "pulse",
      "vt": "str"
    },
    {
      "t": "else"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 2,
  "x": 390,
  "y": 160,
  "wires": [
    [
      "603b599ad5e95714"
    ],
    [
      "8bfbbd8a03d0531e"
    ]
  ]
}

module.exports = Node;