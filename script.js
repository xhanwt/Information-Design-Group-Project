// asked ChatGPT to write this js filter function
document.addEventListener('DOMContentLoaded', function() {
  const filterButtons = document.querySelectorAll('.filter-buttons button');

  const clubs = document.querySelectorAll('#clubs-list .club-card');

  filterButtons.forEach(function(button) {
    button.addEventListener('click', function() {
      // Remove active class from all buttons
      filterButtons.forEach(btn => btn.classList.remove('active'));
      // Add active class to clicked button
      button.classList.add('active');

      // Get the filter value from the clicked button
      const filterValue = button.getAttribute('data-filter');

      // Filter the clubs based on the category
      clubs.forEach(function(club) {
        if (filterValue === 'all') {
          club.classList.remove('hidden');
        } else {
          if (club.getAttribute('data-category') === filterValue) {
            club.classList.remove('hidden');
          } else {
            club.classList.add('hidden');
          }
        }
      });
    });
  });

});

