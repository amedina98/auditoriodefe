# Iglesia Auditorio de Fé

Sitio estático en español. Abrí `index.html` para ver la página. Para probar también el reproductor de YouTube, servila por HTTP (por ejemplo con `python -m http.server 8000`) y abrí `http://localhost:8000`.

## Publicar en GitHub Pages

1. Subí el contenido de esta carpeta a la raíz de un repositorio de GitHub, incluido el archivo `.nojekyll`.
2. En el repositorio, entrá a **Settings → Pages**.
3. En **Source**, elegí **Deploy from a branch**. Seleccioná la rama que subiste (por ejemplo, `main`) y **/ (root)**.
4. Guardá. GitHub muestra la dirección del sitio en esa misma pantalla cuando termina el despliegue.

## Actualizar el contenido

Los horarios, las redes y el video destacado están en `index.html`. Para cambiar la grabación, actualizá el ID en los enlaces a YouTube, la miniatura y la URL de `data-embed`. Ajustá la fecha y el texto accesible en el mismo bloque. El botón «Ir al vivo» abre la ruta de directos del canal y la sección de transmisiones enlaza al archivo de YouTube.
