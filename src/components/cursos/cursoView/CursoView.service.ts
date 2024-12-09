import { ModuloMenu } from "./Curso.model";

export const fetchModulosMenu = (): ModuloMenu[] => {
    return [
        {
            id: 1,
            nombre: "Introducción al inglés",
            temas: [
                { id: "tema-1-1", nombre: "Saludos" },
                { id: "tema-1-2", nombre: "Números" },
                { id: "tema-1-3", nombre: "El abecedario" },
            ],
            quizz: "Quizz",
            aprobado: true,
            visible: true,
        },
        {
            id: 2,
            nombre: "Gramática básica",
            temas: [
                { id: "tema-2-1", nombre: "Pronombres" },
                { id: "tema-2-2", nombre: "Verbo to be" },
                { id: "tema-2-3", nombre: "Oraciones simples" },
            ],
            aprobado: false,
            visible: true,
        },
        {
            id: 3,
            nombre: "Vocabulario cotidiano",
            temas: [
                { id: "tema-3-1", nombre: "Objetos en el hogar" },
                { id: "tema-3-2", nombre: "Ropa y accesorios" },
                { id: "tema-3-3", nombre: "Medios de transporte" },
            ],
            quizz: "Quizz",
            aprobado: false,
            visible: false,
        },
        {
            id: 4,
            nombre: "Conversaciones prácticas",
            temas: [
                { id: "tema-4-1", nombre: "En un restaurante" },
                { id: "tema-4-2", nombre: "Haciendo compras" },
                { id: "tema-4-3", nombre: "Pidiendo direcciones" },
            ],
            aprobado: false,
            visible: false,
        },
    ];
};