var contador=0,opcionEmpresarial=document.getElementById("empresarial"),opcionPersona=document.getElementById("persona");opcionEmpresarial.addEventListener("click",function(){contador+=1;var e=document.getElementById("js-formulario-contacto"),t=document.createElement("input"),n=document.getElementById("js-input-referencia");t.classList.add("formulario__input"),t.setAttribute("placeholder","Nombre de la empresa"),t.setAttribute("id","nombre-empresa"),e.insertBefore(t,n),contador>1&&document.getElementById("nombre-empresa").remove()}),opcionPersona.addEventListener("click",function(){document.getElementById("nombre-empresa").remove(),contador=0});