import fetch from "node-fetch";

let previousMessages = [];
let handler = async (m, { conn, command, text, usedPrefix }) => {
    if (!text) throw `مثال: ${usedPrefix}${command} انتِ عامله ايه النهارده`;

    try {
        let name = conn.getName(m.sender);

        await conn.sendMessage(m.chat, {
            react: {
                text: "⏳",
                key: m.key,
            },
        });

        let { key } = await conn.sendMessage(m.chat, {
            text: "> جاري البحث...",
        });

        let response = await fetch(`https://api.openai.com/v1/chat/completions`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer sk-proj-jON6PcCgFYv2yb8SnLytT3BlbkFJa45Dk6378A1NeodP5b0S`
            },
            body: JSON.stringify({
                model: 'text-davinci-002', // استخدم النموذج المناسب
                messages: [{ role: 'user', content: text }],
                max_tokens: 150
            })
        });

        if (!response.ok) {
            throw new Error("Request to OpenAI API failed");
        }

        let result = await response.json();

        await conn.sendMessage(m.chat, {
            react: {
                text: "✅",
                key: m.key,
            },
        });

        await conn.sendMessage(m.chat, {
            text: "" + result.choices[0].message.content,
            edit: key,
        });

        previousMessages = [...previousMessages, { role: "user", content: text }];
    } catch (error) {
        await conn.sendMessage(m.chat, {
            text: `Error: ${error.message}`,
        });
    }
};

handler.help = ['gpt <السؤال>'];
handler.tags = ['ai'];
handler.command = /^(kana|كاناه|كانا)$/i;
handler.limit = 3;
handler.register = false;

export default handler;
