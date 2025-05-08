// stores/useLotesStore.ts

import { create } from "zustand";

type Lote = {
  id: string;
  nombre: string;
  estado: "disponible" | "vendido";
  coordenadas: google.maps.LatLngLiteral[]; // para polígonos
};

type LotesState = {
  lotes: Lote[];
  seleccionarLote: (id: string) => void;
  loteSeleccionado: string | null;
};

export const useLotesStore = create<LotesState>((set) => ({
  lotes: [],
  seleccionarLote: (id) => set({ loteSeleccionado: id }),
  loteSeleccionado: null,
}));
