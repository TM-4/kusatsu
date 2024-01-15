'use strict';

//画像
const imgs = ['img/01.png', 'img/02.png', 'img/03.png', 'img/04.png', 'img/05.png'];
const slideImg = document.getElementById('slide_img');
const prev = document.getElementById('prev');
const page = document.getElementById('page');
const next = document.getElementById('next');
let current = 0;

// //音声
const audios = ['audio/01.wav', 'audio/02.wav', 'audio/03.wav', 'audio/04.wav', 'audio/05.wav'];
const audio_start = document.getElementById('audio_start');

//グーグルマップ
const tGLs = ['https://maps.app.goo.gl/kGrfp1XSDrzHRPr29', 'https://maps.app.goo.gl/1J7ERiMutjVt3YoWA', 'https://maps.app.goo.gl/1J7ERiMutjVt3YoWA', 'https://maps.app.goo.gl/fCepToBdZYXL7AY88', 'https://maps.app.goo.gl/fCepToBdZYXL7AY88'];

const tGL = () => {
    const tG = tGLs[current];
    // window.location.href = tG;
    window.open(tG, '_blank');
}
slideImg.addEventListener('click', tGL);


page.textContent = `${current + 1}/${imgs.length}`;

next.addEventListener('click', () => {
    if (current + 1 < imgs.length) {
        current++;
        slideImg.src = imgs[current];
        audio_start.src = audios[current];
        audio_start.play();
    }

    page.textContent = `${current + 1}/${imgs.length}`;
});


prev.addEventListener('click', () => {
    if (current > 0) {
        current--;
        slideImg.src = imgs[current];
        audio_start.src = audios[current];
    }
    page.textContent = `${current + 1}/${imgs.length}`;
});
