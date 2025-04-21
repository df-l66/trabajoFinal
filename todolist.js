// Añadir tarea
function addTask() {
    const input = document.getElementById("taskInput");
    const taskText = input.value.trim();
  
    if (taskText === "") return;
  
    const taskItem = document.createElement("li");
    taskItem.textContent = taskText;
    taskItem.className = "list-group-item";
  
    // Marcar como completada
    taskItem.addEventListener("click", function () {
      taskItem.classList.toggle("text-decoration-line-through");
      taskItem.classList.toggle("text-muted");
    });
  
    // Eliminar con doble clic
    taskItem.addEventListener("dblclick", function () {
      taskItem.remove();
    });
  
    document.getElementById("taskList").appendChild(taskItem);
    input.value = "";
  }
  
  // Mostrar u ocultar el panel de configuración
  function toggleConfig() {
    const panel = document.getElementById("configPanel");
    panel.classList.toggle("d-none");
  }
  
  // Cerrar sesión
  function logout() {
    localStorage.removeItem("usuarioActivo"); // Por si usás esto para saber el login
    window.location.href = "inicio.html";
  }
  
  // Aplicar configuración guardada
  function applyConfig() {
    const config = JSON.parse(localStorage.getItem("config")) || {};
  
    document.body.style.fontFamily = config.font || "Arial";
    document.body.style.backgroundColor = config.bgColor || "#f8f9fa";
    document.body.style.color = config.textColor || "#000000";
  
    // Cargar valores en inputs
    document.getElementById("fontSelector").value = config.font || "Arial";
    document.getElementById("bgColorPicker").value = config.bgColor || "#f8f9fa";
    document.getElementById("textColorPicker").value = config.textColor || "#000000";
  }
  
  // Guardar configuración cuando se presiona "Aplicar cambios"
  function saveConfig() {
    const config = {
      font: document.getElementById("fontSelector").value,
      bgColor: document.getElementById("bgColorPicker").value,
      textColor: document.getElementById("textColorPicker").value
    };
  
    localStorage.setItem("config", JSON.stringify(config));
    applyConfig(); // Aplicarla de inmediato
  }
  
  
  function resetConfig() {
    localStorage.removeItem("config");
    applyConfig();
  }
  
  
  document.addEventListener("DOMContentLoaded", () => {
    applyConfig();
  });
  