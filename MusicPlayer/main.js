const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const PLAYER_STORAGE_KEY = 'F8_PLAYER';

const player = $('.player');
const cd = $('.cd');
const heading = $('header h2');
const cdThumb = $('.cd-thumb');
const audio = $('#audio');
const playBtn = $('.btn-toggle-play');
const progress = $('#progress');
const prevBtn = $('.btn-prev');
const nextBtn = $('.btn-next');
const randomBtn = $('.btn-random');
const repeatBtn = $('.btn-repeat');
const playlist = $('.playlist');

const app = {
    currentIndex: 0,
    isPlaying: false,
    isRandom: false,
    isRepeat: false,
    config: JSON.parse(localStorage.getItem(PLAYER_STORAGE_KEY)) || {},
    songs: [
        {
            name: 'THÍCH EM HƠI NHIỀU',
            singer: 'WREN EVANS',
            path: './assets/music/music39.mp3',
            image: './assets/img/img39.jpg'
        },
        {
            name: 'Nước Mắt Em Lau Bằng Tình Yêu Mới',
            singer: 'Da LAB ft. Tóc Tiên ',
            path: './assets/music/music40.mp3',
            image: './assets/img/img40.jpg'
        },
        {
            name: 'TÂM SỰ TUỔI 30 ',
            singer: 'TRỊNH THĂNG BÌNH',
            path: './assets/music/music41.mp3',
            image: './assets/img/img41.jpg'
        },
        {
            name: 'Thương Nhau Nhé',
            singer: 'Thùy Chi ft. Đức Phúc',
            path: './assets/music/music42.mp3',
            image: './assets/img/img42.jpg'
        },
        {
            name: 'All Too Well',
            singer: 'Taylor Swift',
            path: './assets/music/music39.mp3',
            image: './assets/img/img39.jpg'
        },
        {
            name: 'Tolerate It',
            singer: 'Taylor Swift',
            path: './assets/music/music7.mp3',
            image: './assets/img/img7.jpg'
        },
        {
            name: "'Tis The Damn Season",
            singer: 'Taylor Swift',
            path: './assets/music/music7_2.mp3',
            image: './assets/img/img7.jpg'
        },
        {
            name: 'Cardigan',
            singer: 'Taylor Swift',
            path: './assets/music/music8.mp3',
            image: './assets/img/img8.jpg'
        },
        {
            name: 'Exile',
            singer: 'Taylor Swift',
            path: './assets/music/music9.mp3',
            image: './assets/img/img9.jpg'
        },
        {
            name: 'Hoax',
            singer: 'Taylor Swift',
            path: './assets/music/music10.mp3',
            image: './assets/img/img10.jpg'
        },
        {
            name: 'August',
            singer: 'Taylor Swift',
            path: './assets/music/music11.mp3',
            image: './assets/img/img11.jpg'
        },
        {
            name: 'Beautiful Ghosts',
            singer: 'Taylor Swift',
            path: './assets/music/music12.mp3',
            image: './assets/img/img12.jpg'
        },
        {
            name: 'Daylight',
            singer: 'Taylor Swift',
            path: './assets/music/music14.mp3',
            image: './assets/img/img14.jpg'
        },
        {
            name: 'Cruel Summer',
            singer: 'Taylor Swift',
            path: './assets/music/music15.mp3',
            image: './assets/img/img15.jpg'
        },
        {
            name: 'Cornelia Street',
            singer: 'Taylor Swift',
            path: './assets/music/music16.mp3',
            image: './assets/img/img15.jpg'
        },
        {
            name: 'False God',
            singer: 'Taylor Swift',
            path: './assets/music/music17.mp3',
            image: './assets/img/img15.jpg'
        },
        {
            name: 'Afterglow',
            singer: 'Taylor Swift',
            path: './assets/music/music18.mp3',
            image: './assets/img/img15.jpg'
        },
        {
            name: 'Enchanted',
            singer: 'Taylor Swift',
            path: './assets/music/music19.mp3',
            image: './assets/img/img19.jpg'
        },
        {
            name: 'Delicate',
            singer: 'Taylor Swift',
            path: './assets/music/music20.mp3',
            image: './assets/img/img20.jpg'
        },
        {
            name: 'End Game',
            singer: 'Taylor Swift',
            path: './assets/music/music21.mp3',
            image: './assets/img/img21.jpg'
        },
        {
            name: '...Ready For It?',
            singer: 'Taylor Swift',
            path: './assets/music/music22.mp3',
            image: './assets/img/img22.jpg'
        },
        {
            name: 'Look What You Made Me Do',
            singer: 'Taylor Swift',
            path: './assets/music/music23.mp3',
            image: './assets/img/img23.jpg'
        },
        {
            name: 'New Romantics',
            singer: 'Taylor Swift',
            path: './assets/music/music24.mp3',
            image: './assets/img/img24.jpg'
        },
        {
            name: 'Bad Blood',
            singer: 'Taylor Swift',
            path: './assets/music/music25.mp3',
            image: './assets/img/img25.jpg'
        },
        {
            name: 'Style',
            singer: 'Taylor Swift',
            path: './assets/music/music26.mp3',
            image: './assets/img/img26.jpg'
        },
        {
            name: 'Blank Space',
            singer: 'Taylor Swift',
            path: './assets/music/music27.mp3',
            image: './assets/img/img27.jpg'
        },
        {
            name: 'Red',
            singer: 'Taylor Swift',
            path: './assets/music/music28.mp3',
            image: './assets/img/img28.jpg'
        },
        {
            name: ' I Knew You Were Trouble',
            singer: 'Taylor Swift',
            path: './assets/music/music29.mp3',
            image: './assets/img/img29.jpg'
        },
        {
            name: 'We Are Never Ever Getting Back Together',
            singer: 'Taylor Swift',
            path: './assets/music/music30.mp3',
            image: './assets/img/img30.jpg'
        },
        {
            name: 'You Belong With Me',
            singer: 'Taylor Swift',
            path: './assets/music/music31.mp3',
            image: './assets/img/img31.jpg'
        },
        {
            name: 'Without Me',
            singer: 'Halsey',
            path: './assets/music/music32.mp3',
            image: './assets/img/img32.jpg'
        },
        {
            name: 'God Is A Woman ',
            singer: 'Ariana Grande',
            path: './assets/music/music33.mp3',
            image: './assets/img/img33.jpg'
        },
        {
            name: 'Wolves',
            singer: 'Selena Gomez, Marshmello',
            path: './assets/music/music34.mp3',
            image: './assets/img/img34.jpg'
        },
        {
            name: 'Fetish',
            singer: ' Fetish ft. Gucci Mane',
            path: './assets/music/music35.mp3',
            image: './assets/img/img35.jpg'
        },
        {
            name: "It Ain't Me",
            singer: 'Kygo, Selena Gomez',
            path: './assets/music/music36.mp3',
            image: './assets/img/img36.jpg'
        },
        {
            name: "Closer",
            singer: 'The Chainsmokers ft. Halsey',
            path: './assets/music/music37.mp3',
            image: './assets/img/img37.jpg'
        },
        {
            name: "Love Me Like You Do",
            singer: 'Ellie Goulding',
            path: './assets/music/music38.mp3',
            image: './assets/img/img38.jpg'
        },
        {
            name: "Havana",
            singer: 'Camila Cabello',
            path: './assets/music/music1.mp3',
            image: './assets/img/img1.jpg'
        },
        {
            name: "Fly Away",
            singer: 'TheFatRat; Anjulie',
            path: './assets/music/music2.mp3',
            image: './assets/img/img2.jpg'
        },
        {
            name: "2 Triệu Năm",
            singer: 'Đen, Biên',
            path: './assets/music/music3.mp3',
            image: './assets/img/img3.jpg'
        },
        {
            name: "Attention",
            singer: 'Charlie Puth',
            path: './assets/music/music4.mp3',
            image: './assets/img/img4.jpg'
        },
        {
            name: "Nevada",
            singer: 'Vicetone, Cozi Zuehlsdorff',
            path: './assets/music/music43.mp3',
            image: './assets/img/img43.jpg'
        },
    ],
    setConfig: function(key, value) {
        this.config[key] = value;
        localStorage.setItem(PLAYER_STORAGE_KEY, JSON.stringify(this.config));
    },
    render: function() {
        const htmls = this.songs.map((song, index) => {
            return `
                <div class="song ${index === this.currentIndex ? 'active' : ''}" data-index="${index}">
                    <div class="thumb"
                        style="background-image: url('${song.image}')">
                    </div>
                    <div class="body">
                        <h3 class="title">${song.name}</h3>
                        <p class="author">${song.singer}</p>
                    </div>
                    <div class="option">
                        <i class="fas fa-ellipsis-h"></i>
                    </div>
                </div>
            `;
        })
        playlist.innerHTML = htmls.join('');
    },
    defineProperties: function() {
        Object.defineProperty(this, 'currentSong', {
            get: function() {
                return this.songs[this.currentIndex]; 
            }
        })
    },
    handleEvents: function() {
        const _this = this;
        const cdWidth = cd.offsetWidth;

        // Xử lý cd quay/dừng
        const cdThumbAnimate = cdThumb.animate([
            {transform: 'rotate(360deg)'}
        ], {
            duration: 10000, //10 seconds
            iterations: Infinity, // loop vô hạn
        })
        cdThumbAnimate.pause();

        // Xử lý phóng to thu nhỏ cd
        document.onscroll = function() {
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            const newCdWidth = cdWidth - scrollTop;
            
            cd.style.width = newCdWidth > 0 ? newCdWidth + 'px' : 0;
            cd.style.opacity = newCdWidth/cdWidth;
        };

        //Xử lý khi click play
        playBtn.onclick = function() {
            if (_this.isPlaying) {
                audio.pause();
            } else {
                audio.play();
            }
        };

        // Khi song được play
        audio.onplay = function() {
            _this.isPlaying = true;
            player.classList.add('playing');
            cdThumbAnimate.play();
        };

        // Khi song bị pause 
        audio.onpause = function() {
            _this.isPlaying = false;
            player.classList.remove('playing');
            cdThumbAnimate.pause();
        };

        // Khi tiến độ bài hát thay đổi
        audio.ontimeupdate = function() {
            if(audio.duration) {
                const progessPercent = Math.floor(audio.currentTime/audio.duration*100);
                progress.value = progessPercent;
            }
        };

        // Xử lý khi tua bài hát
        progress.oninput = function(e) {
            const seekTime = e.target.value;
            audio.currentTime = seekTime/100*audio.duration;
        };

        // Khi next bài hát
        nextBtn.onclick = function() {
            if (_this.isRandom) {
                _this.playRandomSong();
            } else {
                _this.nextSong();
            }
            audio.play();
            _this.render();
            _this.scrollToActiveSong();    
        };

        // Khi prev bài hát
        prevBtn.onclick = function() {
            if (_this.isRandom) {
                _this.playRandomSong();
            } else {
                _this.prevSong();
            }
            audio.play();
            _this.render();
            _this.scrollToActiveSong();
        };

        // Xử lý bật tắt random song
        randomBtn.onclick = function(e) {
            _this.isRandom = !_this.isRandom;
            _this.setConfig('isRandom', _this.isRandom);
            randomBtn.classList.toggle('active', _this.isRandom);
        };

        // Xử lý phát lại 1 bài hát 
        repeatBtn.onclick = function() {
            _this.isRepeat = !_this.isRepeat;
            _this.setConfig('isRepeat', _this.isRepeat);
            repeatBtn.classList.toggle('active', _this.isRepeat);
        };

        // Xử lý next song khi audio ended
        audio.onended = function() {
            if (_this.isRepeat) {
                audio.play();
            } else {
                nextBtn.click();
            }
        };

        // Lắng nghe click vào playlist
        playlist.onclick = function(e) {
            const songNode = e.target.closest('.song:not(.active)');
            const optionNodeActive =  e.target.closest('.option');

            if ( songNode || optionNodeActive ) {
                // Xử lý khi click vào song
                if (songNode) {
                    _this.currentIndex = Number(songNode.dataset.index); 
                    // songNode.dataset.index sẽ trả về string -> cần convert qua number
                    _this.loadCurrentSong();
                    _this.render();
                    audio.play();
                }

                // Xử lý khi click vào Option Active
                if(optionNodeActive) {

                }
            }
        };
    },
    scrollToActiveSong: function() {
        setTimeout(() => {
            $('.song.active').scrollIntoView({
                behavior: 'smooth',
                block: 'end',
            });
        }, 500)
    },
    loadCurrentSong: function() {
        heading.textContent = this.currentSong.name;
        cdThumb.style.backgroundImage = `url('${this.currentSong.image}')`;
        audio.src = this.currentSong.path;
    },
    loadConfig: function() {
        this.isRandom = this.config.isRandom;
        this.isRepeat = this.config.isRepeat;

        // Hợp nhất cấu hình của config vào this
        // Object.assign(this , this.config)
    },
    nextSong: function() {
        this.currentIndex++;
        if(this.currentIndex >= this.songs.length) {
            this.currentIndex = 0;
        }
        this.loadCurrentSong();
    },
    prevSong: function() {
        this.currentIndex--;
        if(this.currentIndex < 0) {
            this.currentIndex = this.songs.length - 1;
        }
        this.loadCurrentSong();
    },
    playRandomSong: function() {
        let newIndex;
        do {
            newIndex = Math.floor(Math.random() * this.songs.length);
        } while (newIndex === this.currentIndex);
        this.currentIndex = newIndex;
        this.loadCurrentSong();
    },
    start: function() {
        // Gán cấu hình từ config vào app
        this.loadConfig();

        // Định nghĩa các thuộc tính cho Object
        this.defineProperties();

        // Lắng nghe/ xử lý các sự kiến
        this.handleEvents();

        // Tải thông tin bài hát đầu tiên vào UI khi chạy ứng dụng
        this.loadCurrentSong();

        // Render lại playlist
        this.render();

        // Hiển thị trạng thái ban đầu của button repeat & random
        repeatBtn.classList.toggle('active', this.isRepeat);
        randomBtn.classList.toggle('active', this.isRandom)
    }
}

app.start();