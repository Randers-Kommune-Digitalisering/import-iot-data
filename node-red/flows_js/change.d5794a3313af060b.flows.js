const Node = {
  "id": "d5794a3313af060b",
  "type": "change",
  "z": "7d89c5933c6ac70c",
  "name": "Forbered SQL \\n insert statement",
  "rules": [
    {
      "t": "set",
      "p": "data",
      "pt": "msg",
      "to": "data ~> | $ | {\t    \"observedAt\": observedAt ~> $toMillis() ~> $fromMillis(\"[Y0001]-[M01]-[D01] [H01]:[m01]:[s01]\")\t} |",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "sqlvalues",
      "pt": "msg",
      "to": "data.values\t~> $map(\t    function($v, $k, $i)\t    {\t        \"('\"  & $$.data.observedAt & \"', \"\t        & \"'\" & $v.type & \"', \"\t        & \"'\" & $v.value & \"')\"\t    })\t~> $join(\", \")",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 220,
  "y": 1400,
  "wires": [
    [
      "7fe6f3f247026a69"
    ]
  ]
}

module.exports = Node;