# Desafío 3 de 3: Restaurar valores de input al cambiar entre pestañas

En este ejemplo, cambiar entre diferentes destinatarios siempre limpia el input de texto:

```jsx
case 'CHANGE_SELECTION': {
  const contactId = payload;
  return {
    ...state,
    selectedId: contactId,
    message: '', // Limpia el input
  };
}
```

Esto ocurre porque no quieres compartir un solo borrador de mensaje entre varios destinatarios. Pero sería mejor si tu aplicación “recordara” un borrador para cada contacto separadamente, restaurándolos cuando cambias contactos.

Tu tarea es cambiar la manera en la que el estado está estructurado así se puede recordar un borrador de mensaje separado por contacto. Tendrás que hacer algunos cambios al reducer, al estado inicial y a los componentes.
