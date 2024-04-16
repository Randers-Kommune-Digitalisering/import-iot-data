const Node = {
  "id": "c42b1386c5718d27",
  "type": "change",
  "z": "eef226cd62dde078",
  "name": "Testdata",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "{\"deviceUid\":1,\"name\":\"El-import (T1)\",\"inputenhed\":\"W\",\"enhed\":\"kW\",\"energiartskode\":0,\"typekode\":1,\"propertyName\":\"Active_Energy_Import_T1\",\"operator\":\"/\",\"operationvalue\":1000}",
      "tot": "json"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 390,
  "y": 860,
  "wires": [
    [
      "29e7d43764c0825e"
    ]
  ]
}

module.exports = Node;