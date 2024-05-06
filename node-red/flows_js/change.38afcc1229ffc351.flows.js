const Node = {
  "id": "38afcc1229ffc351",
  "type": "change",
  "z": "7d89c5933c6ac70c",
  "name": "",
  "rules": [
    {
      "t": "set",
      "p": "data.batteryLevel",
      "pt": "msg",
      "to": "device.batteryLevel ~> $type = 'number' ? \tdevice.batteryLevel : -1",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 410,
  "y": 1600,
  "wires": [
    [
      "94c08cd5b3d4e152"
    ]
  ]
}

module.exports = Node;