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
            about: `Tengo amplia experiencia en el análisis y manipulación de datos, con un sólido dominio de herramientas de programación 
            y técnicas de Big Data para gestionar grandes volúmenes de información. He desarrollado modelos predictivos, incluyendo 
            regresión, árboles de decisión, redes neuronales y modelos de ensemble, y actualmente profundizo en Deep Learning para mejorar 
            el uso de redes neuronales. Cuento con 3 años de experiencia aplicando diversos procesos y modelos de Machine Learning, 
            utilizando métodos estadísticos para asegurar la precisión y fiabilidad en la interpretación de los datos.
            
            (3 años de experiencia).`
        },
        {
            title: "</Data Analyst>",
            about: `Tengo amplia experiencia en manipulación de datos y generación de informes, realizando análisis estadísticos y diversas 
            técnicas para extraer y obtener información de bases de datos. Cuento con sólidos conocimientos en depuración y limpieza de 
            datos, asegurando la calidad y precisión de la información procesada. Además, desarrollo visualizaciones gráficas efectivas 
            que representan los resultados del análisis de forma clara y comprensible, apoyado en un profundo conocimiento y habilidades 
            comerciales.
            
            (5 años de experiencia).`
        },
        {
            title: "</Data Engeineer>",
            about: `Tengo un extenso conocimiento en bases de datos relacionales y no relacionales, así como en almacenamiento de datos 
            (Data Warehousing), asegurando un ciclo de vida eficiente de la información. Cuento con amplia experiencia en la creación de 
            procesos ETL, uso del framework Apache Spark y técnicas de web scraping para la extracción de datos. También tengo experiencia 
            en servicios en la nube como AWS, Azure y Google Cloud. Manejo lenguajes de programación para establecer procesos autosostenibles, 
            lo que me ha permitido desarrollar competencias en Big Data, gestionando información en tiempo real para diversos propósitos, 
            siempre con una arquitectura escalable y optimizando el consumo de recursos. 
        
            (5 años de experiencia).`
        },
        {
            title: "</Developer Backend Junior>",
            about: `Recientemente he comenzado mi experiencia como Desarrollador, enfocándome en la implementación de aplicaciones web para 
            la gestión de tareas y desarrollo de proyectos que permiten realizar análisis exploratorio de datos (EDA) en tiempo real. Trabajo 
            con una estructura sólida tanto en el frontend como en el backend, y he desarrollado proyectos personales, incluido mi portafolio 
            actual. Tengo experiencia en conexiones con bases de datos SQL y NoSQL, y uso de ORM. Además, implemento comunicación entre 
            servicios mediante consumo de APIs REST y gestiono el control de versiones. Diseño arquitectura de software escalable y de larga 
            vida útil, apoyándome en contenedores y orquestación para optimizar el rendimiento del proyecto.

            (1 año de experiencia).`
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
