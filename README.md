# 🎉 Amigo Secreto - Aplicación Web

## 📌 Descripción
Esta aplicación permite a los usuarios ingresar nombres de amigos en una lista para luego realizar un **sorteo aleatorio** y determinar quién es el "amigo secreto". Está diseñada con una **interfaz simple, dinámica y validaciones robustas**, asegurando que los nombres ingresados sean válidos.

## 🚀 Características Principales
- **Agregar nombres**: Valida que los nombres sean solo letras, tengan al menos **3 caracteres** y no se repitan.
- **Lista dinámica**: Los nombres ingresados se muestran en la interfaz en tiempo real.
- **Sorteo aleatorio**: Al presionar "Sortear Amigo", el sistema selecciona un nombre aleatoriamente.
- **Validaciones robustas**: Evita que se ingresen números, nombres vacíos o menores a 3 caracteres.
- **Interfaz accesible y adaptable**.

## 🛠️ Tecnologías Utilizadas
- **HTML5** - Estructura de la página.
- **CSS3** - Estilos y diseño responsivo.
- **JavaScript (ES6+)** - Lógica de la aplicación y manipulación del DOM.

## 📂 Estructura del Proyecto
```
AmigoSecreto/
│── assets/                # Imágenes y recursos estáticos
│── index.html             # Página principal
│── style.css              # Estilos de la aplicación
│── app.js                 # Lógica del programa
│── README.md              # Documentación del proyecto
```

## 🎯 Cómo Usar
### 1️⃣ Agregar un Nombre
- Ingresa un nombre en el campo de texto.
- Presiona el botón **"Añadir"**.
- El nombre aparecerá en la lista.

### 2️⃣ Sortear el Amigo Secreto
- Una vez que haya **al menos dos nombres**, presiona **"Sortear Amigo"**.
- Se mostrará un nombre seleccionado aleatoriamente.

## 🏗️ Instalación y Uso en Desarrollo
### Requisitos
- Tener instalado un **navegador moderno** (Chrome, Firefox, Edge, Safari).
- **Opcional:** Tener instalado **VS Code** y la extensión **Live Server**.

### Pasos para ejecutar
1. **Clonar el repositorio**
```bash
    git clone https://github.com/sebastian-norena-marquez/alura_challenge_1.git
```
2. **Abrir el proyecto en VS Code**
```bash
    cd alura_challenge_1
    code .
```
3. **Ejecutar con Live Server**
- Si tienes instalado **Live Server**, haz clic derecho en `index.html` y selecciona **"Open with Live Server"**.
- O ejecuta el siguiente comando en la terminal:
```bash
    live-server
```

## ✅ Buenas Prácticas Implementadas
- **Código modular**: Separación clara entre HTML, CSS y JavaScript.
- **Uso de `addEventListener` en lugar de `onclick` en HTML**.
- **Manejo de errores**: Validaciones estrictas en los nombres ingresados.
- **Uso de `const` y `let` para evitar variables globales innecesarias**.

## 📌 Próximas Mejoras 🚀
- 🎨 **Mejoras en el diseño**: Animaciones y efectos visuales.
- 📱 **Versión responsive**: Adaptación completa para móviles.
- 🔄 **Opción para reiniciar la lista de amigos**.

## 🧑‍💻 Autor
**Sebastián Norena** - [GitHub](https://github.com/sebastian-norena-marquez)

¡Disfruta de la aplicación y diviértete sorteando tu **Amigo Secreto**! 🎁🎊
