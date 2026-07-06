document.querySelectorAll('.timeline-trigger').forEach(function(btn) {
          btn.addEventListener('click', function() {
            var card = document.getElementById(btn.getAttribute('aria-controls'));
            var isOpen = btn.getAttribute('aria-expanded') === 'true';
            btn.setAttribute('aria-expanded', String(!isOpen));
            card.hidden = isOpen;
          });
        });