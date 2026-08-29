import { Route, Routes } from "react-router-dom";
import { ContactoPage } from "@features/contacto";
import { CotizadorPage } from "@features/cotizador";
import { HomePage } from "@features/home";
import { MaterialesPage } from "@features/materiales";
import { NotFoundPage } from "@features/notFound";
import { SolucionesIndustrialesPage } from "@features/solucionesIndustriales";
import { SustentabilidadPage } from "@features/sustentabilidad";
import { ShellLayout } from "@features/shell";

export const AppRouter = () => {
  return (
    <Routes>
      <Route element={<ShellLayout />}>
        <Route index element={<HomePage />} />
        <Route path="materiales" element={<MaterialesPage />} />
        <Route
          path="soluciones-industriales"
          element={<SolucionesIndustrialesPage />}
        />
        <Route path="sustentabilidad" element={<SustentabilidadPage />} />
        <Route path="cotizador" element={<CotizadorPage />} />
        <Route path="contacto" element={<ContactoPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};
