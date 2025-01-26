

function calculateSaturdayToSunday() {
    const today = new Date();
    const dayOfWeek = today.getDay();
    const daysUntilSaturday = (6 - dayOfWeek + 7) % 7;
    const daysUntilSunday = (0 - dayOfWeek + 7) % 7;

    return {
        daysUntilSaturday: daysUntilSaturday,
        daysUntilSunday: daysUntilSunday
    };
}
