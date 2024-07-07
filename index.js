document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const hoverLine = document.querySelector('.hover-line');
  
    function handleHover(e) {
      // Calculate position and width of the hover line
      const linkRect = e.target.getBoundingClientRect();
      const navRect = document.querySelector('.nav-links').getBoundingClientRect();
  
      const lineWidth = linkRect.width;
      const offsetLeft = linkRect.left - navRect.left;
  
      // Apply styles to the hover line
      hoverLine.style.width = `${lineWidth}px`;
      hoverLine.style.transform = `translateX(${offsetLeft}px)`;
    }
  
    // Add event listeners to each nav link
    navLinks.forEach(link => {
      link.addEventListener('mouseenter', handleHover);
    });
  
    // Reset hover line on mouse leave (optional)
    document.querySelector('.nav-links').addEventListener('mouseleave', function() {
      hoverLine.style.width = '0';
    });
  });
  