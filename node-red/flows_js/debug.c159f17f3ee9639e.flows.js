const Node = {
  "id": "c159f17f3ee9639e",
  "type": "debug",
  "z": "7d89c5933c6ac70c",
  "name": "stdout",
  "active": true,
  "tosidebar": true,
  "console": true,
  "tostatus": false,
  "complete": "{\t    \"os2iot\": \"new incoming API request\",\t    \"iot_deviceCount\": payload ~> $count(),\t    \"iot_deviceList\": payload ~> $map( function($v)\t        {\t            $v.deviceEui\t        }) ~> $join,\t    \"timestamp\": $now()\t}",
  "targetType": "jsonata",
  "statusVal": "",
  "statusType": "auto",
  "x": 680,
  "y": 140,
  "wires": []
}

module.exports = Node;