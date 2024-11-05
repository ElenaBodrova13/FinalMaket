


  let buttonElse = document.querySelector(".collection__else");
  let submenuExtra = document.querySelector(".collection__extra");
  let row = document.querySelector(".collection__rows");
 
    buttonElse.addEventListener("click", function(){
        submenuExtra.classList.toggle("hidden");
        
        if (submenuExtra.classList.contains("hidden")) {
            buttonElse.textContent="Показать все";
            row.classList.remove("rowsupp");
            row.classList.add("rowsdown");
        

            buttonElse.appendChild(row);
        } else {
            buttonElse.textContent="Скрыть";
        
        row.classList.remove("rowsdown");
        row.classList.add("rowsupp");
            buttonElse.appendChild(row);
            
        }
        
    });
    
 