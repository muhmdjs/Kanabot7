import fetch from 'node-fetch';

const handler = async (m, { conn, args }) => {
    if (!args[0]) throw 'الرجاء إدخال اسم الفيديو!';

    try {
        const videoName = args.join(' ');
        const response = await fetch(`https://www.googleapis.com/youtube/v3/search?q=${encodeURIComponent(videoName)}&key=AIzaSyCvPLrnZFP2hWLY62uLKuMyAGi4rPXwXC4&part=snippet&type=video`);
        const data = await response.json();
        
        if (!data.items || data.items.length === 0) {
            throw 'لم يتم العثور على أي نتائج لهذا الفيديو.';
        }

        const videoId = data.items[0].id.videoId;
        const videoTitle = data.items[0].snippet.title;
        const downloadLink = `https://www.youtube.com/watch?v=${videoId}`;

        // تنزيل مقطع الفيديو
        const videoBuffer = await (await fetch(`https://www.flvto.biz/download-by-url?url=${downloadLink}`)).buffer();

        // إرسال مقطع الفيديو في الدردشة
        await conn.sendMessage(m.chat, videoBuffer, 'videoMessage', { quoted: m, caption: `تم العثور على الفيديو: *${videoTitle}*` });
    } catch (error) {
        await conn.sendMessage(m.chat, {
            text: `حدث خطأ: ${error}`
        });
    }
};

handler.command = /^فيديو$/i;
export default handler;
