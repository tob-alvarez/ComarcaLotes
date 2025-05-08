"use client";

import {
    GoogleMap,
    LoadScript,
    Polygon,
} from "@react-google-maps/api";
import lotes from "@/data/lotes.json";

const containerStyle = {
    width: "100%",
    height: "100%",
};

const center = {
    lat: -26.750163622875032,
    lng: -65.17250695415372,
};


export default function Mapa() {
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

    return (
        <div className="flex flex-col items-center py-6 gap-4">

            <div className="w-[80%] h-[70dvh] border rounded-xl shadow-lg overflow-hidden">
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
                                }}
                                onClick={() => alert(`Lote ${lote.id}: ${lote.estado} - ${lote.dimensiones}`)}
                            />
                        ))}

                    </GoogleMap>
                </LoadScript>
            </div>
        </div>
    );
}
