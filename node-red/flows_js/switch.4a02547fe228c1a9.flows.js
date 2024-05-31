const Node = {
  "id": "4a02547fe228c1a9",
  "type": "switch",
  "z": "f93fc1e5c4176e6a",
  "name": "",
  "property": "unit",
  "propertyType": "msg",
  "rules": [
    {
      "t": "eq",
      "v": "m3",
      "vt": "str"
    },
    {
      "t": "eq",
      "v": "L",
      "vt": "str"
    },
    {
      "t": "else"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 3,
  "x": 390,
  "y": 180,
  "wires": [
    [
      "603b599ad5e95714"
    ],
    [
      "8384db191bf875a1"
    ],
    [
      "8bfbbd8a03d0531e"
    ]
  ]
}

module.exports = Node;