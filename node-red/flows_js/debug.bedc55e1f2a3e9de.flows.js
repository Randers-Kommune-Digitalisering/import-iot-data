const Node = {
  "id": "bedc55e1f2a3e9de",
  "type": "debug",
  "z": "7d89c5933c6ac70c",
  "name": "stdout",
  "active": true,
  "tosidebar": true,
  "console": true,
  "tostatus": false,
  "complete": "payload.warningCount > 0 or error ~> $exists() ?\t{\t    data.tablename: \"data insert error\",\t    \"error\": error.message,\t    \"warning\": warning,\t    \"sql\": sql\t}\t:\t{\t    data.tablename: \"new data inserted\",\t    \"rows\": payload.affectedRows\t}",
  "targetType": "jsonata",
  "statusVal": "",
  "statusType": "auto",
  "x": 920,
  "y": 1400,
  "wires": []
}

module.exports = Node;