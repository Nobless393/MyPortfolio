# Portfolio — Jason Alexander Castillo Rojas

Portafolio estático para **GitHub Pages**. Sin build tools ni dependencias: HTML + CSS + JS vanilla.

## Estructura

```
portfolio/
├── index.html        Página principal (estructura y contenido)
├── css/
│   └── styles.css    Todos los estilos (variables, componentes, responsive)
├── js/
│   └── main.js       Interacciones (navbar scroll, menú móvil, scroll-spy, reveal)
├── img/
│   └── perfil.jpg    Foto de perfil (reemplázala si quieres otra)
└── README.md
```

## Funcionalidades JS

- Navbar con sombra al hacer scroll.
- Menú hamburguesa en móvil.
- Scroll-spy: resalta el enlace de la sección visible.
- Aparición suave de bloques (respeta `prefers-reduced-motion`).
- Año actual automático en el footer.

## Publicar en GitHub Pages

Para tener tu portafolio en `https://Nobless393.github.io`:

1. **Crea un repo** en GitHub llamado exactamente: `Nobless393.github.io`
   (GitHub lo usa como URL de tu sitio personal).
2. Sube los archivos al repo:

   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/Nobless393/Nobless393.github.io.git
   git push -u origin main
   ```

3. GitHub publica automáticamente la rama `main`. En 1-2 minutos tu sitio estará en:
   **https://Nobless393.github.io**

## Cambiar el LinkedIn

El botón de LinkedIn apunta a un placeholder. Crea tu perfil y actualiza el enlace en
`index.html` (sección contacto).

## Agregar más proyectos

Cada proyecto nuevo se agrega como tarjeta en la sección `#proyectos`:

- **Destacado:** copia la estructura del `<article class="featured">`.
- **Secundario:** copia un `<div class="project-card">`.

## Vista previa local

Abre `index.html` directamente en tu navegador (doble clic) o sirve la carpeta:

```bash
python -m http.server 8000
```

> Puedes borrar las tarjetas "Próximo proyecto" cuando agregues tus proyectos reales.
