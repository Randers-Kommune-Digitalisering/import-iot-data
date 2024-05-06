const Node = {
  "id": "7e1977c7cfb7a24f",
  "type": "switch",
  "z": "7d89c5933c6ac70c",
  "name": "Findes en \\n observation?",
  "property": "payload[0].dataTablename = null or\tpayload[0].lastObservation = null or\tpayload[0].lastObservation = \"0000-00-00 00:00:00\"",
  "propertyType": "jsonata",
  "rules": [
    {
      "t": "true"
    },
    {
      "t": "false"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 2,
  "x": 310,
  "y": 840,
  "wires": [
    [
      "b116d52f48b9a20d"
    ],
    [
      "a2fe1cd8c1009415"
    ]
  ]
}

module.exports = Node;