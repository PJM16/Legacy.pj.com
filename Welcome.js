document.addEventListener("DOMContentLoaded", function () {
    //const sectionTitles = document.querySelectorAll(".section-title");
    //const toggleButtons = document.querySelectorAll(".toggle-button");
    const sectionButtons = document.querySelectorAll(".toggle-button");
    sectionButtons.forEach(button => {
        button.addEventListener("click", () => toggleSection(button.dataset.target));
    });
    
    const clockElement = document.querySelector(".clock");
    const shiftElement = document.getElementById("shift");
    const welcomeMessageElement = document.getElementById("welcome-message");
    
    // TurnoActual
    function updateClock() {
        const now = new Date();
        const hours = now.getHours();
        const minutes = now.getMinutes();
        const seconds = now.getSeconds();
        const formattedTime = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
        
        clockElement.textContent = formattedTime;

        const currentShift = 
            hours >= 5 && hours < 14 ? "Turno 1: 05:00 - 14:00" :
            hours >= 14 && hours < 23 ? "Turno 2: 14:00 - 23:00" : 
            "Sin turno";
        
        shiftElement.textContent = currentShift;

        setTimeout(updateClock, 1000);
    }
    
    updateClock();

    // Mensaje de bienvenida
    const welcomeMessages = [
        "¡Bienvenido! Esperamos que tengas un gran turno. 😉",
    "¡Hola! ¿Cómo ha sido tu día hasta ahora?",
    "¡Bienvenidos de vuelta! Listos para otro turno productivo. 👌",
    "¡Que tengas un excelente día en el centro de control!",
    "¡Hola! Recuerda tomar pequeños descansos durante tu turno. 👍",
    "Bienvenidos, guardianes de la seguridad.",
    "Hola, héroes anónimos de la vigilancia.",
    "¡Saludos! Prepárense para un turno seguro y productivo.",
    "Gracias por mantener un ojo vigilante en nuestra ciudad.",
    "¡Bienvenidos al centro del control! Su trabajo marca la diferencia.",
    "Operadores de vigilancia, su labor es nuestra tranquilidad.",
    "¡Buen inicio de turno! Su atención protege a la comunidad.",
    "Un turno más para garantizar la seguridad de todos.",
    "Bienvenidos al comando de observación, donde cada detalle importa.",
    "Su compromiso en la pantalla hace posible la paz en las calles.",
    "Operadores, su agudeza visual cuida de todos nosotros.",
    "Gracias por ser los ojos atentos que mantienen el orden.",
    "Bienvenidos al centro de monitoreo, donde la seguridad cobra vida.",
    "Su labor incansable fortalece la seguridad de nuestra ciudad.",
    "Héroes sin capa, gracias por proteger con miradas atentas.",
    "Un nuevo turno, una nueva oportunidad de ser nuestros ángeles guardianes.",
    "La seguridad comienza con ustedes. ¡Bienvenidos al turno!",
    "¡Hola, equipo de observación! La ciudad confía en su compromiso.",
    "Operadores, su atención es el escudo invisible de nuestra comunidad.",
    "Bienvenidos al centro del control, donde la seguridad es prioridad."
    ];

    let currentMessageIndex = 0;

    function updateWelcomeMessage() {
        welcomeMessageElement.textContent = welcomeMessages[currentMessageIndex];
        currentMessageIndex = (currentMessageIndex + 1) % welcomeMessages.length;
    }
    
    // Actualizar mensaje de bienvenida cada 5 minutos (300000 milisegundos)
    updateWelcomeMessage();
    setInterval(updateWelcomeMessage, 300000); // Cambiar el mensaje cada 5 minutos

});

function toggleSection(targetId) {
    const targetSection = document.getElementById(targetId);
    if (targetSection.style.display === "none" || targetSection.style.display === "") {
        targetSection.style.display = "block";
    } else {
        targetSection.style.display = "none";
    }
}