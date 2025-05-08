// src/components/Modal.tsx
import React from "react";
import { X } from "lucide-react";

type Lote = {
    id: string;
    estado: "disponible" | "vendido" | "reservado";
    dimensiones: string;
};

type ModalProps = {
    lote: Lote | null;
    onClose: () => void;
};

export default function Modal({ lote, onClose }: ModalProps) {
    if (!lote) return null;

    const estadoColor = {
        disponible: "text-green-600",
        vendido: "text-red-600",
        reservado: "text-yellow-600",
    };

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-2xl shadow-xl w-[90%] max-w-md relative">
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 text-gray-500 hover:text-black"
                >
                    <X size={24} />
                </button>

                <h2 className="text-xl text-black font-bold mb-4">Información del Lote</h2>

                <div className="space-y-2">
                    <p className=" text-black "><span className="font-medium text-black">ID:</span> {lote.id}</p>
                    <p >
                        <span className="font-medium text-black">Estado:</span>{" "}
                        <span className={estadoColor[lote.estado]}>{lote.estado}</span>
                    </p>
                    <p className=" text-black ">
                        <span className="font-medium text-black">Dimensiones:</span> {lote.dimensiones}
                    </p>
                </div>
            </div>
        </div>
    );
}
