const Node = {
  "id": "a2fe1cd8c1009415",
  "type": "switch",
  "z": "7d89c5933c6ac70c",
  "name": "Kontrollér om modtaget data \\n er nyere end gemt data",
  "property": "payload[0].lastObservation ~> $toMillis()",
  "propertyType": "jsonata",
  "rules": [
    {
      "t": "gte",
      "v": "\t\t(data.observedAt ~> $split(\".\"))[0] ~> $toMillis",
      "vt": "jsonata"
    },
    {
      "t": "else"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 2,
  "x": 600,
  "y": 1020,
  "wires": [
    [
      "cfe32cbb97677573"
    ],
    [
      "f79a4ea0e6fe1520"
    ]
  ]
}

module.exports = Node;