document.addEventListener('DOMContentLoaded', function() {
  let hz = 0;
  let gain = 1; // Gain in Hz/s
  let cost = 10; // Initial cost for upgrade
  
  const hzDisplay = document.getElementById('hz-display');
  const gainDisplay = document.getElementById('gain-display');
  const costDisplay = document.getElementById('cost-display');
  const popup = document.getElementById('popup');
  const achievement = document.getElementById('achievement');
  const achievementContent = document.getElementById('achievement-content');

  function updateHz() {
      hz += gain / 30; // Update every 1/30 second
      hzDisplay.textContent = `${Math.floor(hz)} Hz`;
      if (hz >= 1 && !achievement.classList.contains('completed')) {
        achievement.classList.add('completed');
        achievement.textContent = 'First Hertz Complete';
        showPopup('Achievement Complete: First Hertz');
      }
  }

  function showPopup(message) {
      popup.textContent = message;
      popup.style.opacity = 1;
      setTimeout(() => {
        popup.style.opacity = 0;
      }, 3000);
  }

  setInterval(updateHz, 1000 / 30); // Update every 1/30 second

  document.getElementById('upgrade-button').addEventListener('click', function() {
       if (hz >= cost) {
       hz -= cost;
       gain *= 2;
       cost *= 2;
       hzDisplay.textContent = `${Math.floor(hz)} Hz`;
       gainDisplay.textContent = `Gain: ${gain}Hz/s`;
       costDisplay.textContent = `${cost}Hz`;
     }
  });

  const tabs = document.querySelectorAll('.tab');
  tabs.forEach(tab => {
  tab.addEventListener('click', function() {
  tabs.forEach(t => {
     t.classList.remove('bg-white', 'bg-green-500', 'bg-orange-500', 'text-black');
     t.classList.add('bg-gray-800', 'text-gray-300');
  });
  this.classList.remove('bg-gray-800', 'text-gray-300');
     if (this.id === 'tab-hz') {
         this.classList.add('bg-white', 'text-black');
         document.getElementById('hz-content').classList.remove('hidden');
         document.getElementById('achievement-content').classList.add('hidden');
     } else if (this.id === 'tab-achievements') {
         this.classList.add('bg-green-500', 'text-black');
         document.getElementById('hz-content').classList.add('hidden');
         document.getElementById('achievement-content').classList.remove('hidden');
     } else if (this.id === 'tab-settings') {
         this.classList.add('bg-orange-500', 'text-black');
         document.getElementById('hz-content').classList.add('hidden');
         document.getElementById('achievement-content').classList.add('hidden');
     }
   });
   });
});
