"use client";

import {
    GoogleMap,
    LoadScript,
    Polygon,
} from "@react-google-maps/api";
import { useState } from "react";
import Modal from "@/components/common/Modal/Modal"; // ajustá la ruta si está en otro lugar

const containerStyle = {
    width: "100%",
    height: "100%",
};

const center = {
    lat: -26.750163622875032,
    lng: -65.17250695415372,
};

import rawLotes from "@/data/lotes.json";
import { Lote } from "@/types/lote";

const lotes: Lote[] = rawLotes as Lote[];


export default function Mapa() {
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
    const [loteSeleccionado, setLoteSeleccionado] = useState<Lote | null>(null);

    return (
        <div className="flex flex-col items-center py-6 gap-4">
            <div className="w-[80%] h-[70dvh] border rounded-xl shadow-lg overflow-hidden relative">
                <LoadScript googleMapsApiKey={apiKey ?? ""}>
                    <GoogleMap
                        mapContainerStyle={containerStyle}
                        center={center}
                        zoom={17}
                    >
                        {lotes.map((lote) => (
                            <Polygon
                                key={lote.id}
                                paths={lote.coordenadas}
                                options={{
                                    fillColor:
                                        lote.estado === "vendido"
                                            ? "#f87171"
                                            : lote.estado === "reservado"
                                                ? "#facc15"
                                                : "#4ade80",
                                    fillOpacity: 0.5,
                                    strokeColor: "#000",
                                    strokeOpacity: 1,
                                    strokeWeight: 1.5,
                                    clickable: true,
                                }}
                                onClick={() => setLoteSeleccionado(lote)}
                            />
                        ))}
                    </GoogleMap>
                </LoadScript>
                {loteSeleccionado && (
                    <Modal lote={loteSeleccionado} onClose={() => setLoteSeleccionado(null)} />
                )}
            </div>
        </div>
    );
}
