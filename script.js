document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    const currentYearSpan = document.getElementById('currentYear');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // Set last updated date
    const lastUpdatedSpan = document.getElementById('lastUpdated');
    if (lastUpdatedSpan) {
        // For a true 90s feel, this might be a static date or manually updated.
        // For dynamic, we use today's date as a placeholder.
        // In a real 90s scenario, this would often be hardcoded or server-generated.
        // Let's simulate a "last built" date by using a fixed plausible date.
        const lastModDate = new Date(document.lastModified);
        // Fallback to a somewhat retro date if lastModified is not useful (e.g., Jan 1, 1970)
        const plausibleRetroDate = new Date(1996, 9, 23); // October 23, 1996

        let displayDate;
        if (lastModDate.getFullYear() < 1990) { // If lastModified gives an epoch date or similar
            displayDate = plausibleRetroDate;
        } else {
            displayDate = lastModDate;
        }
        
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        lastUpdatedSpan.textContent = displayDate.toLocaleDateString('de-DE', options);
    }
});

// Simple function for placeholder pages to link back
function goBack() {
    window.history.back();
}