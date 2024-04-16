const Node = {
  "id": "e50b592aaa4cbe09",
  "type": "change",
  "z": "eef226cd62dde078",
  "name": "Testdata",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "{\t    \"id\": \"device-010f6d\",\t    \"deviceEui\": devEui,\t    \"observedAt\": \"2024-04-16T07:21:30.630903Z\",\t    \"values\": [\t        {\t            \"type\": \"Active_Energy_Import_T1\",\t            \"value\": 0\t        }\t    ],\t    \"rssi\": -115,\t    \"batteryLevel\": -1\t}",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 430,
  "y": 680,
  "wires": [
    [
      "0b9646d8e3ed38d1",
      "493f25c8b213c725"
    ]
  ]
}

module.exports = Node;