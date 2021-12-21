// small window on load smooth animation/ transition

window.onload = function () {
  document.body.classList.add('before-enter');
  setTimeout(function () {
    document.body.classList.add('enter');
  }, 400);
};

// source for this function and calculation
// https://www.delftstack.com/howto/javascript/javascript-round-to-2-decimal-places/

function roundToThree(value) {
  return +(Math.round(value + 'e+3') + 'e-3');
}

document.querySelector('#submit-btn').addEventListener('click', function () {
  var path = document.querySelector('path');
  var submitted = document.getElementById('path-length').value;
  path.setAttribute('d', submitted);
  setTimeout(function () {
    // get total lenght of the path
    var length = path.getTotalLength();

    // using the round function to get 3 decimals
    var total = roundToThree(length);
    console.log(total);
    document.getElementById('path-output').value = total;
  }, 100);
});


// from https://www.w3schools.com/howto/howto_js_copy_clipboard.asp

function CopyPath() {
  /* Get the text field */
  var copyText = document.querySelector('.copy');

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */

  /* Copy the text inside the text field */

  /* Alert the copied text */
  console.log('Copied the text: ' + copyText.value);

  /* Copy the text inside the text field */
  return navigator.clipboard.writeText(copyText.value);
}

document.querySelector('#copy-btn').addEventListener('click', function () {
  console.log('clicked copy');
  CopyPath();
});
