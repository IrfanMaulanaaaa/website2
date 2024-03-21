const getGreeting = () => {
    const greetings = {
        morning: "Good morning!",
        afternoon: "Good afternoon!",
        evening: "Good evening!",
    };

    const currentHour = new Date().getHours();

    if (currentHour >= 5 && currentHour < 12)
        return greetings.morning;
    else if (currentHour >= 12 && currentHour < 17)
        return greetings.afternoon;
    else
        return greetings.evening;
}

// Mendapatkan pesan salam dari fungsi getGreeting
const greetingMessage = getGreeting();

// Menggunakan Typeit
new TypeIt('#animate-type', {
    strings: greetingMessage, 
    speed: 100,
    waitUntilVisible: true,
    loop: true
}).go();
