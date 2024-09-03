      window.onscroll = function () {
        scrollFunction();
      };

      function scrollFunction() {
        if (
          document.body.scrollTop > 70 ||
          document.documentElement.scrollTop > 70
        ) {
          document.getElementById("navbar").style.margin = "30px";
        } else {
          document.getElementById("navbar").style.margin = "0px";
        }
      }