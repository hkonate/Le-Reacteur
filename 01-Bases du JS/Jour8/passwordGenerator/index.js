const generator = require("generate-password");
const password = generator.generateMultiple(5, {
  length: 16,
  strict: true,
  numbers: true,
  uppercase: true,
  lowercase: true,
  symbols: true,
});

// 'uEyMTw32v9'
console.log(password);
