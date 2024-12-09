// Tema
export interface TemaMenu {
    id: string;
    nombre: string;
}

// Módulo
export interface ModuloMenu {
    id: number;
    nombre: string;
    temas: TemaMenu[];
    quizz?: string;
    aprobado: boolean;
    visible: boolean;
}
