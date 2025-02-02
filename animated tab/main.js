const navItems = document.querySelectorAll('.navigation-tab-item')

navItems.forEach((tab, index) => {
    tab.addEventListener("click", ()=>{
        navItems.forEach((item) => {
            item.classList.remove('active');
        })
        tab.classList.add('active');
        document.querySelector('.navigation-tab-overlay').style.left = index * 130 + 'px';
    })


   
})    





// document.querySelectorAll('.navigation-tab-item').forEach(function(tab, index) {
//     tab.addEventListener('click', function() {
//       document.querySelectorAll('.navigation-tab-item').forEach(function(item) {
//         item.classList.remove('active');
//       });
//       tab.classList.add('active');
//       document.querySelector('.navigation-tab-overlay').style.left = index * 130 + 'px';
//     });
//   });