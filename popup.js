// // Initialize butotn with users's prefered color
// let changeColor = document.getElementById("changeColor");

// chrome.storage.sync.get("color", ({ color }) => {
//   changeColor.style.backgroundColor = color;
// });

// When the button is clicked, inject setPageBackgroundColor into current page
// save.addEventListener("click", async () => {
//   let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

//   chrome.scripting.executeScript({
//     target: { tabId: tab.id },
//     function: saveCRN,
//   });
// });

// The body of this function will be execuetd as a content script inside the
// current page

var boxes = ["one", "two", "three", "four", "five", "six", "seven", "eight"];
var storenames = ["CRN1", "CRN2", "CRN3", "CRN4", "CRN5", "CRN6", "CRN7", "CRN8"];


window.onload = function () {
  var save = document.getElementById("save");
  save.onclick = saveCRN;
  var load = document.getElementById("load");
  load.onclick = loadCRN;
  // var fill = document.getElementById("fill");
  // fill.onclick = fillCRN;
}


// function fillCRN() {
//   if (document.getElementById("one").value != null) {
//     document.getElementById("crn_id1").value = document.getElementById("one").value;
//   }

// }


// save.addEventListener("click", saveCRN);
// document.getElementById("save").addEventListener("click", saveCRN);

function loadCRN() {
  getStorageKeyValue("CRN1", function (key) {
    if (key != null) {
      document.getElementById("one").value = key;
    }
  });
  getStorageKeyValue("CRN2", function (key) {
    if (key != null) {
      document.getElementById("two").value = key;
    }
  });
  getStorageKeyValue("CRN3", function (key) {
    if (key != null) {
      document.getElementById("three").value = key;
    }
  });
  getStorageKeyValue("CRN4", function (key) {
    if (key != null) {
      document.getElementById("four").value = key;
    }
  });
  getStorageKeyValue("CRN5", function (key) {
    if (key != null) {
      document.getElementById("five").value = key;
    }
  });
  getStorageKeyValue("CRN6", function (key) {
    if (key != null) {
      document.getElementById("six").value = key;
    }
  });
  getStorageKeyValue("CRN7", function (key) {
    if (key != null) {
      document.getElementById("seven").value = key;
    }
  });
  getStorageKeyValue("CRN8", function (key) {
    if (key != null) {
      document.getElementById("eight").value = key;
    }
  });

}


function saveCRN() {
  // console.log("HI");
  // chrome.storage.sync.set({ "CRN1": document.getElementById("one").value }, function() {
  //   document.getElementById("four").value = document.getElementById("one").value;
  // });
  setStorageKey("CRN1", document.getElementById("one").value);
  setStorageKey("CRN2", document.getElementById("two").value);
  setStorageKey("CRN3", document.getElementById("three").value);
  setStorageKey("CRN4", document.getElementById("four").value);
  setStorageKey("CRN5", document.getElementById("five").value);
  setStorageKey("CRN6", document.getElementById("six").value);
  setStorageKey("CRN7", document.getElementById("seven").value);
  setStorageKey("CRN8", document.getElementById("eight").value);

}

function setStorageKey(key, value) {
  chrome.storage.sync.set({ [key]: value });
}

function getStorageKeyValue(key, onGetStorageKeyValue) {
  chrome.storage.sync.get([key], function (result) {
    onGetStorageKeyValue(result[key]);
  });
}


//document.getElementById("four").value = document.getElementById("one").value

//console.log(one);

// chrome.storage.sync.set({"CRN1": document.getElementById("one").value}, function() {
//   console.log('Value is set to ' + document.getElementById("one").value);
// });


// chrome.storage.sync.get("color", ({ color }) => {
//   document.body.style.backgroundColor = color;
// });


document.getElementById("fill").addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: fill,

  });
});

