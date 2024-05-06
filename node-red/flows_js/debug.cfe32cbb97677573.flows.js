const Node = {
  "id": "cfe32cbb97677573",
  "type": "debug",
  "z": "7d89c5933c6ac70c",
  "name": "stdout",
  "active": true,
  "tosidebar": true,
  "console": true,
  "tostatus": false,
  "complete": "{\t    data.tablename: \"no new data\",\t    \"lastDbUpdate\": payload[0].last_observation ~> $toMillis ~> $fromMillis(\"[Y0001]-[M01]-[D01] [H01]:[m01]:[s01]\"),\t    \"lastDataObservation\": (data.observedAt ~>$split('.'))[0] ~> $toMillis ~> $fromMillis(\"[Y0001]-[M01]-[D01] [H01]:[m01]:[s01]\")\t}",
  "targetType": "jsonata",
  "statusVal": "",
  "statusType": "auto",
  "x": 880,
  "y": 1160,
  "wires": []
}

module.exports = Node;