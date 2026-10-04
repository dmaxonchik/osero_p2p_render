const { PeerServer } = require('peer');

// Renderが指定するポート番号を取得。なければローカルテスト用に9000を使う
const port = process.env.PORT || 9000;

const peerServer = PeerServer({ 
    port: port, // ← 変数を使うように変更
    path: '/myapp'
});

console.log(`PeerJS server running on port ${port}`);
