
function setProgress(skill, progress) {
    const progressBar = document.getElementById(`${skill}-progress`);
    const progressLine = document.createElement('div');
    const progressText = document.createElement('span');
  
    progressLine.className = 'progress-line';
    progressBar.appendChild(progressLine);
    progressBar.appendChild(progressText);
  
    progressLine.style.width = `${progress}%`;
    progressText.textContent = `${progress}%`;
  }
  
  // Set progress values (adjust as needed)
  setProgress('html', 90);
  setProgress('css', 80);
  setProgress('js', 70);
  setProgress('python', 70);
  setProgress('react', 75);