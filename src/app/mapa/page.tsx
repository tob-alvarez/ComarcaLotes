// app/mapa/page.tsx

import GeoForm from "@/components/GeoForm/GeoForm";
import Mapa from "@/components/Mapa/Mapa";

export default function MapaPage() {
    return (
        <div>
            <Mapa />
            <GeoForm />
        </div>
    );
}
