const Node = {
  "id": "144c2f0348f31878",
  "type": "debug",
  "z": "7d89c5933c6ac70c",
  "name": "stdout",
  "active": true,
  "tosidebar": true,
  "console": true,
  "tostatus": false,
  "complete": "payload.changedRows > 0 ?\t{\t    $globalContext(\"metadataTablename.maaler\"): \"metadata updated\",\t    \"deviceEui\": data.deviceEui,\t    \"observatedAt\": data.observedAt,\t    \"dataTable\": data.tablename,\t    \"changedRows\": payload.changedRows\t}\t:\t{\t    $globalContext(\"metadataTablename.maaler\"): \"error updating metadata\",\t    \"error\": error.message,\t    \"sql\": sql\t}",
  "targetType": "jsonata",
  "statusVal": "",
  "statusType": "auto",
  "x": 1120,
  "y": 1760,
  "wires": []
}

module.exports = Node;