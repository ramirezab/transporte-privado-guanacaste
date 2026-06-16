# Transporte Privado Guanacaste — Sitio web

Sitio web profesional para un servicio de **transporte privado en Guanacaste, Costa Rica**,
orientado a turistas: traslados desde el Aeropuerto de Liberia (LIR), recogida en hoteles
y tours a las playas del Pacífico Norte.

## Características
- Hero con **video aéreo de fondo** (YouTube, silenciado y en bucle) e imagen de respaldo.
- Sección de **servicios** ofrecidos.
- **Flota** de hasta 3 vehículos (4 pasajeros + chófer cada uno).
- **Galería** de destinos con fotos libres de playas de Guanacaste.
- **Reservas por WhatsApp** con Samuel Ramírez Ampié (botón con mensaje prellenado).
- Diseño responsive, botón flotante de WhatsApp y animaciones.

## Tecnología
Sitio estático: HTML, CSS y JavaScript puro. Sin dependencias ni build.

## Estructura
```
index.html        Página principal
styles.css        Estilos
script.js         Interacciones (menú, animaciones)
assets/           Imágenes de playas (Wikimedia Commons, CC BY / CC BY-SA)
```

## Créditos de imágenes
Fotografías de playas: Wikimedia Commons bajo licencias Creative Commons (CC BY / CC BY-SA):
Jarle Naustvik, Tamarindowiki, Guacamolio, Rômulo Gama Ferreira, El Pantera, WClarke.
Ilustraciones de los vehículos generadas con figuras geométricas (PIL/Pillow) — ver
`assets/make_cars.py`. Video aéreo de fondo: Todd Swint (YouTube), reproducido desde el segundo 8.

## Desarrollo local
```bash
python -m http.server 8000
```
