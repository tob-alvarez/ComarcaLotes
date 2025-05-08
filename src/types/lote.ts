export type EstadoLote = "disponible" | "reservado" | "vendido";

export type Lote = {
    id: string;
    estado: EstadoLote;
    dimensiones: string;
    coordenadas: { lat: number; lng: number }[];
};
