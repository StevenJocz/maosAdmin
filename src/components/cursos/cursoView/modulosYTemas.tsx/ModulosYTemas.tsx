"use client";
import React, { useState } from "react";
import { IoChevronDown, IoChevronUp, IoCaretForward, IoHelpCircleOutline, IoCheckmark, IoLockClosed } from "react-icons/io5";
import style from './ModulosYTemas.module.css';
import { fetchModulosMenu } from "../CursoView.service";

const modulos = fetchModulosMenu();

interface ModulosYTemasProps {
    cursoId: string;
    onTemaSeleccionado: (temaId: string) => void;
}

const ModulosYTemas: React.FC<ModulosYTemasProps> = ({ cursoId, onTemaSeleccionado }) => {
    const [modulosVisibles, setModulosVisibles] = useState<Record<number, boolean>>({});
    const [temaSeleccionado, setTemaSeleccionado] = useState<string | null>(null);

    const toggleModulo = (moduloId: number) => {
        setModulosVisibles((prev) => ({
            ...prev,
            [moduloId]: prev[moduloId] ? false : true,
        }));
    };

    const handleTemaClick = (temaId: string) => {
        setTemaSeleccionado(temaId);
        onTemaSeleccionado(temaId);
    };

    const handleQuizzClick = (moduloId: number) => {
        const quizzId = `quizz-${moduloId}`; // Generar un ID único para el quiz
        setTemaSeleccionado(quizzId);
        onTemaSeleccionado(quizzId); // Pasar el ID al callback
    };

    return (
        <ul className={style.ModulosYTemas}>
            {modulos.map((modulo) => (
                <li key={modulo.id}>
                    <div
                        className={style.ModulosYTemas_Modulo}
                        onClick={() => modulo.visible && toggleModulo(modulo.id)}
                    >
                        {modulo.nombre}
                        
                        {modulo.aprobado && (
                            <IoCheckmark className={style.IconoAprobado} />
                        )}

                        {modulosVisibles[modulo.id] ? (
                            <IoChevronUp />
                        ) : (
                            !modulo.visible ? (
                                <IoLockClosed className={style.IconoCandado} />
                            ) : (
                                <IoChevronDown />
                            )
                        )}
                    </div>
                    {/* Mostrar temas solo si el módulo está visible */}
                    {modulosVisibles[modulo.id] && modulo.visible && (
                        <ul className={style.ModulosYTemas_Temas}>
                            {modulo.temas.map((tema) => (
                                <li
                                    key={tema.id}
                                    className={`${style.ModulosYTemas_Tema} ${temaSeleccionado === tema.id ? style.TemaSeleccionado : ""
                                        }`}
                                    onClick={() => handleTemaClick(tema.id)}
                                >
                                    <IoCaretForward />
                                    {tema.nombre}
                                </li>
                            ))}
                            {/* Mostrar quizz si existe */}
                            {modulo.quizz && (
                                <li
                                    className={`${style.ModulosYTemas_Tema} ${temaSeleccionado === `quizz-${modulo.id}` ? style.TemaSeleccionado : ""
                                        }`}
                                    onClick={() => handleQuizzClick(modulo.id)}
                                >
                                    <IoHelpCircleOutline />
                                    {modulo.quizz}
                                </li>
                            )}
                        </ul>
                    )}
                </li>
            ))}
        </ul>
    );
};

export default ModulosYTemas;
