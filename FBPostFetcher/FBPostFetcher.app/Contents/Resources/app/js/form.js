
var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the crurrent tab
var counter = document.getElementById('step-counter');
counter.innerHTML = currentTab + 1;
function showTab(n) {
  // This function will display the specified tab of the form...
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
  //... and fix the Previous/Next buttons:
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
    document.getElementById("nextBtn").style.display = "flex";

  } else if (n == 5) {
    document.getElementById("nextBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "flex";
    document.getElementById("nextBtn").style.display = "flex";
  }
  //... and run a function that will display the correct step indicator:
  fixStepIndicator(n)
}

function enable_btn(id) {
  $('#' + id).removeAttr('disabled');
  $('#' + id).removeClass('disabled');
}

function disable_btn(id) {
  $('#' + id).attr('disabled', true);
  $('#' + id).addClass('disabled');
}
function nextPrev(n) {
  // This function will figure out which tab to display
  var x = document.getElementsByClassName("tab");
  // Exit the function if any field in the current tab is invalid:
  if (n == 1 && !validateForm()) return false;
  // Hide the current tab:
  x[currentTab].style.display = "none";
  // Increase or decrease the current tab by 1:
  currentTab = currentTab + n;

  counter.innerHTML = currentTab + 1;
  if (currentTab == 4) {
    var enable_post = false;
    var enable_comments = false;
    let post_attr = $('#post-attributes-selected').val();
    disable_btn('download_page_posts');
    disable_btn('download_comments');
    for (let index = 0; index < post_attr.length; index++) {
      post_attr[index] = post_attr[index].replace('po-', '');
      if (post_attr[index] == "message") {
        enable_btn('download_page_posts');
      } else if (post_attr[index] == "comments") {
        enable_btn('download_comments');
      }
    }


  }
  // if you have reached the end of the form...
  // Otherwise, display the correct tab:
  showTab(currentTab);
}

function validateForm() {
  // This function deals with validation of the form fields
  var x, y, i, valid = true;
  x = document.getElementsByClassName("tab");
  y = x[currentTab].getElementsByTagName("input");
  // A loop that checks every input field in the current tab:
  for (i = 0; i < y.length; i++) {
    // If a field is empty...
    if (y[i].value == "") {
      // add an "invalid" class to the field:
      y[i].className += " invalid";
      // and set the current valid status to false
      valid = false;
    }
  }
  // If the valid status is true, mark the step as finished and valid:
  if (valid) {
    document.getElementsByClassName("step")[currentTab].className += " finish";
  }
  return valid; // return the valid status
}

function fixStepIndicator(n) {
  // This function removes the "active" class of all steps...
  var i, x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  //... and adds the "active" class on the current step:
  x[n].className += " active";
}