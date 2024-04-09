const Node = {
  "id": "8623dd2211386e01",
  "type": "debug",
  "z": "7d89c5933c6ac70c",
  "name": "stdout",
  "active": true,
  "tosidebar": true,
  "console": true,
  "tostatus": false,
  "complete": "payload ~> $count() > 0 ?\t{\t    data.deviceEui: \"device is already registered\",\t    \"lastObservation\": payload[0].lastObservation = \"0000-00-00 00:00:00\" ?\t                        \"no observation\" : payload[0].lastObservation\t}\t:\t{\t    data.deviceEui: \"device is NOT registered\"\t}",
  "targetType": "jsonata",
  "statusVal": "",
  "statusType": "auto",
  "x": 860,
  "y": 480,
  "wires": []
}

module.exports = Node;