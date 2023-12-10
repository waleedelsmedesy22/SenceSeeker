function performSearch() {
    var searchTerm = document.getElementById("searchInput").value;
    if (searchTerm.trim() == "oppenhimer") {
      var targetPage = "oppenhimer.html" + encodeURIComponent(searchTerm);
      window.location.href = "oppenhimer.html";
    }else if(searchTerm.trim() == "interstller"){
      var targetPage = "interstller.html" + encodeURIComponent(searchTerm);
      window.location.href = "interstller.html";
    }else if (searchTerm.trim() == "the dark knight risses"){
    var targetPage = "the dark knight risses.html" + encodeURIComponent(searchTerm);
    window.location.href = "the dark knight risses.html";
    }else if (searchTerm.trim() == "the dark knigth"){
    var targetPage = "the dark knigth.html" + encodeURIComponent(searchTerm);
    window.location.href = "the dark knigth.html";
    }
  }
