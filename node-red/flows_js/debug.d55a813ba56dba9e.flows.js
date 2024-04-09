const Node = {
  "id": "d55a813ba56dba9e",
  "type": "debug",
  "z": "7d89c5933c6ac70c",
  "d": true,
  "name": "stdout",
  "active": true,
  "tosidebar": true,
  "console": false,
  "tostatus": false,
  "complete": "payload.warningCount > 0\t? { data.tablename: \"table exists\" }\t:\t{ data.tablename: \"table created\" }",
  "targetType": "jsonata",
  "statusVal": "",
  "statusType": "auto",
  "x": 1110,
  "y": 720,
  "wires": []
}

module.exports = Node;