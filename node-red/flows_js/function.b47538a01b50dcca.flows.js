const Node = {
  "id": "b47538a01b50dcca",
  "type": "function",
  "z": "7d89c5933c6ac70c",
  "name": "Rens svar",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 400,
  "y": 80,
  "wires": [
    [
      "571610cba9c26a66"
    ]
  ]
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  let payload = msg.payload;
  let res = msg.res;
  
  msg = {};
  msg.res = res;
  msg.payload = payload;
  
  return msg;
}

module.exports = Node;