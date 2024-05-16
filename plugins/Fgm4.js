const fetch = require('node-fetch');

// يمكنك استبدال هذا بمفتاح API الخاص بك
const apiKey = 'AIzaSyCvPLrnZFP2hWLY62uLKuMyAGi4rPXwXC4';

// تعريف الدالة للبحث وتنزيل الفيديو
async function searchAndDownloadVideo(title) {
    try {
        // بحث عن الفيديو باستخدام API اليوتيوب
        const response = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(title)}&key=${apiKey}`);
        const data = await response.json();

        // الحصول على رابط الفيديو الأول في النتائج
        const videoId = data.items[0].id.videoId;
        const videoTitle = data.items[0].snippet.title;
        const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;

        // إرسال رابط الفيديو في الدردشة أو أي عملية أخرى ترغب فيها
        console.log(`العنوان: ${videoTitle}`);
        console.log(`رابط الفيديو: ${videoUrl}`);

        return videoUrl;
    } catch (error) {
        console.error('حدث خطأ أثناء البحث والتنزيل:', error);
        return null;
    }
}

// تحديد الـ handler command
const handler = {
    command: /^(mp4|yt|يوتيوب|يوت|فيد|فيديو)$/i,
    async handle(command, message) {
        // استخدم الدالة مع العنوان المراد البحث عنه
        const videoUrl = await searchAndDownloadVideo(message);

        // هنا يمكنك استخدام رابط الفيديو كما تشاء
        // على سبيل المثال، يمكنك إرساله في الدردشة أو استخدامه بأي طريقة أخرى
        if (videoUrl) {
            console.log('تم العثور على الفيديو وتنزيله:', videoUrl);
            // يمكنك فعل أي شيء آخر تريده هنا مع رابط الفيديو
        } else {
            console.log('لم يتم العثور على الفيديو');
            // يمكنك التعامل مع حالة عدم العثور على الفيديو هنا
        }
    },
};

module.exports = handler;
