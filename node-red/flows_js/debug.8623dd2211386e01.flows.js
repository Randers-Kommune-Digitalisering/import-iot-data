const Node = {
  "id": "8623dd2211386e01",
  "type": "debug",
  "z": "7d89c5933c6ac70c",
  "name": "stdout",
  "active": true,
  "tosidebar": true,
  "console": true,
  "tostatus": false,
  "complete": "metadata != null and (metadata ~> $exists()) ?\t{\t    data.deviceEui: \"device is registered\",\t    \"lastObservation\": metadata.lastObservation = \"0000-00-00 00:00:00\" ?\t                        \"no observation\" : payload[0].lastObservation,\t    \"tablename\": metadata.dataTablename\t}\t:\tdata.deviceEui ~> $exists() ?\t    {\t        data.deviceEui: \"device is NOT registered\"\t    }\t    :\t    {\t        \"unknown-device\": \"no deviceEui provided\"\t    }",
  "targetType": "jsonata",
  "statusVal": "",
  "statusType": "auto",
  "x": 1040,
  "y": 580,
  "wires": []
}

module.exports = Node;