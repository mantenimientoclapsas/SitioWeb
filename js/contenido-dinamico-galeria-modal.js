//Este archivo contiene el contenido de la ventana modal

document.getElementById('item-1').addEventListener('click', () => {
        edModal(`
        <div class="modal__header">
          <h2 class="modal__header__titulo"> Mantenimientos </h2>
        </div>
        <div class="modal__footer">
          <ul>
            <li class="modal__footer__item">Mantenimiento de proyectos arquitectónicos y estructurales e interventorías.</li>
            <li class="modal__footer__item">Mantenimiento preventivo, predictivo y correctivo en instalaciones eléctricas de baja y media tensión.</li>
            <li class="modal__footer__item">Mantenimiento y suministros mobiliarios.</li>
          </ul>
        </div>
          `)
      })
      document.getElementById('item-2').addEventListener('click', () => {
        edModal(`
        <div class="modal__header">
          <h2 class="modal__header__titulo"> Acompañamientos </h2>
        </div>
        <div class="modal__footer">
          <ul>
            <li class="modal__footer__item">Realizamos acompañamiento en temas relacionados con: <br> Seguridad y salud en el trabajo a Bussiness y/o costomer's.</li>
          </ul>
        </div>
          `)
      })
      document.getElementById('item-3').addEventListener('click', () => {
        edModal(`
        <div class="modal__header">
          <h2 class="modal__header__titulo"> Avalúos </h2>
        </div>
        <div class="modal__footer">
          <ul>
            <li class="modal__footer__item">Urbanos.</li>
            <li class="modal__footer__item">Rurales.</li>
            <li class="modal__footer__item">Especiales.</li>
            <li class="modal__footer__item">Masivos.</li>
          </ul>
          <span class="modal__footer__pie-pagina">Avalúos elaborados bajo normas NIF.</span>
        </div>
          `)
      })
      document.getElementById('item-4').addEventListener('click', () => {
        edModal(`
        <div class="modal__header">
          <h2 class="modal__header__titulo"> Capacitaciones </h2>
        </div>
        <div class="modal__footer">
          <ul>
            <li class="modal__footer__item">En seguridad y salud en el trabajo.</li>
            <li class="modal__footer__item">Trabajo en equipo.</li>
            <li class="modal__footer__item">Brigadas de emergencia.</li>
            <li class="modal__footer__item">Clima organizacional.</li>
            <li class="modal__footer__item">Manejo de conflicto laboral.</li>
            <li class="modal__footer__item">Comunicación efectiva y asertiva.</li>
            <li class="modal__footer__item">Gestión organizacional por procesos.</li>
            <li class="modal__footer__item">Planeación y pensamiento estratégico.</li>
          </ul>
        </div>
          `)
      })
      //Desactivado por el momento
      /*
      document.getElementById('item-5').addEventListener('click', () => {
         edModal(`
        <div class="modal__header">
          <h2 class="modal__header__titulo"> La seguridad está primero </h2>
        </div>
        <div class="modal__footer">
          <ul>
            <li class="modal__footer__item">Contamos con personal calificado para realizar todas nuestras actividades con la mayor seguridad posible.</li>
            <li class="modal__footer__item">En CLAP SAS siempre buscamos realizar las actividades de la mejor manera.</li>
          </ul>
        </div>
          `)
      })*/
      //Desactivado por el momento, ya que no hay información pertinente para agregar
      /*document.getElementById('item-6').addEventListener('click', () => {
        edModal(`<h2>Seguridad Laboral</h2>`)
      })*/
      document.getElementById('item-7').addEventListener('click', () => {
         edModal(`
        <div class="modal__header">
          <h2 class="modal__header__titulo"> Asesorías </h2>
        </div>
        <div class="modal__footer">
          <ul>
            <li class="modal__footer__item">Asesoría para certificación y recertificación en normas nacionales e internacionales tales como:</li>
            <li class="modal__footer__item">ISO, OHSAS, ICONTEC y RUC.</li>
            <li class="modal__footer__item">Asesorías para proyectos arquitectonicos.</li>
            <li class="modal__footer__item">Tramitología para licencia de construcción.</li>
            <li class="modal__footer__item">Tramitología para desenglobe y englobe rurales y urbanos.</li>
          </ul>
        </div>
          `)
      })
      //Desactivado por el momento, ya que no hay información pertinente para agregar
      /*document.getElementById('item-8').addEventListener('click', () => {
        edModal(`<h2>Seguridad Laboral</h2>`)
      })*/
      document.getElementById('item-9').addEventListener('click', () => {
         edModal(`
        <div class="modal__header">
          <h2 class="modal__header__titulo"> Interventoría de obra </h2>
        </div>
        <div class="modal__footer">
          <ul>
            <li class="modal__footer__item">Interventoría de obra y demás actividades profesionales comerciales asociadas a la arquitectura e ingeniería.</li>
            
          </ul>
        </div>
          `)
      })
      document.getElementById('item-10').addEventListener('click', () => {
        edModal(`
        <div class="modal__header">
          <h2 class="modal__header__titulo"> Diseño y construccion de redes </h2>
        </div>
        <div class="modal__footer">
          <ul>
            <li class="modal__footer__item">Diseño y construcción de redes de baja y media tensión con altos estándares de calidad y seguridad.</li>
            
          </ul>
        </div>
          `)
      })