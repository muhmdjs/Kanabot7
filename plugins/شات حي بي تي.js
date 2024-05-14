import fetch from 'node-fetch';
import uploadImage from '../lib/uploadImage.js';

const apiurl = 'https://api.openai.com/v1/engines/davinci-codex/completions'; // تحديث URL لـ Chat GPT
const apiKey = 'sk-proj-1oudPc3iGcYQTOH2yHeOT3BlbkFJnKvAo00mFFTNk02dENGY'; // ضع مفتاح API الخاص بك هنا

let handler = async (msg, { text, conn, usedPrefix, command }) => {
    if (!text && !(msg.quoted && msg.quoted.text)) {
        throw '❌ أدخل نصًا أو قم بالرد على رسالة بنص لاستخدام Chat GPT.\n\nمثال:\n' + usedPrefix + command + ' كيف الطقس اليوم؟';
    }

    try {
        const query = encodeURIComponent(text || msg.quoted.text);

        // إذا كان هناك صورة مرفقة، قم بمعالجتها هنا (كما في الكود الأصلي)
        let imageUrl = null;
        if ((msg.quoted || msg).mimetype || msg.mediaType || '') {
            let mimetype = (msg.quoted || msg).mimetype || msg.mediaType || '';
            if (mimetype.startsWith('video/')) return msg.reply('❌ يرجى الرد على صورة، لا فيديو!');
            const media = await (msg.quoted || msg).download();
            imageUrl = await uploadImage(media);
        }

        // استدعاء Chat GPT API
        const response = await fetch(apiurl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            },
            body: JSON.stringify({
                prompt: query,
                max_tokens: 150
            })
        });

        const data = await response.json();
        const reply = data.choices[0].text.trim();

        msg.reply(reply);

    } catch (error) {
        console.error('Error:', error);
        throw 'حدث خطأ في الاتصال بـ Chat GPT API';
    }
};

handler.help = ['chatgpt'];
handler.tags = ['AI'];
handler.command = ['chatgpt', 'شاتجيبيتي'];

export default handler;
