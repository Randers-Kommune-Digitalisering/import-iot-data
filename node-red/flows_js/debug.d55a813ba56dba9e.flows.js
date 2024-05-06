const Node = {
  "id": "d55a813ba56dba9e",
  "type": "debug",
  "z": "7d89c5933c6ac70c",
  "name": "stdout",
  "active": true,
  "tosidebar": true,
  "console": false,
  "tostatus": false,
  "complete": "payload.warningCount > 0 or error ~> $exists() ?\t{\t    data.tablename: \"warning when creating table\",\t    \"error\": error.message,\t    \"sql\": sql\t}\t:\t{\t    data.tablename: \"data table created\"\t}",
  "targetType": "jsonata",
  "statusVal": "",
  "statusType": "auto",
  "x": 1110,
  "y": 820,
  "wires": []
}

module.exports = Node;