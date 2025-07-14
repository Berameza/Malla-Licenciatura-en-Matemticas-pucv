document.addEventListener('DOMContentLoaded', function() {
    // Datos completos de todos los cursos por semestre (actualizados)
    const coursesData = [
        // 1° Semestre
        {
            id: 'calculo1',
            name: 'Cálculo 1',
            semester: 1,
            completed: false,
            unlocks: ['calculo2'],
            requirements: []
        },
        {
            id: 'algebra',
            name: 'Álgebra',
            semester: 1,
            completed: false,
            unlocks: ['algebra-lineal1', 'teoria-numeros'],
            requirements: []
        },
        {
            id: 'geometria-analitica',
            name: 'Geometría analítica y vectorial',
            semester: 1,
            completed: false,
            unlocks: ['algebra-lineal1'],
            requirements: []
        },
        {
            id: 'antropologia',
            name: 'Antropología cristiana',
            semester: 1,
            completed: false,
            unlocks: [],
            requirements: []
        },
        
        // 2° Semestre
        {
            id: 'calculo2',
            name: 'Cálculo 2',
            semester: 2,
            completed: false,
            unlocks: ['calculo-varias-variables', 'ecuaciones-diferenciales', 'probabilidades'],
            requirements: ['calculo1']
        },
        {
            id: 'algebra-lineal1',
            name: 'Álgebra Lineal 1',
            semester: 2,
            completed: false,
            unlocks: ['algebra-lineal2'],
            requirements: ['algebra', 'geometria-analitica']
        },
        {
            id: 'programacion',
            name: 'Programación',
            semester: 2,
            completed: false,
            unlocks: ['metodos-numericos'],
            requirements: []
        },
        {
            id: 'tic-matematico',
            name: 'TIC y quehacer matemático',
            semester: 2,
            completed: false,
            unlocks: [],
            requirements: []
        },
        {
            id: 'etica',
            name: 'Ética cristiana',
            semester: 2,
            completed: false,
            unlocks: [],
            requirements: []
        },
        
        // 3° Semestre
        {
            id: 'calculo-varias-variables',
            name: 'Cálculo en varias variables',
            semester: 3,
            completed: false,
            unlocks: ['analisis-real', 'geometria-diferencial', 'calculo4'],
            requirements: ['calculo2']
        },
        {
            id: 'algebra-lineal2',
            name: 'Álgebra Lineal 2',
            semester: 3,
            completed: false,
            unlocks: ['metodos-numericos'],
            requirements: ['algebra-lineal1']
        },
        {
            id: 'ecuaciones-diferenciales',
            name: 'Ecuaciones diferenciales',
            semester: 3,
            completed: false,
            unlocks: [],
            requirements: ['calculo2']
        },
        {
            id: 'teoria-numeros',
            name: 'Teoría de números',
            semester: 3,
            completed: false,
            unlocks: ['estructuras-algebraicas1'],
            requirements: ['algebra']
        },
        {
            id: 'formacion1',
            name: 'Formación fundamental 1',
            semester: 3,
            completed: false,
            unlocks: [],
            requirements: []
        },
        
        // 4° Semestre
        {
            id: 'calculo4',
            name: 'Cálculo 4',
            semester: 4,
            completed: false,
            unlocks: ['mecanica-clasica', 'inferencia-estadistica', 'procesos-estocasticos'],
            requirements: ['calculo-varias-variables']
        },
        {
            id: 'analisis-real',
            name: 'Análisis real',
            semester: 4,
            completed: false,
            unlocks: ['espacios-metricos'],
            requirements: ['calculo-varias-variables']
        },
        {
            id: 'probabilidades',
            name: 'Probabilidades',
            semester: 4,
            completed: false,
            unlocks: ['mecanica-clasica', 'inferencia-estadistica', 'procesos-estocasticos'],
            requirements: ['calculo2']
        },
        {
            id: 'estructuras-algebraicas1',
            name: 'Estructuras algebraicas 1',
            semester: 4,
            completed: false,
            unlocks: ['estructuras-algebraicas2'],
            requirements: ['teoria-numeros']
        },
        
        // 5° Semestre
        {
            id: 'metodos-numericos',
            name: 'Métodos numéricos',
            semester: 5,
            completed: false,
            unlocks: ['tesis'],
            requirements: ['algebra-lineal2', 'programacion']
        },
        {
            id: 'espacios-metricos',
            name: 'Espacios métricos',
            semester: 5,
            completed: false,
            unlocks: ['medida-integracion', 'tesis'],
            requirements: ['analisis-real']
        },
        {
            id: 'mecanica-clasica',
            name: 'Mecánica clásica',
            semester: 5,
            completed: false,
            unlocks: ['fisica-moderna', 'modelos-lineales', 'series-tiempo', 'tesis'],
            requirements: ['calculo4', 'probabilidades']
        },
        {
            id: 'inferencia-estadistica',
            name: 'Inferencia estadística',
            semester: 5,
            completed: false,
            unlocks: ['fisica-moderna', 'modelos-lineales', 'series-tiempo', 'tesis'],
            requirements: ['calculo4', 'probabilidades']
        },
        {
            id: 'procesos-estocasticos',
            name: 'Procesos estocásticos aplicados',
            semester: 5,
            completed: false,
            unlocks: ['fisica-moderna', 'modelos-lineales', 'series-tiempo', 'tesis'],
            requirements: ['calculo4', 'probabilidades']
        },
        {
            id: 'estructuras-algebraicas2',
            name: 'Estructuras algebraicas 2',
            semester: 5,
            completed: false,
            unlocks: ['tesis'],
            requirements: ['estructuras-algebraicas1']
        },
        {
            id: 'ingles1',
            name: 'Inglés 1',
            semester: 5,
            completed: false,
            unlocks: ['tesis', 'ingles2'],
            requirements: []
        },
        
        // 6° Semestre
        {
            id: 'geometria-diferencial',
            name: 'Geometría diferencial',
            semester: 6,
            completed: false,
            unlocks: [],
            requirements: ['calculo-varias-variables']
        },
        {
            id: 'medida-integracion',
            name: 'Medida e integración',
            semester: 6,
            completed: false,
            unlocks: [],
            requirements: ['espacios-metricos']
        },
        {
            id: 'fisica-moderna',
            name: 'Física moderna',
            semester: 6,
            completed: false,
            unlocks: [],
            requirements: ['mecanica-clasica', 'inferencia-estadistica', 'procesos-estocasticos']
        },
        {
            id: 'modelos-lineales',
            name: 'Modelos lineales',
            semester: 6,
            completed: false,
            unlocks: [],
            requirements: ['mecanica-clasica', 'inferencia-estadistica', 'procesos-estocasticos']
        },
        {
            id: 'series-tiempo',
            name: 'Series de tiempo',
            semester: 6,
            completed: false,
            unlocks: [],
            requirements: ['mecanica-clasica', 'inferencia-estadistica', 'procesos-estocasticos']
        },
        {
            id: 'optativo1',
            name: 'Optativo 1',
            semester: 6,
            completed: false,
            unlocks: [],
            requirements: []
        },
        {
            id: 'ingles2',
            name: 'Inglés 2',
            semester: 6,
            completed: false,
            unlocks: ['ingles3'],
            requirements: ['ingles1']
        },
        
        // 7° Semestre
        {
            id: 'optativo2',
            name: 'Optativo 2',
            semester: 7,
            completed: false,
            unlocks: ['optativo5'],
            requirements: []
        },
        {
            id: 'optativo3',
            name: 'Optativo 3',
            semester: 7,
            completed: false,
            unlocks: [],
            requirements: []
        },
        {
            id: 'optativo4',
            name: 'Optativo 4',
            semester: 7,
            completed: false,
            unlocks: [],
            requirements: []
        },
        {
            id: 'formacion2',
            name: 'Formación fundamental 2',
            semester: 7,
            completed: false,
            unlocks: [],
            requirements: []
        },
        {
            id: 'ingles3',
            name: 'Inglés 3',
            semester: 7,
            completed: false,
            unlocks: ['ingles4'],
            requirements: ['ingles2']
        },
        
        // 8° Semestre
        {
            id: 'optativo5',
            name: 'Optativo 5',
            semester: 8,
            completed: false,
            unlocks: [],
            requirements: ['optativo2']
        },
        {
            id: 'optativo6',
            name: 'Optativo 6',
            semester: 8,
            completed: false,
            unlocks: [],
            requirements: []
        },
        {
            id: 'tesis',
            name: 'Trabajo de tesis',
            semester: 8,
            completed: false,
            unlocks: [],
            requirements: [
                'metodos-numericos', 
                'espacios-metricos', 
                'mecanica-clasica', 
                'inferencia-estadistica', 
                'procesos-estocasticos',
                'estructuras-algebraicas2',
                'ingles1'
            ]
        },
        {
            id: 'formacion3',
            name: 'Formación fundamental 3',
            semester: 8,
            completed: false,
            unlocks: [],
            requirements: []
        },
        {
            id: 'ingles4',
            name: 'Inglés 4',
            semester: 8,
            completed: false,
            unlocks: [],
            requirements: ['ingles3']
        }
    ];

    // Elementos del DOM
    const semestersContainer = document.getElementById('semesters-container');
    const progressFill = document.getElementById('progress-fill');
    const progressText = document.getElementById('progress-text');
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // Cargar datos guardados
    let savedCourses = JSON.parse(localStorage.getItem('completedCourses')) || [];
    const savedTheme = localStorage.getItem('theme') || 
                      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

    // Inicializar tema
    function initTheme() {
        if (savedTheme === 'dark') {
            body.setAttribute('data-theme', 'dark');
            themeToggle.textContent = '☀️ Tema Claro';
        } else {
            body.removeAttribute('data-theme');
            themeToggle.textContent = '🌙 Tema Oscuro';
        }
    }

    // Alternar tema
    function toggleTheme() {
        if (body.getAttribute('data-theme') === 'dark') {
            body.removeAttribute('data-theme');
            localStorage.setItem('theme', 'light');
            themeToggle.textContent = '🌙 Tema Oscuro';
        } else {
            body.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            themeToggle.textContent = '☀️ Tema Claro';
        }
    }

    // Marcar cursos completados
    function markCompletedCourses() {
        savedCourses.forEach(courseId => {
            const course = coursesData.find(c => c.id === courseId);
            if (course) {
                course.completed = true;
            }
        });
    }

    // Renderizar semestres
    function renderSemesters() {
        semestersContainer.innerHTML = '';
        
        const semesters = {};
        coursesData.forEach(course => {
            if (!semesters[course.semester]) {
                semesters[course.semester] = [];
            }
            semesters[course.semester].push(course);
        });
        
        for (let i = 1; i <= 8; i++) {
            if (semesters[i]) {
                const semesterElement = document.createElement('div');
                semesterElement.className = 'semester';
                
                const semesterHeader = document.createElement('div');
                semesterHeader.className = 'semester-header';
                
                const semesterTitle = document.createElement('h2');
                semesterTitle.className = 'semester-title';
                semesterTitle.textContent = `${i}° Semestre`;
                
                semesterHeader.appendChild(semesterTitle);
                semesterElement.appendChild(semesterHeader);
                
                const coursesContainer = document.createElement('div');
                coursesContainer.className = 'semester-courses';
                
                semesters[i].forEach(course => {
                    const courseElement = createCourseElement(course);
                    coursesContainer.appendChild(courseElement);
                });
                
                semesterElement.appendChild(coursesContainer);
                semestersContainer.appendChild(semesterElement);
            }
        }
    }

    // Crear elemento de curso
    function createCourseElement(course) {
        const courseElement = document.createElement('div');
        courseElement.className = 'course';
        courseElement.id = course.id;
        
        const isLocked = course.requirements.length > 0 && 
                         !course.requirements.every(reqId => {
                             const reqCourse = coursesData.find(c => c.id === reqId);
                             return reqCourse && reqCourse.completed;
                         });
        
        if (isLocked && !course.completed) {
            courseElement.classList.add('locked');
        } else if (!course.completed && !isLocked) {
            courseElement.classList.add('unlocked');
        } else if (course.completed) {
            courseElement.classList.add('completed');
        }
        
        const courseName = document.createElement('h3');
        courseName.className = 'course-name';
        courseName.textContent = course.name;
        courseElement.appendChild(courseName);
        
        if (course.requirements.length > 0) {
            const courseReqs = document.createElement('p');
            courseReqs.className = 'course-requirements';
            
            const reqNames = course.requirements.map(reqId => {
                const reqCourse = coursesData.find(c => c.id === reqId);
                return reqCourse ? reqCourse.name : '';
            }).filter(name => name !== '');
            
            courseReqs.textContent = `Requisitos: ${reqNames.join(', ')}`;
            courseElement.appendChild(courseReqs);
        }
        
        const courseButton = document.createElement('button');
        courseButton.className = 'course-button';
        courseButton.textContent = course.completed ? 'Aprobado' : 'Aprobar ramo';
        
        if (course.completed) {
            courseButton.classList.add('completed');
        } else if (isLocked) {
            courseButton.classList.add('locked');
            courseButton.disabled = true;
        }
        
        courseButton.addEventListener('click', () => {
            toggleCourseCompletion(course);
        });
        
        courseElement.appendChild(courseButton);
        
        if (course.unlocks.length > 0) {
            const tooltip = document.createElement('div');
            tooltip.className = 'tooltip';
            tooltip.textContent = 'i';
            
            const tooltipText = document.createElement('span');
            tooltipText.className = 'tooltip-text';
            
            const unlockNames = course.unlocks.map(unlockId => {
                const unlockCourse = coursesData.find(c => c.id === unlockId);
                return unlockCourse ? unlockCourse.name : '';
            }).filter(name => name !== '');
            
            tooltipText.textContent = `Desbloquea: ${unlockNames.join(', ')}`;
            tooltip.appendChild(tooltipText);
            courseElement.appendChild(tooltip);
        }
        
        return courseElement;
    }

    // Alternar estado de completado de un curso
    function toggleCourseCompletion(course) {
        course.completed = !course.completed;
        
        const completedCourses = coursesData
            .filter(c => c.completed)
            .map(c => c.id);
        localStorage.setItem('completedCourses', JSON.stringify(completedCourses));
        
        renderSemesters();
        updateProgress();
    }

    // Actualizar barra de progreso
    function updateProgress() {
        const completedCount = coursesData.filter(c => c.completed).length;
        const totalCount = coursesData.length;
        const percentage = Math.round((completedCount / totalCount) * 100);
        
        progressFill.style.width = `${percentage}%`;
        progressText.textContent = `${percentage}% completado (${completedCount}/${totalCount} ramos)`;
    }

    // Inicializar la aplicación
    function initApp() {
        initTheme();
        markCompletedCourses();
        renderSemesters();
        updateProgress();
        
        // Event listeners
        themeToggle.addEventListener('click', toggleTheme);
    }

    // Iniciar
    initApp();
});
