document.addEventListener('DOMContentLoaded', () => {
    const popupTexts = {
        "Karina": {
            "title": "Карина",
            "subtitle": "",
            "description": "Навчалася в Німеччині понад 3 роки, працюю з підлітками та дорослими (A1–B1); Допомагаю заговорити впевнено, зрозуміло пояснюю граматику, готую до життя, навчання та роботи в Німеччині; Використовую інтерактивні матеріали та сучасні методи навчання.",
            "image": "images/karina.JPG"
        },
        "Marina": {
            "title": "Марина",
            "subtitle": "Досвід викладання 5 років",
            "description": "Досвід викладання 5 років, проживаю в Австрії; Освіта: Вільнюський та Познанський університети, сертифікат ÖIF; Рівні: A1–B1.1, підготовка до іспитів та підвищення рівня.",
            "image": "images/maryna.JPG"
        },
        "Alina": {
            "title": "Аліна",
            "subtitle": "Досвід викладання понад 2 роки",
            "description": "Викладаю понад 2 роки, бакалавр німецької філології (Львів); Проживала в Німеччині, досвід роботи з носіями; Рівні: A1, A2, B1, інтерактивні заняття (Miro, Quizlet); Працюю з дітьми від 8 років, підлітками та дорослими.",
            "image": "images/alina.JPG"
        },
        "Olha": {
            "title": "Ольга",
            "subtitle": "",
            "description": "Сертифікат C1, досвід роботи з дітьми, підлітками та дорослими; Підготовка до мовних тестів B1–C1, інтерактивні завдання для дітей; Індивідуальний підхід до кожного учня.",
            "image": "images/olha.JPG"
        }
    }
    
    const popup = document.getElementById('customPopupTeacher');
    const triggers = document.querySelectorAll('[data-biography]');

    function openPopup(trigger) {
        const popupText = popupTexts[trigger.dataset.biography];
        
        popup.querySelector('.custom-popup__title').textContent = popupText.title;
        popup.querySelector('.custom-popup__subtitle').textContent = popupText.subtitle;
        popup.querySelector('.custom-popup__desc').textContent = popupText.description;
        popup.querySelector('.avatar img').src = popupText.image;

        popup.classList.add('open')
        document.body.style.overflow = 'hidden';
    }

    function close() {
        popup.classList.remove('open');
        document.body.style.overflow = 'auto';
    }

    triggers.forEach(trigger => {
        trigger.addEventListener('click', () => openPopup(trigger));
    });

    popup.addEventListener('click', (e) => {
        if (e.target === popup || e.target.closest('[data-close]')) close();
    });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') close();
    });

});
