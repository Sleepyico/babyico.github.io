var x = document.getElementById("annCxt");
var y = document.getElementById("annCxtMb");
var annCxt = [
  "💗 You can support and show me love in Patreon.com/babyiconical",
  "🛍️ Visit Shop.babyico.xyz and check my products. There're free things",
  "🛒 So check my shop or my side merch. It's really cute",
];

var annCxtMb = [
  "💗 You can support and show me love in Patreon.com/babyiconical&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;🛍️ Visit Shop.babyico.xyz and check my products. There's free things&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;🛒 So check my shop or my side merch. It's really cute",
];

x.innerHTML = annCxt[0];
y.innerHTML = annCxtMb[0];
var clock = setInterval(autoRight, 10000);

function btnRight() {
  clearInterval(clock);
  clock = setInterval(autoRight, 10000);
  for (var i = 0; i < annCxt.length; i++) {
    if (x.innerHTML === annCxt[i]) {
      if (x.innerHTML === annCxt[annCxt.length - 1]) {
        x.innerHTML = annCxt[0];
      } else {
        x.innerHTML = annCxt[i + 1];
      }
      break;
    }
  }
}

function btnLeft() {
  clearInterval(clock);
  clock = setInterval(autoRight, 10000);
  for (var i = annCxt.length - 1; i >= 0; i--) {
    if (x.innerHTML === annCxt[i]) {
      if (x.innerHTML === annCxt[0]) {
        x.innerHTML = annCxt[annCxt.length - 1];
      } else {
        x.innerHTML = annCxt[i - 1];
      }
      break;
    }
  }
}

function autoRight() {
  for (var i = 0; i < annCxt.length; i++) {
    if (x.innerHTML === annCxt[i]) {
      if (x.innerHTML === annCxt[annCxt.length - 1]) {
        x.innerHTML = annCxt[0];
      } else {
        x.innerHTML = annCxt[i + 1];
      }
      break;
    }
  }
}


// Hrml tag

var newURL = window.location.protocol + "//" + window.location.host + "/" + window.location.pathname;
if (a.indexOf('html') > -1) { //Check of html String in URL.
   url = url.substring(0, newURL.lastIndexOf("."));
}
