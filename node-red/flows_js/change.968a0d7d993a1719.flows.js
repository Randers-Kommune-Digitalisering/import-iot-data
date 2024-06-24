const Node = {
  "id": "968a0d7d993a1719",
  "type": "change",
  "z": "f93fc1e5c4176e6a",
  "name": "Set msg.data",
  "rules": [
    {
      "t": "set",
      "p": "data.values",
      "pt": "msg",
      "to": "(((payload.decodingInfo ~> $split(\"[\") ) [1] \t                        ~> $split(\"]\") ) [0]\t                        ~> $split(\",\") )\t@ $key # $index .\t{\t    \"type\": $key ~> $trim(),\t    \"value\": payload.counterValues[$index]\t}",
      "tot": "jsonata"
    },
    {
      "t": "delete",
      "p": "data.data",
      "pt": "msg"
    },
    {
      "t": "delete",
      "p": "data.productType",
      "pt": "msg"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 630,
  "y": 80,
  "wires": [
    []
  ]
}

module.exports = Node;