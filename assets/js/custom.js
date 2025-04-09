function switchTheme(themeClass) {
    document.body.className = themeClass;
  }
  
//   alert('Hello');
  // Add click event listeners to each button
  document.getElementById('btn-orange').addEventListener('click', function () {
    switchTheme('theme-orange');
  });
  
  document.getElementById('btn-black').addEventListener('click', function () {
    switchTheme('theme-black');
  });
  
  document.getElementById('btn-light').addEventListener('click', function () {
    switchTheme('theme-light');
  });
