const Node = {
  "id": "4350c7c94c855628",
  "type": "change",
  "z": "7d89c5933c6ac70c",
  "name": "Sæt tabelnavn for måler",
  "rules": [
    {
      "t": "set",
      "p": "data",
      "pt": "msg",
      "to": "data ~> | $ | {\t    \"tablename\": \"iot_device_\" & deviceEui\t} |",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 810,
  "y": 300,
  "wires": [
    [
      "1de818c4ee26a643"
    ]
  ]
}

module.exports = Node;