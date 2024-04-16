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
      "to": "{\t   \"id\": \"device-010f64001\",\t   \"deviceEui\": testdeveui,\t   \"observedAt\": \"2024-03-22T09:58:52.710Z\",\t   \"values\": [\t       {\t           \"type\": \"Active_Energy_Import_T1\",\t           \"value\": 1949785        \t       },\t       {\t           \"type\": \"Active_Energy_Import_T2\",\t           \"value\": 0        \t       },\t       {\t           \"type\": \"Active_Energy_Export_T1\",\t           \"value\": 0        \t       },\t       {\t           \"type\": \"Active_Energy_Export_T2\",\t           \"value\": 0        \t       },\t       {\t           \"type\": \"errorcode\",\t           \"value\": 0        \t       }    \t   ],\t   \"rssi\": -94,\t   \"batteryLevel\": -1\t}",
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