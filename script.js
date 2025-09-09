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


    // tg form
    const bot_token = '6406654898:AAH01hMh8y8CqJP55D6XtLUYOan7DQh-KeU'
    const chat_id = '928132950'

    const forms = document.querySelectorAll('.tg-form');

    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            let message = '';
            if (form.classList.contains('popup-form2')) {
                const formPhone = form.elements['user-phone'].value;

                if (!formPhone) {
                    alert('Заповніть всі поля');
                    return;
                }

                message = `%0AНомер телефону: ${formPhone}`;
            } else{
                const formName = form.elements['user-name'].value;
                const formPhone = form.elements['user-phone'].value;
                const formEmail = form.elements['user-email'].value;

                if (!formName || !formPhone || !formEmail) {
                    alert('Заповніть всі поля');
                    return;
                }

                message = `%0AІм'я: ${formName}%0AНомер телефону: ${formPhone}%0AEmail: ${formEmail}`;

            }
    
    
            const url = `https://api.telegram.org/bot${bot_token}/sendMessage?chat_id=${chat_id}&text=${message}`;
    
            fetch(url, {
                method: 'POST',
            })
                .then((response) => {
                    if (response.status == 404) {
                        alert('Помилка при надсиланні даних');
                    } else if (response.status == 200) {
                        alert('Дані успішно надіслано');
                        if (form.classList.contains('popup-form2')) {
                            form.reset();
                            closePopup();
                        } else {
                            window.location.reload();
                        }
                    }
                })
                .catch((error) => {
                    console.error('Помилка при надсиланні даних:', error);
                });
        });
    });

    // Popup functionality
    const openPopupBtn = document.querySelector('#open-popup-btn');
    const formPopup = document.querySelector('.my-popup-form');
    const closePopupBtn = formPopup ? formPopup.querySelector('.popup-close') : null;
  
    function closePopup() {
        if (formPopup) {
            formPopup.classList.remove('open');
            document.body.style.overflow = 'auto';
        }
    }
    
    // Open popup when button is clicked
    if (openPopupBtn) {
        openPopupBtn.addEventListener('click', (e) => {
            e.preventDefault();
            if (formPopup) {
                formPopup.classList.add('open');
                document.body.style.overflow = 'hidden';
            }
        });
    }
    
    // Close popup when X button is clicked
    if (closePopupBtn) {
        closePopupBtn.addEventListener('click', (e) => {
            e.preventDefault();
            closePopup();
        });
    }
    
    // Close popup when clicking outside the form
    if (formPopup) {
        formPopup.addEventListener('click', (e) => {
            if (e.target === formPopup) {
                closePopup();
            }
        });
    }
    
    // Close popup when pressing Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && formPopup && formPopup.classList.contains('open')) {
            closePopup();
        }
    });

});

