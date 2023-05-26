import Exercise01 from './01'
import Exercise02 from './02'
import Exercise03 from './03'

import './App.css'

function App() {

  return (
    <>
      {/*
        Desafío 1 de 3: Despachar actions desde manejadores de eventos

        Actualmente, los manejadores de eventos en `ContactList.jsx` y `Chat.jsx` tienen comentarios // TODO.
        Esta es la razón por la que escribir en el input no funciona, y hacer clic sobre
        los botones no cambia el destinatario seleccionado.

        Reemplaza estos dos // TODOs
        con el código para hacer dispatch de las actions correspondientes.
        Para ver la forma y el tipo (type) esperados de las acciones, revisa el reducer en messengerReducer.js.
        El reducer ya está escrito, así que no necesitas cambiarlo.
        Solo tendrás que despachar las acciones en `ContactList.jsx` y `Chat.jsx`.
      */}
      {/* <Exercise01 /> */}

      {/*
        Desafío 2 de 3: Limpiar el input al enviar un mensaje

        Actualmente, si se presiona “Send” no pasa nada. Agrega un manejador de eventos al botón de “Send” que va a:

          1. Mostrar un alert con el correo del destinatario y el mensaje.
          2. Limpiar el input del mensaje.
       */}
      {/* <Exercise02 /> */}

      {/*
        Desafío 3 de 3: Restaurar valores de input al cambiar entre pestañas

        En este ejemplo, cambiar entre diferentes destinatarios siempre limpia el input de texto:

        ```jsx
          case 'CHANGE_SELECTION': {
            const contactId = payload;
            return {
              ...state,
              selectedId: contactId,
              message: '',
            };
          }
        ```

        Esto ocurre porque no quieres compartir un solo borrador de mensaje entre varios destinatarios.
        Pero sería mejor si tu aplicación “recordara” un borrador para cada contacto separadamente,
        restaurándolos cuando cambias contactos.

        Tu tarea es cambiar la manera en la que el estado está estructurado así se puede recordar un
        borrador de mensaje separado por contacto. Tendrás que hacer algunos cambios al reducer,
        al estado inicial y a los componentes.
      */}
      <Exercise03 />
    </>
  )
}

export default App
