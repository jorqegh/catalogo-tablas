// Datos de las tablas y traducción de la interfaz
const surfboards = [
  {
    id: "tabla-1",
    medidas: "6'5\" x 18 1/4\" x 2 1/4\" - 28.7L",
    fotoMiniatura: "src/img/tabla1_mini.jpg",
    fotoFrontal: "src/img/tabla_sdy_front.jpg",
    fotoTrasera: "src/img/tabla_sdy_back.jpg",
    es: { titulo: "Modelo SDY Pro", descripcion: "Ideal para condiciones variables, ofrece gran remada y control en el giro." },
    en: { titulo: "SDY Pro Model", descripcion: "Ideal for variable conditions, offers great paddling power and control during turns." }
  },
 {
    id: "tabla-2",
    medidas: "5'6\" x 19 1/4\" x 2 3/8\" - 28L", // <-- Puedes cambiar estas medidas por las reales de esta tabla
    fotoMiniatura: "src/img/tabla_jfb_mini.jpg",
    fotoFrontal: "src/img/tabla_jfb_front.jpg",
    fotoTrasera: "src/img/tabla_jfb_back.jpg",
    es: { titulo: "Modelo JFB SuperSpeed", descripcion: "Una tabla rápida y reactiva, perfecta para exprimir cada ola." },
    en: { titulo: "JFB SuperSpeed Model", descripcion: "A fast and responsive board, perfect to maximize every single wave." }
  }
];

const interfazUpt = {
  es: { verDetalle: "Ver detalles", volver: "Volver al catálogo", dimensiones: "Medidas:" },
  en: { verDetalle: "View details", volver: "Back to catalog", dimensiones: "Dimensions:" }
};

