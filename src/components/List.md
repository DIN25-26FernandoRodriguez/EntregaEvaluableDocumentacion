# `List` – Componente de Intérprete/Actor

Componente React que muestra información detallada sobre un intérprete/actor, incluyendo su foto, nombre, si es destacado y una descripción o biografía.  
Incluye soporte completo para accesibilidad (ARIA), navegación por teclado y diseño responsivo.

## ✨ Características principales

- 📸 Imagen responsiva con lazy loading  
- 📝 Nombre del intérprete (resaltado en rojo si es destacado)  
- 🔖 Etiqueta opcional indicando que forma parte de una película destacada  
- 📚 Biografía o descripción renderizada mediante `children`  
- ♿ Accesibilidad completa (ARIA, semantic HTML, tabIndex)

## 📦 Props

| Propiedad     | Tipo              | Requerido | Descripción |
|---------------|-------------------|-----------|-------------|
| `foto`        | `string`          | ✔️        | URL de la fotografía del intérprete. |
| `nombre`      | `string`          | ✔️        | Nombre completo del intérprete. |
| `esNota10`    | `boolean`         | ❌        | Indica si trabaja en una película destacada; activa estilos especiales. |
| `children`    | `React.ReactNode` | ❌        | Biografía o descripción del intérprete. |

## 🖼️ Estructura renderizada

El componente genera:

- `<article>` accesible y navegable  
- `<figure>` con `<img>` y `<figcaption>` oculto para lectores de pantalla  
- `<header>` con nombre del intérprete  
- `<p>` con la biografía o descripción  

## 📘 Ejemplo de uso

```jsx
<List 
  foto="https://example.com/actor.jpg" 
  nombre="Juan Pérez" 
  esNota10={true}
>
  Award-winning actor known for dramatic roles.
</List>
