function searchList() {
    let input = document.getElementById("searchInput").value.toUpperCase();
    let list = document.getElementById("list");
    let items = list.getElementsByTagName("div","label");
    
    for (let i = 0; i < items.length; i++) {
      let item = items[i];
      let text = item.textContent.toUpperCase();
      
      if (text.indexOf(input) > 0) {
        item.style.display = "inline-block";
      } else {
        item.style.display = "none";
      }
    }
  }
  