    window.alert("Hello world!");

    const btnMobile = document.getElementById("btn_mobile");
    
    
    function toggleMenu() {
        const nav = document.getElementById("nav");
        nav.classlist.toggle('active');
    }
    
    btnMobile.addEventListener('click', toggleMenu);
    