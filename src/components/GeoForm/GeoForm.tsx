'use client';

import { useState } from 'react';

export default function GeoForm() {
    const [input, setInput] = useState('');
    const [output, setOutput] = useState('');
    const [id, setId] = useState('lote-1');
    const [estado, setEstado] = useState('disponible');
    const [dimensiones, setDimensiones] = useState('20x30m');

    const handleConvert = () => {
        try {
            const parsed = JSON.parse(input);
            const coordenadas = parsed.map((pair: [number, number]) => ({
                lat: pair[1],
                lng: pair[0],
            }));

            const result = {
                id,
                estado,
                dimensiones,
                coordenadas,
            };

            setOutput(JSON.stringify(result, null, 2));
        } catch (e) {
            console.log(`Error al procesar las coordenadas: ${e}`);
            setOutput('❌ Error al procesar las coordenadas. Verificá el formato.');
        }
    };

    return (
        <div className="max-w-xl mx-auto p-4">
            <h1 className="text-xl font-bold mb-4">Convertir coordenadas a formato lote</h1>

            <div className="mb-2">
                <label className="block text-sm font-medium">ID del lote</label>
                <input
                    type="text"
                    className="w-full border rounded p-2"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                />
            </div>

            <div className="mb-2">
                <label className="block text-sm font-medium">Estado</label>
                <select
                    className="w-full border rounded p-2"
                    value={estado}
                    onChange={(e) => setEstado(e.target.value)}
                >
                    <option value="disponible">Disponible</option>
                    <option value="vendido">Vendido</option>
                    <option value="reservado">Reservado</option>
                </select>
            </div>

            <div className="mb-2">
                <label className="block text-sm font-medium">Dimensiones</label>
                <input
                    type="text"
                    className="w-full border rounded p-2"
                    value={dimensiones}
                    onChange={(e) => setDimensiones(e.target.value)}
                />
            </div>

            <div className="mb-2">
                <label className="block text-sm font-medium">Coordenadas (formato JSON)</label>
                <textarea
                    className="w-full border rounded p-2 h-40 font-mono"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder='Pega aquí algo como: [[-65.17, -26.75], ...]'
                />
            </div>

            <button
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                onClick={handleConvert}
            >
                Convertir
            </button>

            {output && (
                <div className="mt-4">
                    <label className="block text-sm font-medium">Resultado:</label>
                    <pre className="bg-dark-100 p-4 rounded text-sm overflow-x-auto whitespace-pre-wrap">
                        {output}
                    </pre>
                </div>
            )}
        </div>
    );
}
