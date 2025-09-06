document.addEventListener('DOMContentLoaded', () => {
    const popupTexts = {
        "Karina": {
            "title": "Карина",
            "subtitle": "Досвід викладання 20 років",
            "description": "Досвід роботи з дітьми, підлітками та дорослими. Підготовка до мовних тестів B1–C1, інтерактивні завдання для дітей. Індивідуальний підхід до кожного учня.",
            "image": "images/karina.JPG"
        },
        "Marina": {
            "title": "Марина",
            "subtitle": "Досвід викладання 10 років",
            "description": "Досвід роботи з дітьми, підлітками та дорослими. Підготовка до мовних тестів B1–C1, інтерактивні завдання для дітей. Індивідуальний підхід до кожного учня.",
            "image": "images/maryna.JPG"
        },
        "Alina": {
            "title": "Аліна",
            "subtitle": "Досвід викладання 5 років",
            "description": "Досвід роботи з дітьми, підлітками та дорослими. Підготовка до мовних тестів B1–C1, інтерактивні завдання для дітей. Індивідуальний підхід до кожного учня.",
            "image": "images/alina.JPG"
        },
        "Olha": {
            "title": "Ольга",
            "subtitle": "Досвід викладання 7 років",
            "description": "Досвід роботи з дітьми, підлітками та дорослими. Підготовка до мовних тестів B1–C1, інтерактивні завдання для дітей. Індивідуальний підхід до кожного учня.",
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
