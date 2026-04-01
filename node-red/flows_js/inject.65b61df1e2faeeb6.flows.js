const Node = {
  "id": "65b61df1e2faeeb6",
  "type": "inject",
  "z": "7d89c5933c6ac70c",
  "name": "Testdata (vand)",
  "props": [
    {
      "p": "payload"
    }
  ],
  "repeat": "",
  "crontab": "",
  "once": false,
  "onceDelay": 0.1,
  "topic": "",
  "payload": "{\"id\":\"device-00f25d\",\"deviceEui\":\"0018b2400000f25d\",\"observedAt\":\"2026-04-01T09:18:24.952596224+00:00\",\"values\":[{\"type\":\"current_volume\",\"value\":2},{\"type\":\"log_time_volume\"},{\"type\":\"leakage\",\"value\":0},{\"type\":\"low_temp\",\"value\":0}],\"rssi\":-94,\"batteryLevel\":100}",
  "payloadType": "json",
  "x": 210,
  "y": 260,
  "wires": [
    [
      "b47538a01b50dcca"
    ]
  ]
}

module.exports = Node;