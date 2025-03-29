let loggedin=false;
alert_course(0);
alert_course(1);
alert_course(2);
function alert_course(i){
document.addEventListener("DOMContentLoaded", function() {
document.getElementsByClassName('course')[i].onclick=function(){
if (!loggedin){
    document.getElementsByClassName('alert-container')[0].style.display="block";
    document.getElementsByClassName('alert-container')[0].scrollIntoView({ behavior: 'smooth' });
    document.getElementById('ok-button').onclick=function(){
    document.getElementsByClassName('alert-container')[0].style.display="none";
    }
}    
}})};
document.addEventListener("DOMContentLoaded", function() {
document.getElementById('login').onclick=function(){
        document.getElementById('login-email').value="";
        document.getElementById('login-password').value="";
}});
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('contact-us').onclick=function(){
        let isVisible=(document.getElementsByClassName('contact-content')[0].style.display==='block' || document.getElementsByClassName('login-box')[0].style.display==='block' || document.getElementsByClassName('signup-box')[0].style.display==='block' );
        document.getElementsByClassName('contact-content')[0].style.display=isVisible ? 'none': 'block';
        document.getElementById('name').value="";
        document.getElementById('email').value="";
        document.getElementById('paragraph').value="";
        
    }});
    document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('contactbtn').onclick = function() {
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var messageElement = document.getElementsByClassName('message')[0];
        if (name !== '' && email !== '' && email.includes('@')) {
                messageElement.style.display = (getComputedStyle(messageElement).display === 'none') ? 'block' : 'none';

        }}});
        document.addEventListener("DOMContentLoaded", function() {
        document.getElementById('sendbtn').onclick = function() {
        let paragraph=document.getElementById('paragraph').value;
        let name = document.getElementById('name').value;
        let email = document.getElementById('email').value;

        if ( paragraph!='' && name !=='' && email !=='' && email.includes('@')) {
               document.getElementById('message')='none';
        } 
    };});
    document.addEventListener("DOMContentLoaded", function() {
    document.getElementsByClassName('close-icon')[0].onclick=function(){
        document.getElementsByClassName('contact-content')[0].style.display= 'none';
    }});
    document.addEventListener("DOMContentLoaded", function() {
    document.getElementsByClassName('close-icon')[1].onclick=function(){
        document.getElementsByClassName('message')[0].style.display= 'none';
    }});
    document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('signup').onclick=function(){
        document.getElementById('signup-username').value="";
        document.getElementById('signup-email').value="";
        document.getElementById('signup-password1').value="";
        document.getElementById('signup-password2').value="";
    }});
    function goToPageSignUp() {
        window.location.href = "SignUp.html"; 
    }
    function goToPageWelcome() {
        window.location.href = "welcome.html"; 
    }
    function goToPageLogin() {
        window.location.href = "Login.html"; 
    }
    function goToPageEnglishCourses() {
        if(loggedin)
        window.location.href = "Englishcourses.html"; 
    }
    function goToPageSpanishQuiz() {
        if(loggedin)
        window.location.href = "SpanishQuiz.html"; 
    }
    function goToPageFrenchCourses() {
        if(loggedin)
        window.location.href = "FrenchCourses.html"; 
    }
    