// The body of this function will be execuetd as a content script inside the
// current page
function fill() {


  function getStorageKeyValue(key, onGetStorageKeyValue) {
    chrome.storage.sync.get([key], function (result) {
      onGetStorageKeyValue(result[key]);
    });
  }

  getStorageKeyValue("CRN1", function (key) {
    if (key != null) {
      document.getElementById("crn_id1").value = key;
    }
  });

  getStorageKeyValue("CRN2", function (key) {
    if (key != null) {
      document.getElementById("crn_id2").value = key;
    }
  });
  getStorageKeyValue("CRN3", function (key) {
    if (key != null) {
      document.getElementById("crn_id3").value = key;
    }
  });
  getStorageKeyValue("CRN4", function (key) {
    if (key != null) {
      document.getElementById("crn_id4").value = key;
    }
  });
  getStorageKeyValue("CRN5", function (key) {
    if (key != null) {
      document.getElementById("crn_id5").value = key;
    }
  });
  getStorageKeyValue("CRN6", function (key) {
    if (key != null) {
      document.getElementById("crn_id6").value = key;
    }
  });
  getStorageKeyValue("CRN7", function (key) {
    if (key != null) {
      document.getElementById("crn_id7").value = key;
    }
  });
  getStorageKeyValue("CRN8", function (key) {
    if (key != null) {
      document.getElementById("crn_id8").value = key;
    }
  });

  //document.getElementById("crn_id1").value = 1;
  // chrome.storage.sync.get(["CRN1"], ({key}) => {
  //   //onGetStorageKeyValue(result[key]);
  //   console.log(key);
  //   document.getElementById("crn_id1").value = key;
  // });


  // getStorageKeyValue("CRN1", function(key) {
  //   document.getElementById("crn_id1").value = key;
  // });
  // getStorageKeyValue("CRN2", function(key) {
  //   document.getElementById("crn_id2").value  = key;
  // });
  // getStorageKeyValue("CRN3", function(key) {
  //   document.getElementById("crn_id3").value  = key;
  // });
  // getStorageKeyValue("CRN4", function(key) {
  //   document.getElementById("crn_id4").value  = key;
  // });
  // getStorageKeyValue("CRN5", function(key) {
  //   document.getElementById("crn_id5").value  = key;
  // });
  // getStorageKeyValue("CRN6", function(key) {
  //   document.getElementById("crn_id6").value  = key;
  // });
  // getStorageKeyValue("CRN7", function(key) {
  //   document.getElementById("crn_id7").value  = key;
  // });
  // getStorageKeyValue("CRN8", function(key) {
  //   document.getElementById("crn_id8").value  = key;
  // });


}


document.getElementById("fillandsubmit").addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: fillandsubmit,

  });
});


function fillandsubmit() {
  function getStorageKeyValue(key, onGetStorageKeyValue) {
    chrome.storage.sync.get([key], function (result) {
      onGetStorageKeyValue(result[key]);
    });
  }

  getStorageKeyValue("CRN1", function (key) {
    if (key != null) {
      document.getElementById("crn_id1").value = key;
    }
  });

  getStorageKeyValue("CRN2", function (key) {
    if (key != null) {
      document.getElementById("crn_id2").value = key;
    }
  });
  getStorageKeyValue("CRN3", function (key) {
    if (key != null) {
      document.getElementById("crn_id3").value = key;
    }
  });
  getStorageKeyValue("CRN4", function (key) {
    if (key != null) {
      document.getElementById("crn_id4").value = key;
    }
  });
  getStorageKeyValue("CRN5", function (key) {
    if (key != null) {
      document.getElementById("crn_id5").value = key;
    }
  });
  getStorageKeyValue("CRN6", function (key) {
    if (key != null) {
      document.getElementById("crn_id6").value = key;
    }
  });
  getStorageKeyValue("CRN7", function (key) {
    if (key != null) {
      document.getElementById("crn_id7").value = key;
    }
  });
  getStorageKeyValue("CRN8", function (key) {
    if (key != null) {
      document.getElementById("crn_id8").value = key;
    }
  });

  setTimeout(function(){
    buttons = document.getElementsByName("REG_BTN");
    console.log(buttons);
    z = 0;
    while(true) {
      button = buttons[z];
      if (button.defaultValue == "Submit Changes") {
        button.click();
        console.log("Done")
        return;
      }
      z++;
    }
  }, 200);

}


