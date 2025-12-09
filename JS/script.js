        const playersData = [
            {
                id: 'kd',
                name: 'Kevin Durant',
                position: 'Forward',
                years: '2007–2016',
                imgUrl: './Media/Img/KD.jpg',
                bgPosition: 'center 20%', 
                videoUrl: "./Media/Video/KD.mp4",
                height: "6'11\"",
                weight: "240 lbs",
                wingspan: "7'5\"",
                style: "Unguardable 3-Level Scorer",
                impact: "Put OKC on the global map",
                details: [
                    '2014 NBA MVP',
                    '4x Scoring Champ (2010-12, 14)',
                    '5x All-NBA 1st Team (2010-14)',
                    '50-40-90 Club Member (2013)',
                    'Led OKC to 2012 NBA Finals',
                    '2x Olympic Gold (2012, 2016)'
                ]
            },
            {
                id: 'rw',
                name: 'Russell Westbrook',
                position: 'Guard',
                years: '2008–2019',
                imgUrl: './Media/Img/Russ.jpg',
                bgPosition: 'center 10%', 
                videoUrl: "./Media/Video/Russ.mp4",
                height: "6'4\"",
                weight: "200 lbs",
                wingspan: "6'8\"",
                style: "Relentless Athletic Force",
                impact: "Defined the team's intensity",
                details: [
                    '2017 NBA MVP',
                    'Avgd Triple-Double (2017-2019)',
                    '2x Scoring Champ (2015, 2017)',
                    '2x Assists Leader (2018, 2019)',
                    '2x All-Star Game MVP (2015, 16)',
                    'Franchise Leader in Points'
                ]
            },
            {
                id: 'jh',
                name: 'James Harden',
                position: 'Guard',
                years: '2009–2012',
                imgUrl: './Media/Img/Harden.avif',
                bgPosition: 'center 10%', 
                videoUrl: "./Media/Video/Harden.mp4",
                height: "6'5\"",
                weight: "220 lbs",
                wingspan: "6'11\"",
                style: "Crafty Playmaker & Scorer",
                impact: "Key 6th Man for Finals run",
                details: [
                    '2012 Sixth Man of the Year',
                    '2012 Olympic Gold Medalist',
                    '16.8 PPG off Bench (2012)',
                    'Key Closer in 2012 WCF',
                    '"The Beard" Originated Here',
                    'Drafted #3 Overall (2009)'
                ]
            },
            {
                id: 'si',
                name: 'Serge Ibaka',
                position: 'Forward/Center',
                years: '2009–2016',
                imgUrl: './Media/Img/Ibaka.jpg',
                bgPosition: 'center 3%', 
                videoUrl: "./Media/Video/Ibaka.mp4",
                height: "6'10\"",
                weight: "235 lbs",
                wingspan: "7'3\"",
                style: "Rim Protector & Spacer",
                impact: "Defensive Anchor of contenders",
                details: [
                    '2x NBA Blocks Leader (2012, 13)',
                    '3x All-Defensive 1st Team (2012-14)',
                    'Perfect 11/11 FG Game (2012)',
                    'Franchise Leader in Blocks',
                    '"Iblocka" Interior Defense',
                    'Elite Mid-range Sniper'
                ]
            },
             {
                id: 'nc',
                name: 'Nick Collison',
                position: 'Power Forward',
                years: '2003–2018',
                imgUrl: './Media/Img/NC.webp',
                bgPosition: 'center 10%', 
                videoUrl: "./Media/Video/NC.mp4",
                height: "6'10\"",
                weight: "255 lbs",
                wingspan: "7'2\"",
                style: "Gritty Defender & Screener",
                impact: "The Standard for Culture",
                details: [
                    'Jersey Retired #4 (2019)',
                    '14 Seasons w/ Franchise (2004-18)',
                    '"Mr. Thunder" Culture Setter',
                    'Elite Screen Setter & Defender',
                    '100% Hustle & Loyalty',
                    '2012 Finals Appearance'
                ]
            },
             {
                id: 'sga',
                name: 'Shai Gilgeous-Alexander',
                position: 'Guard',
                years: '2019–Present',
                imgUrl: './Media/Img/SGA.jpg',
                bgPosition: 'center 5%',
                videoUrl: "./Media/Video/SGA.mp4",
                height: "6'6\"",
                weight: "195 lbs",
                wingspan: "6'11\"",
                style: "Methodical Slasher & Mid-range",
                impact: "Leader of the New Era",
                details: [
                    '2025 NBA MVP',
                    '2025 Finals MVP',
                    '2025 NBA Champion',
                    '1x Scoring Champion (2025)',
                    '3x All-NBA 1st Team (2023-25)',
                    'Clutch Time Performer'
                ]
            }
        ];

        const container = document.getElementById('cards-container');

        function createPlayerCard(player) {
            const cardScene = document.createElement('div');
            cardScene.className = 'card-scene';

            const cardFlipper = document.createElement('div');
            cardFlipper.className = 'card-flipper';
            cardScene.appendChild(cardFlipper);

//Передня частина
            const cardFront = document.createElement('div');
            cardFront.className = 'card-face card-front';
            cardFront.style.backgroundImage = `url('${player.imgUrl}')`;
            
            if (player.bgPosition) {
                cardFront.style.backgroundPosition = player.bgPosition;
            }
            
            cardFront.innerHTML = `
                <video class="player-video" 
                       src="${player.videoUrl}" 
                       poster="${player.imgUrl}" 
                       loop 
                       muted 
                       playsinline>
                </video>
                <div class="front-content">
                    <h2 class="text-3xl font-bold mb-1 text-white shadow-sm tracking-wide uppercase">${player.name}</h2>
                    <p class="text-base font-medium text-gray-200 uppercase tracking-widest font-sans">${player.position}</p>
                    <div class="w-10 h-1 bg-[#ef5b40] mx-auto mt-2 rounded-full"></div>
                </div>
            `;
            cardFlipper.appendChild(cardFront);

//Зворотній бік
            const cardBack = document.createElement('div');
            cardBack.className = 'card-face card-back';
            
            const ul = player.details.map(detail => 
                `<li class="mb-3 flex items-start justify-center w-full">
                    <span class="text-[#ef5b40] mr-2 text-lg font-bold shrink-0">✓</span>
                    <span class="text-gray-700 font-medium text-sm leading-snug pt-0.5 font-sans text-center">${detail}</span>
                </li>`
            ).join('');

            cardBack.innerHTML = `
                <div class="w-full h-full flex flex-col items-center">
                    <h3 class="text-2xl font-extrabold text-[#007ac1] mb-1 tracking-wide uppercase">${player.name}</h3>
                    <p class="text-gray-500 text-xs mb-3 font-mono font-bold">${player.years}</p>
                    
                    <!-- New Info Stats Section with Wingspan -->
                    <div class="w-full bg-gray-50 rounded-lg p-2 mb-3 border border-gray-100 shadow-sm">
                        <div class="flex justify-around text-xs font-bold text-gray-600 border-b border-gray-200 pb-1 mb-1">
                            <span class="flex items-center gap-1" title="Height">📏 ${player.height}</span>
                            <span class="flex items-center gap-1" title="Weight">⚖️ ${player.weight}</span>
                            <span class="flex items-center gap-1" title="Wingspan">🦅 ${player.wingspan}</span>
                        </div>
                        <div class="text-xs text-center">
                            <p class="text-[#007ac1] font-bold uppercase tracking-wide text-[10px]">Style</p>
                            <p class="text-gray-700 mb-1 italic leading-tight">${player.style}</p>
                            <p class="text-[#ef5b40] font-bold uppercase tracking-wide text-[10px]">Role</p>
                            <p class="text-gray-700 italic leading-tight">${player.impact}</p>
                        </div>
                    </div>

                    <!-- Clean List Structure - Centered Content -->
                    <ul class="w-full list-none p-0 m-0 overflow-y-auto custom-scrollbar flex-grow">
                        ${ul}
                    </ul>
                </div>
                <p class="absolute bottom-3 text-[10px] text-gray-400 uppercase tracking-wider font-sans">Click to flip back</p>
            `;
            cardFlipper.appendChild(cardBack);

//Перевертання
            cardScene.addEventListener('click', () => {
                cardScene.classList.toggle('is-flipped');
            });

//Відос
            const videoElement = cardFront.querySelector('video');

            cardScene.addEventListener('mouseenter', () => {
                if (videoElement) {
                    videoElement.classList.add('video-playing');
                    const playPromise = videoElement.play();
                    if (playPromise !== undefined) {
                        playPromise.catch(error => {
                            console.log('Autoplay prevented by browser:', error);
                            videoElement.classList.remove('video-playing');
                        });
                    }
                }
            });

            cardScene.addEventListener('mouseleave', () => {
                if (videoElement) {
                    videoElement.classList.remove('video-playing');
                    setTimeout(() => {
                        videoElement.pause();
                        videoElement.currentTime = 0;
                    }, 500);
                }
            });

            return cardScene;
        }

        playersData.forEach(player => {
            const cardElement = createPlayerCard(player);
            container.appendChild(cardElement);
        });

//Первертання Фіналок
        document.querySelectorAll('.js-finals-card').forEach(card => {
            card.addEventListener('click', () => {
                card.classList.toggle('is-flipped');
            });
        });

//Кнопка вверх
        const mybutton = document.getElementById("scrollTopBtn");

        //Поява при скролі
        window.onscroll = function() {
            scrollFunction();
        };

        function scrollFunction() {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                mybutton.style.display = "flex";
            } else {
                mybutton.style.display = "none";
            }
        }

        mybutton.addEventListener("click", function() {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });