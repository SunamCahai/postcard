// Ждем загрузки DOM, чтобы скрипт видел все кнопки
document.addEventListener('DOMContentLoaded', () => {
    const startBtn = document.getElementById('start-btn');
    const introOverlay = document.getElementById('intro-overlay');
    const mainContainer = document.getElementById('main-container');
    const bouquet = document.getElementById('bouquet');
    const greeting = document.getElementById('greeting');
    const bgMusic = document.getElementById('bg-music');
    const btnGroup = document.getElementById('btn-group');
    
    const soundYox = document.getElementById('sound-yox');
    const soundVar = document.getElementById('sound-var');

    // Безопасное добавление кликов (проверяем, существуют ли кнопки)
    const yoxBtn = document.getElementById('btn-yox');
    const varBtn = document.getElementById('btn-var');

    if (yoxBtn) {
        yoxBtn.addEventListener('click', () => {
            if (soundYox) { soundYox.currentTime = 0; soundYox.play(); }
        });
    }

    if (varBtn) {
        varBtn.addEventListener('click', () => {
            if (soundVar) { soundVar.currentTime = 0; soundVar.play(); }
        });
    }

    function revealText() {
        const text = "Qardaş, pulun varmı?"; 
        greeting.innerHTML = "";
        const chars = text.split("");

        chars.forEach((char, i) => {
            const span = document.createElement("span");
            span.textContent = char === " " ? "\u00A0" : char; 
            span.className = "letter";
            greeting.appendChild(span);

            setTimeout(() => {
                span.classList.add('visible');
                if (i === chars.length - 1) {
                    setTimeout(() => {
                        if (btnGroup) btnGroup.classList.add('visible');
                    }, 800); 
                }
            }, i * 150); 
        });
    }

    function createPetal() {
        const petal = document.createElement('div');
        petal.className = 'petal';
        const isRed = Math.random() > 0.5;
        petal.style.width = (Math.random() * 15 + 10) + 'px';
        petal.style.height = (Math.random() * 15 + 10) + 'px';
        petal.style.background = isRed ? '#e31b23' : '#ffffff';
        petal.style.borderRadius = '50% 0 50% 50%';
        petal.style.opacity = Math.random() * 0.5 + 0.3;
        petal.style.left = Math.random() * 100 + 'vw';
        petal.style.animationDuration = (Math.random() * 3 + 4) + 's';
        document.body.appendChild(petal);
        setTimeout(() => petal.remove(), 7000);
    }

    startBtn.addEventListener('click', () => {
        introOverlay.style.opacity = '0';
        setTimeout(() => {
            introOverlay.style.display = 'none';
            mainContainer.style.opacity = '1';
            bouquet.classList.add('bloom');
            
            setTimeout(revealText, 1000);
            setInterval(createPetal, 200);
        }, 1000);

        if (bgMusic) bgMusic.play().catch(e => console.log("Music play failed:", e));
    });
});
