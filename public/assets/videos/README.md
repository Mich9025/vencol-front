# Videos para Banner

## Instrucciones para agregar videos de fondo

Para que el video de fondo funcione correctamente en el banner, necesitas agregar los siguientes archivos en esta carpeta:

### Archivos requeridos:
1. `banner-background.mp4` - Video principal en formato MP4
2. `banner-background.webm` - Video alternativo en formato WebM (opcional pero recomendado)

### Especificaciones recomendadas:
- **Resolución**: 1920x1080 (Full HD) o superior
- **Duración**: 10-30 segundos (se reproducirá en bucle)
- **Formato**: MP4 (H.264) y WebM para mejor compatibilidad
- **Tamaño**: Máximo 10MB para optimizar la carga
- **Aspecto**: 16:9 (horizontal)

### Características del video:
- Se reproduce automáticamente
- Sin sonido (muted)
- En bucle continuo
- Responsive (se adapta a diferentes tamaños de pantalla)

### Fallback:
Si no se encuentran los archivos de video, el banner mostrará automáticamente una imagen de fondo como respaldo.

### Ejemplo de nombres de archivo:
```
/public/assets/videos/
├── banner-background.mp4
└── banner-background.webm
```

### Notas:
- Los videos deben estar optimizados para web
- Se recomienda usar herramientas como FFmpeg para comprimir los videos
- El componente está configurado para mostrar una imagen de poster mientras carga el video