const Node = {
  "id": "f8703f660f4d51e5",
  "type": "switch",
  "z": "7459f772194dcf44",
  "g": "a3f24782e0a49572",
  "name": "Is SELECT?",
  "property": "sql",
  "propertyType": "msg",
  "rules": [
    {
      "t": "regex",
      "v": "^SELECT\\s+.*\\s+FROM",
      "vt": "str",
      "case": true
    },
    {
      "t": "else"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 2,
  "x": 470,
  "y": 220,
  "wires": [
    [],
    [
      "20fe6c8ef45ad2ff"
    ]
  ]
}

module.exports = Node;