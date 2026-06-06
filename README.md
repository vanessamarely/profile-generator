# 🎨 README Profile Generator

<div align="center">

![GitHub](https://img.shields.io/badge/GitHub-Profile_Generator-181717?style=for-the-badge&logo=github&logoColor=white)
![React](https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

**Crea READMEs personalizados y atractivos para tu perfil de GitHub con vista previa en tiempo real**

[Demo en Vivo](#) • [Documentación](#características) • [Contribuir](CONTRIBUTING.md) • [Reportar Bug](../../issues)

</div>

---

## 📖 Sobre el Proyecto

**README Profile Generator** es una herramienta interactiva y visual que te permite crear perfiles de GitHub profesionales y atractivos sin necesidad de escribir markdown manualmente. Con una interfaz intuitiva de arrastrar y soltar, vista previa en tiempo real, y múltiples opciones de personalización, puedes diseñar un README que realmente destaque.

### ✨ ¿Por Qué Usar Este Generador?

- 🎯 **Cero Markdown Manual**: Construye tu perfil con formularios intuitivos
- 👁️ **Vista Previa en Tiempo Real**: Ve exactamente cómo se verá tu perfil en GitHub
- 🎨 **Altamente Personalizable**: Múltiples secciones, temas, badges y estilos
- 📱 **Responsive**: Funciona perfectamente en móviles y escritorio
- 💾 **Persistencia Automática**: Tu trabajo se guarda automáticamente
- 🚀 **Sin Configuración**: Comienza a crear inmediatamente

## 🌟 Características

### 🧩 Secciones Disponibles

| Sección | Descripción | Características |
|---------|-------------|-----------------|
| **Header** | Nombre, título y banner | Avatar de GitHub, banner personalizado |
| **About Me** | Biografía e introducción | Texto enriquecido, emoji support |
| **Skills** | Stack tecnológico | Tags visuales, categorización |
| **GitHub Stats** | Estadísticas y rachas | 3 temas personalizables, auto-detección de usuario |
| **Badges** | Insignias tecnológicas | Shields.io integration, badges personalizados |
| **Social Links** | Perfiles y contactos | 15+ plataformas con iconos automáticos |
| **Tech Stack (Code)** | Vista de código estilo JSON | Personalizable con tus tecnologías |
| **Video & Streaming** | Canales de YouTube/Twitch | Thumbnails automáticos, contador de seguidores |
| **Trophies** | Logros de GitHub | Temas personalizables |
| **Contributions** | Gráfico de actividad | Heatmap de contribuciones |
| **Certifications** | Logros y certificaciones | Templates dinámicos, badges profesionales |

### 🎨 Personalización Avanzada

#### Badges Personalizados (Shields.io)
- 🎨 Colores totalmente personalizables
- 🖼️ +2000 logos de Simple Icons
- 🎭 5 estilos diferentes (flat, for-the-badge, plastic, etc.)
- 🔗 Enlaces clickeables
- ⚡ Vista previa en tiempo real

#### GitHub Stats Themes
- 🌙 **Dark Mode**: Elegante y profesional
- 🌈 **Gradient**: Colorido y vibrante  
- ⚡ **Neon**: Futurista y llamativo

#### Social Networks
Soporte para:
- GitHub, Twitter/X, LinkedIn
- Medium, Dev.to, Hashnode
- YouTube, Twitch
- Discord, Telegram
- Y más...

### 🛠️ Funcionalidades

- ✅ **Drag & Drop**: Reordena secciones fácilmente
- ✅ **Exportación Múltiple**: Descarga como .md o copia al portapapeles
- ✅ **Auto-guardado**: Nunca pierdas tu progreso
- ✅ **Preview Dialog**: Vista previa del markdown completo antes de exportar
- ✅ **Validación**: URLs y datos validados en tiempo real
- ✅ **Mobile-First**: Tabs responsivos en dispositivos móviles

## 🚀 Inicio Rápido

### Opción 1: Usar Online (Recomendado)

Simplemente visita [nuestra aplicación](#) y comienza a crear tu perfil inmediatamente.

### Opción 2: Desarrollo Local

#### Prerequisitos

- Node.js 18+ 
- npm 9+

#### Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/TU-USUARIO/spark-template.git
   cd spark-template
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

4. Abre tu navegador en `http://localhost:5173`

## 📚 Guía de Uso

### 1️⃣ Agregar Secciones

Haz clic en cualquier tipo de sección en el panel "Add Section" para agregarla a tu perfil.

### 2️⃣ Personalizar Contenido

Rellena los campos del formulario para cada sección. Los cambios se reflejan instantáneamente en la vista previa.

### 3️⃣ Reordenar Secciones

Arrastra las secciones usando el ícono de puntos (⋮⋮) para reorganizar tu perfil.

### 4️⃣ Exportar

- **Copiar**: Copia el markdown al portapapeles
- **Descargar**: Descarga un archivo README.md

### 5️⃣ Usar en GitHub

1. Ve a tu perfil de GitHub
2. Crea un repositorio con tu nombre de usuario (ej: `username/username`)
3. Crea un archivo `README.md` en la raíz
4. Pega el markdown generado
5. Commit y ¡listo! 🎉

## 🏗️ Arquitectura Técnica

### Stack Tecnológico

```typescript
const project = {
  framework: "React 19.2",
  language: "TypeScript 5.7",
  styling: ["Tailwind CSS 4.1", "shadcn/ui"],
  stateManagement: "Spark KV (Key-Value Store)",
  buildTool: "Vite 7.3",
  animations: "Framer Motion",
  icons: "Phosphor Icons",
  markdown: "marked",
  forms: "React Hook Form + Zod"
};
```

### Estructura del Proyecto

```
src/
├── components/
│   ├── ui/                    # Componentes shadcn reutilizables
│   ├── editors/               # Editores específicos por sección
│   │   ├── HeaderEditor.tsx
│   │   ├── AboutEditor.tsx
│   │   ├── SkillsEditor.tsx
│   │   ├── StatsEditor.tsx
│   │   ├── BadgesEditor.tsx
│   │   ├── SocialsEditor.tsx
│   │   ├── TechStackEditor.tsx
│   │   ├── StreamingEditor.tsx
│   │   ├── TrophyEditor.tsx
│   │   ├── ContributionsEditor.tsx
│   │   └── CertificationsEditor.tsx
│   ├── SectionBuilder.tsx     # Constructor de secciones con drag & drop
│   ├── PreviewPane.tsx        # Vista previa de markdown renderizado
│   └── MarkdownPreviewDialog.tsx  # Modal de vista previa completa
├── lib/
│   ├── types.ts               # Tipos TypeScript y templates
│   ├── markdown.ts            # Generador de markdown
│   ├── exporters.ts           # Funciones de exportación (MD, PDF, HTML)
│   └── utils.ts               # Utilidades y helpers
├── hooks/
│   └── use-mobile.ts          # Hook para detección responsive
├── App.tsx                    # Componente principal
└── index.css                  # Tema y estilos globales
```

### Características Técnicas

- **Persistencia**: Usa `useKV` hook de Spark para almacenamiento automático
- **Drag & Drop**: Implementado con `framer-motion`'s `Reorder` component
- **Validación**: URLs y datos validados con feedback visual
- **Responsive**: Sistema de tabs para móvil, split-view para desktop
- **Optimización**: Lazy loading de componentes y actualizaciones eficientes

## 🤝 Contribuciones

¡Las contribuciones son bienvenidas! Este es un proyecto open source y valoramos todas las contribuciones de la comunidad.

### Cómo Contribuir

1. 🍴 Haz un fork del proyecto
2. 🌿 Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. 💍 Commit tus cambios (`git commit -m 'feat: Add some AmazingFeature'`)
4. 📤 Push a la rama (`git push origin feature/AmazingFeature`)
5. 🔃 Abre un Pull Request

Para más detalles, lee nuestra [Guía de Contribución](CONTRIBUTING.md).

### 🎯 Áreas de Contribución

- 🐛 Reportar y corregir bugs
- ✨ Sugerir nuevas características
- 📝 Mejorar documentación
- 🎨 Diseñar nuevas secciones
- 🌐 Agregar traducciones
- 🧪 Escribir tests
- 📊 Optimizar rendimiento

### 💡 Ideas para Contribuir

¿No sabes por dónde empezar? Aquí hay algunas ideas:

- Agregar más templates de badges
- Crear temas adicionales para GitHub stats
- Implementar más opciones de exportación (PDF, HTML)
- Agregar soporte para más plataformas sociales
- Mejorar la accesibilidad (a11y)
- Crear templates de perfil completos
- Agregar galería de ejemplos

## 📋 Roadmap

### ✅ Completado (v1.0)

- [x] Editor visual con drag & drop
- [x] 11+ tipos de secciones
- [x] Vista previa en tiempo real
- [x] Badges personalizados (shields.io)
- [x] GitHub stats con temas
- [x] Exportación a markdown
- [x] Responsive design
- [x] Auto-guardado

### 🚧 En Progreso (v1.1)

- [ ] Exportación a PDF/HTML
- [ ] Galería de templates
- [ ] Sistema de themes para toda la app
- [ ] Compartir perfiles via URL
- [ ] Importar README existente

### 🔮 Futuro (v2.0)

- [ ] Autenticación GitHub OAuth
- [ ] Guardar múltiples perfiles
- [ ] Colaboración en tiempo real
- [ ] Marketplace de templates
- [ ] Preview en dispositivos
- [ ] A/B testing de perfiles
- [ ] Analytics de visualizaciones

## 📄 Licencia

Este proyecto está licenciado bajo la Licencia MIT. Ver el archivo [LICENSE](LICENSE) para más detalles.

## 🌟 Agradecimientos

Este proyecto fue construido con:

- [React](https://react.dev/) - Framework UI
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [shadcn/ui](https://ui.shadcn.com/) - Component library
- [Framer Motion](https://www.framer.com/motion/) - Animations
- [Phosphor Icons](https://phosphoricons.com/) - Icon system
- [Shields.io](https://shields.io/) - Badge generation
- [GitHub README Stats](https://github.com/anuraghazra/github-readme-stats) - Stats widgets
- [GitHub Profile Trophy](https://github.com/ryo-ma/github-profile-trophy) - Trophy system

## 💬 Comunidad y Soporte

- 💬 [Discussions](../../discussions) - Preguntas y conversaciones
- 🐛 [Issues](../../issues) - Reportar bugs y solicitar features
- 📖 [Wiki](../../wiki) - Documentación extendida
- 🎓 [Examples](../../wiki/examples) - Galería de ejemplos

## 📞 Contacto

¿Tienes preguntas o sugerencias? 

- Abre un [Issue](../../issues)
- Inicia una [Discussion](../../discussions)
- Contribuye en [CONTRIBUTING.md](CONTRIBUTING.md)

---

<div align="center">

**Hecho con 💜 por la comunidad open source**

Si este proyecto te ayudó, considera darle una ⭐️

[⬆ Volver arriba](#-readme-profile-generator)

</div>
