# Contributing to README Profile Generator

¡Gracias por tu interés en contribuir a README Profile Generator! 🎉

Este proyecto es open source y damos la bienvenida a contribuciones de la comunidad. Ya sea que estés reportando bugs, sugiriendo nuevas características, mejorando la documentación o enviando código, tu ayuda es muy apreciada.

## 📋 Tabla de Contenidos

- [Código de Conducta](#código-de-conducta)
- [¿Cómo Puedo Contribuir?](#cómo-puedo-contribuir)
- [Configuración del Entorno de Desarrollo](#configuración-del-entorno-de-desarrollo)
- [Guías de Estilo](#guías-de-estilo)
- [Proceso de Pull Request](#proceso-de-pull-request)
- [Reporte de Bugs](#reporte-de-bugs)
- [Solicitud de Características](#solicitud-de-características)

## 📜 Código de Conducta

Este proyecto y todos los que participan en él se rigen por nuestro Código de Conducta. Al participar, se espera que mantengas este código. Por favor, reporta comportamientos inaceptables abriendo un issue.

### Nuestros Estándares

- ✅ Usar lenguaje acogedor e inclusivo
- ✅ Respetar diferentes puntos de vista y experiencias
- ✅ Aceptar críticas constructivas con gracia
- ✅ Enfocarse en lo que es mejor para la comunidad
- ✅ Mostrar empatía hacia otros miembros de la comunidad

## 🤝 ¿Cómo Puedo Contribuir?

### Reportar Bugs

Los bugs se rastrean como issues de GitHub. Antes de crear un reporte de bug:

1. **Verifica** que no exista un issue similar ya reportado
2. **Recopila información** sobre el bug:
   - Pasos para reproducirlo
   - Comportamiento esperado vs comportamiento actual
   - Capturas de pantalla (si aplica)
   - Navegador y versión
   - Sistema operativo

### Sugerir Mejoras

Las sugerencias de mejoras también se rastrean como issues. Antes de crear una sugerencia:

1. **Verifica** que no exista una sugerencia similar
2. **Describe** claramente la característica y su valor para los usuarios
3. **Explica** cómo debería funcionar
4. **Incluye ejemplos** o mockups si es posible

### Tu Primera Contribución de Código

¿No estás seguro por dónde empezar? Puedes buscar issues etiquetados como:

- `good first issue` - Issues ideales para principiantes
- `help wanted` - Issues que necesitan ayuda de la comunidad
- `bug` - Bugs confirmados que necesitan ser corregidos
- `enhancement` - Nuevas características o mejoras

## 🛠️ Configuración del Entorno de Desarrollo

### Prerequisitos

- Node.js (v18 o superior)
- npm (v9 o superior)
- Git

### Instalación

1. **Fork el repositorio** en GitHub

2. **Clona tu fork** localmente:
   ```bash
   git clone https://github.com/TU-USUARIO/spark-template.git
   cd spark-template
   ```

3. **Agrega el repositorio original como remote**:
   ```bash
   git remote add upstream https://github.com/REPOSITORIO-ORIGINAL/spark-template.git
   ```

4. **Instala las dependencias**:
   ```bash
   npm install
   ```

5. **Inicia el servidor de desarrollo**:
   ```bash
   npm run dev
   ```

6. Abre tu navegador en `http://localhost:5173`

### Estructura del Proyecto

```
src/
├── components/          # Componentes React
│   ├── ui/             # Componentes shadcn reutilizables
│   ├── editors/        # Editores específicos por sección
│   ├── SectionBuilder.tsx
│   ├── PreviewPane.tsx
│   └── MarkdownPreviewDialog.tsx
├── lib/                # Utilidades y tipos
│   ├── types.ts        # Definiciones de tipos TypeScript
│   ├── markdown.ts     # Generador de markdown
│   ├── exporters.ts    # Funciones de exportación
│   └── utils.ts        # Utilidades generales
├── hooks/              # React hooks personalizados
├── styles/             # Estilos y temas
├── App.tsx             # Componente principal
└── index.css           # Estilos globales
```

## 📝 Guías de Estilo

### Código TypeScript/React

- **TypeScript**: Todo el código debe estar tipado. Evita usar `any`.
- **Componentes**: Usa componentes funcionales con hooks
- **Nombres**: 
  - Componentes: PascalCase (`MyComponent.tsx`)
  - Funciones: camelCase (`myFunction`)
  - Constantes: UPPER_SNAKE_CASE (`MY_CONSTANT`)
  - Archivos: kebab-case para utilidades (`my-utility.ts`)
- **Imports**: Organiza los imports en este orden:
  1. React y librerías externas
  2. Componentes internos
  3. Hooks
  4. Utilidades y tipos
  5. Estilos

```typescript
// ✅ Bueno
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useKV } from '@github/spark/hooks';
import { Section } from '@/lib/types';

// ❌ Malo
import { Section } from '@/lib/types';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
```

### Estado y Persistencia

- **Usar `useKV`** para datos que deben persistir entre sesiones
- **Usar `useState`** para estado temporal de UI
- **SIEMPRE usar actualizaciones funcionales** con `useKV`:

```typescript
// ✅ CORRECTO
setTodos((currentTodos) => [...currentTodos, newTodo]);

// ❌ INCORRECTO - causará pérdida de datos
setTodos([...todos, newTodo]);
```

### Estilos

- Usa **Tailwind CSS** para todos los estilos
- Sigue el tema de colores definido en `index.css`
- Usa los componentes de **shadcn** cuando sea posible
- Mantén consistencia con el sistema de espaciado

```tsx
// ✅ Bueno
<Button className="gap-2 px-4">
  <Icon weight="bold" />
  Label
</Button>

// ❌ Malo - estilos inline
<button style={{ display: 'flex', gap: '8px', padding: '16px' }}>
  Label
</button>
```

### Iconos

- Usa **@phosphor-icons/react** para todos los iconos
- No sobrescribas `size` o `weight` a menos que sea necesario
- Usa `weight="bold"` para botones principales

```tsx
import { Plus } from '@phosphor-icons/react';

<Button>
  <Plus weight="bold" />
  Add Section
</Button>
```

## 🔄 Proceso de Pull Request

1. **Crea una rama** desde `main`:
   ```bash
   git checkout -b feature/mi-nueva-caracteristica
   # o
   git checkout -b fix/descripcion-del-bug
   ```

2. **Realiza tus cambios** siguiendo las guías de estilo

3. **Haz commits** con mensajes descriptivos:
   ```bash
   git commit -m "feat: add YouTube video embed support"
   git commit -m "fix: resolve download issue in Safari"
   git commit -m "docs: update contributing guidelines"
   ```

   Prefijos de commits:
   - `feat:` - Nueva característica
   - `fix:` - Corrección de bug
   - `docs:` - Cambios en documentación
   - `style:` - Cambios de formato (no afectan código)
   - `refactor:` - Refactorización de código
   - `test:` - Agregar o modificar tests
   - `chore:` - Tareas de mantenimiento

4. **Sincroniza** con el repositorio upstream:
   ```bash
   git fetch upstream
   git rebase upstream/main
   ```

5. **Empuja** tus cambios a tu fork:
   ```bash
   git push origin feature/mi-nueva-caracteristica
   ```

6. **Abre un Pull Request** desde GitHub:
   - Describe claramente los cambios realizados
   - Referencia issues relacionados (ej: "Closes #123")
   - Incluye capturas de pantalla para cambios visuales
   - Asegúrate que los checks de CI pasen

### Checklist de Pull Request

Antes de enviar tu PR, verifica que:

- [ ] El código sigue las guías de estilo del proyecto
- [ ] Has actualizado la documentación si es necesario
- [ ] Tus cambios no rompen funcionalidad existente
- [ ] Has probado en diferentes navegadores (Chrome, Firefox, Safari)
- [ ] Has probado en responsive (móvil y escritorio)
- [ ] Los mensajes de commit son descriptivos
- [ ] Has agregado comentarios donde el código es complejo
- [ ] No hay warnings o errores en la consola

## 🐛 Reporte de Bugs

Al reportar un bug, incluye:

**Descripción del Bug**
Una descripción clara y concisa del bug.

**Pasos para Reproducir**
1. Ve a '...'
2. Haz click en '....'
3. Scroll hasta '....'
4. Observa el error

**Comportamiento Esperado**
Descripción de lo que esperabas que sucediera.

**Capturas de Pantalla**
Si aplica, agrega capturas para ayudar a explicar el problema.

**Información del Entorno**
- Navegador: [ej: Chrome 120]
- OS: [ej: macOS 14.0]
- Versión del proyecto: [ej: v1.0.0]

**Contexto Adicional**
Cualquier otra información relevante sobre el problema.

## 💡 Solicitud de Características

Al solicitar una característica, incluye:

**¿El problema está relacionado a una necesidad?**
Una descripción clara de cuál es el problema. Ej: "Siempre me frustra cuando..."

**Describe la Solución que Te Gustaría**
Una descripción clara y concisa de lo que quieres que suceda.

**Describe Alternativas que has Considerado**
Una descripción de cualquier solución o característica alternativa que hayas considerado.

**Contexto Adicional**
Agrega cualquier otro contexto o capturas sobre la solicitud de característica.

## 🎨 Agregando Nuevas Secciones

Si quieres agregar un nuevo tipo de sección al generador:

1. **Define el tipo** en `src/lib/types.ts`:
   ```typescript
   export type SectionType = 
     | 'header'
     | 'about'
     // ... existing types
     | 'tu-nueva-seccion';  // Add here
   ```

2. **Agrega el template** en `sectionTemplates`:
   ```typescript
   'tu-nueva-seccion': {
     name: 'Tu Nueva Sección',
     description: 'Descripción breve',
     defaultData: {
       // campos por defecto
     }
   }
   ```

3. **Crea el editor** en `src/components/editors/TuNuevaSeccionEditor.tsx`:
   ```typescript
   export function TuNuevaSeccionEditor({ data, onChange }: EditorProps) {
     // Implementa la UI del editor
   }
   ```

4. **Actualiza el generador** en `src/lib/markdown.ts`:
   ```typescript
   case 'tu-nueva-seccion':
     return generateTuNuevaSeccionMarkdown(section.data);
   ```

5. **Agrega el caso** en `SectionBuilder.tsx` para renderizar el editor

## 📞 ¿Necesitas Ayuda?

Si tienes preguntas sobre cómo contribuir:

- Abre un issue con la etiqueta `question`
- Revisa issues existentes - alguien más pudo haber tenido la misma pregunta
- Revisa la documentación del proyecto

## 🙏 Reconocimientos

Gracias a todos los contribuidores que han ayudado a hacer este proyecto mejor. Cada contribución, sin importar cuán pequeña, es valorada y apreciada.

---

**¡Feliz contribución! 🚀**
