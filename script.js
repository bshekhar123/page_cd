document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');
    const navItems = document.querySelectorAll('.nav-item');

    // Handle scrolling to make navbar full black
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('full-black');
        } else {
            navbar.classList.remove('full-black');
        }
    });

    // Handle nav item click and highlight
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            navItems.forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');
        });
    });


    // script.js

document.addEventListener('DOMContentLoaded', function() {
    const scrollToFormButton = document.querySelector('.registration-button');
    
    scrollToFormButton.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default anchor behavior
        
        // Get the registration form section
        const formSection = document.querySelector('#registration-form');
        
        // Smooth scroll to the registration form section
        window.scrollTo({
            top: formSection.offsetTop - 50, // Adjust -50px for slight scroll adjustment
            behavior: 'smooth'
        });
    });
});


// document.querySelectorAll('.nav-item').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//         e.preventDefault();

//         document.querySelector(this.getAttribute('href')).scrollIntoView({
//             behavior: 'smooth'
//         });
//     });
// });


    // Handle country and city selection
    // const countrySelect = document.getElementById('country');
    // const citySelect = document.getElementById('city');

    // countrySelect.addEventListener('change', () => {
    //     const country = countrySelect.value;
    //     let cities = [];

    //     switch (country) {
    //         case 'russia':
    //             cities = ['Moscow', 'Saint Petersburg', 'Novosibirsk'];
    //             break;
    //         case 'georgia':
    //             cities = ['Tbilisi', 'Batumi', 'Kutaisi'];
    //             break;
    //         case 'kazakhstan':
    //             cities = ['Almaty', 'Astana', 'Shymkent'];
    //             break;
    //         case 'kyrgyzstan':
    //             cities = ['Bishkek', 'Osh', 'Jalal-Abad'];
    //             break;
    //         case 'bangladesh':
    //             cities = ['Dhaka', 'Chittagong', 'Rajshahi'];
    //             break;
    //         case 'nepal':
    //             cities = ['Kathmandu', 'Pokhara', 'Lalitpur'];
    //             break;
    //         case 'phillipines':
    //             cities = ['Manila', 'Cebu City', 'Davao City'];
    //             break;
    //         default:
    //             cities = [];
    //     }

    //     citySelect.innerHTML = cities.map(city => `<option value="${city.toLowerCase()}">${city}</option>`).join('');
    // });
});
