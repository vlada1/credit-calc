
// Initialize select plugin
$(document).ready(function() {
  $('select').niceSelect();
});

// Scripts for check-box
const stoneCheckbox = document.getElementById('check-stone');
const note = document.getElementsByClassName('note');

stoneCheckbox.onchange = () => {
  if (stoneCheckbox.checked) {
    note[0].style.display = 'none';
  }
  else {
    note[0].style.display = 'block';
  }
};

// Scripts for slider
const slider = document.getElementById('slider-date');
noUiSlider.create(slider, {
	start: 15,
  step: 1,
	range: {
		'min': 1,
		'max': 30
	}
});

slider.noUiSlider.on('update', () => {
  let sliderValue = parseInt(slider.noUiSlider.get());
  if (sliderValue === 1 || sliderValue === 21) {
    $('.noUi-handle').text(sliderValue + ' день');
  }
  else if (sliderValue === 12 || sliderValue === 13 || sliderValue === 14) {
    $('.noUi-handle').text(sliderValue + ' дней');
  }
  else if ((sliderValue % 10 === 2 || sliderValue % 10 === 3 || sliderValue % 10 === 4)) {
    $('.noUi-handle').text(sliderValue + ' дня');
  }
  else {
    $('.noUi-handle').text(sliderValue + ' дней');
  }
});


// Input validation

function validateInput(field) {
  const value = document.getElementById('weight').value;
  if (value != '' && parseInt(value) > 0) {
    document.getElementById('submit-button').disabled = false;
  } else {
    document.getElementById('submit-button').disabled = true;
  }
}
