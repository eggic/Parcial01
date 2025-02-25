document.addEventListener("DOMContentLoaded", () => {
    const alertaBtn = document.getElementById("alerta-btn");
    const info2Btn = document.getElementById("info2-btn");
    const info3Btn = document.getElementById("info3-btn");
    const info4Btn = document.getElementById("info4-btn");
    const imagenAlerta = document.getElementById("imagen-alerta");
    const mensaje = document.getElementById("mensaje");

    alertaBtn.addEventListener("click", () => {
        mensaje.innerText = "El dengue es una enfermedad infecciosa causada por el virus del dengue, transmitida por mosquitos.";
        mensaje.style.color = "#d62828";
        mensaje.style.fontWeight = "bold";
    });

    info2Btn.addEventListener("click", () => {
        mensaje.innerText = "El dengue se transmite a través de la picadura del mosquito Aedes aegypti.";
        mensaje.style.color = "#d62828";
        mensaje.style.fontWeight = "normal";
    });

    info3Btn.addEventListener("click", () => {
        mensaje.innerText = "Los síntomas incluyen fiebre, náuseas, sarpullido y dolor muscular.";
        mensaje.style.color = "#d62828";
        mensaje.style.fontWeight = "normal";
    });

    info4Btn.addEventListener("click", () => {
        mensaje.innerText = "Para prevenir el dengue, evita acumulaciones de agua y usa repelente.";
        mensaje.style.color = "#d62828";
        mensaje.style.fontWeight = "normal";
    });



    const gifAlerta = document.getElementById("gif-alerta");

    gifAlerta.addEventListener("click", () => {
        alert("¡Este mosquito transmite el dengue! Recuerda eliminar el agua estancada.");
    });
    

    class CustomFooter extends HTMLElement {
        connectedCallback() {
            this.innerHTML = `
                <footer>
                    <p>&copy; 2025 - Información sobre el Dengue</p>
                    <p>Tania del Carmen Quintanilla Lozano</p>
                    <p>Rubia Arely Alvarenga de Mendoza</p>
                    <p><a href="https://github.com/TU_USUARIO/TU_REPOSITORIO" target="_blank">Repositorio en GitHub</a></p>
                    <p><a href="https://TU_USUARIO.github.io/TU_REPOSITORIO" target="_blank">Ver página en GitHub Pages</a></p>
                </footer>
            `;
        }
    }
    
    // Definir el nuevo elemento
    customElements.define("custom-footer", CustomFooter);
    
});
