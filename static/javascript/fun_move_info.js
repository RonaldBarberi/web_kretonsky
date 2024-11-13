class UpdateInfo {
    constructor(informacion) {
        this.index = 0;
        this.informacion = informacion;
    }

    update_info_start() {
        const varTittleAnimation = document.querySelector(".title-information");
        const varAboutAnimation = document.querySelector(".about-me");

        // Cambia el contenido de los elementos
        varTittleAnimation.textContent = this.informacion[this.index].title;
        varAboutAnimation.innerHTML = this.informacion[this.index].about; // Usa innerHTML si `about` contiene HTML

        // Agrega la clase de animación
        varTittleAnimation.classList.add("fade-in");
        varAboutAnimation.classList.add("fade-in");

        // Deshabilita los botones si es necesario
        document.getElementById("formerButton").disabled = this.index === 0;
        document.getElementById("nextButton").disabled = this.index === this.informacion.length - 1;

        // Remueve la clase después de la animación para que pueda reutilizarse en el siguiente cambio
        setTimeout(() => {
            varTittleAnimation.classList.remove("fade-in");
            varAboutAnimation.classList.remove("fade-in");
        }, 500);
    }

    update_next_info() {
        // Incrementa el índice solo si no está en el último elemento
        if (this.index < this.informacion.length - 1) {
            this.index++;
            this.update_info_start();
        }
    }

    update_info_finish() {
        // Decrementa el índice solo si no está en el primer elemento
        if (this.index > 0) {
            this.index--;
            this.update_info_start();
        }
    }
}

function main() {
    const informacion = [
        {
            title: "</Acerca de mí>",
            about: `Profesional en DataMining con sólida experiencia en la creación de ETLs, automatización de procesos, desarrollo web
                y análisis de datos a gran escala. Dominio de Python, Frameworks como Django Flask y FastAPI, JavaScript, HTML, CSS y
                SQL relacional y no relacional. Familiarizado con la administración básica de servidores Linux y Docker, para
                la ejecución y soporte de procesos eficientes. Conocimiento avanzado en Forecasting y Workforce, con enfoque en
                liderazgo de equipo y cumplimiento de metas.`
        },
        {
            title: "</Herramientas>",
            about: `<ul>
                        <li>Python</li>
                        <li>Django</li>
                        <li>Flask</li>
                        <li>FastAPI</li>
                        <li>SQL (Relaciona / No Relacional)</li>
                        <li>JavaScript</li>
                        <li>R</li>
                        <li>Lunix Ubuntu</li>
                        <li>Docker</li>
                        <li>Power Bi</li>
                        <li>Excel</li>
                        <li>Erlang C</li>
                        <li>Inglés B1</li>
                    </ul>`
        },
        {
            title: "</Data Science>",
            about: `Cuento con una experiencia `
        },
        {
            title: "</Data Analyst>",
            about: "Aspirar a contribuir en proyectos innovadores de análisis de datos y desarrollo de software, con un enfoque en soluciones eficientes y escalables."
        },
        {
            title: "</Data Engeineer>",
            about: "Aspirar a contribuir en proyectos innovadores de análisis de datos y desarrollo de software, con un enfoque en soluciones eficientes y escalables."
        },
        {
            title: "</Developer Backend>",
            about: "Aspirar a contribuir en proyectos innovadores de análisis de datos y desarrollo de software, con un enfoque en soluciones eficientes y escalables."
        }
    ];

    const varReloadInfo = new UpdateInfo(informacion);

    // Llama al método inicial para mostrar la primera información
    varReloadInfo.update_info_start();

    // Agrega los eventos click a los botones
    document.getElementById("nextButton").addEventListener("click", () => varReloadInfo.update_next_info());
    document.getElementById("formerButton").addEventListener("click", () => varReloadInfo.update_info_finish());
}

main();