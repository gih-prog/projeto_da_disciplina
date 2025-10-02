// Este arquivo DEVE ser salvo em: [RAIZ DO PROJETO]/api/firebaseConfig.js

module.exports = (req, res) => {
    // Estas variáveis de ambiente SÓ PODEM ser configuradas no painel do Vercel!
    const config = {
        apiKey: process.env.FIREBASE_API_KEY,
        authDomain: process.env.FIREBASE_AUTH_DOMAIN,
        projectId: process.env.FIREBASE_PROJECT_ID,
        storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
        messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
        appId: process.env.FIREBASE_APP_ID
    };

    // Resposta para o frontend (index.html)
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    // Permite que o Vercel puxe a configuração
    res.end(JSON.stringify(config));
};
