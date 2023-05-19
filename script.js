function learnMorePage() {
    window.location.href = 'learn-more.html';

}

function GoToLandPg() {
    window.location.href = 'index.html';
}

function MenuSection() {
    var x = document.getElementById('menu-page');
    if (x.style.display === "block") {
        x.style.display = "none"; 
    } 
    else {
        x.style.display = "block";
    }
    
}

function GoToBusinesses() {
    window.location.href = 'Businesses-Page.html';
}