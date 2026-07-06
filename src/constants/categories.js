export const CATEGORIES = [
    { label: 'Todas', value: null, color: 'bg-green-300 text-green-900' },
    {
        label: 'CAT.I',
        value: 1,
        color: 'bg-green-300 text-green-900',
        titleByCat: {
            temperatura: 'Recomendaciones estándar',
            viento: 'Recomendaciones estándar',
            precipitacion: 'Recomendaciones estándar'
        },
        titlesByRisk: {
            temperatura: {
                general: "Medidas preventivas generales ante temperaturas moderadas",
            },
            viento: {
                general: "Medidas preventivas generales y revisión de EPIs",

            },
            precipitacion: {
                general: "Medidas de seguridad generales por pavimento húmedo"
            }
        }
    },
    {
        label: 'CAT.II',
        value: 2,
        color: 'bg-gray-300 text-gray-900',
        titleByCat: {
            temperatura: 'Recomendaciones adecuadas',
            viento: 'Recomendaciones adecuadas',
            precipitacion: 'Recomendaciones adecuadas'
        },
        titlesByRisk: {
            temperatura: {
                general: "Medidas preventivas básicas de hidratación y organización",
                precaucion: "Precaución y monitorización en las siguientes labores al sol:",
            },
            viento: {
                general: "Medidas de seguridad por rachas de viento moderadas",
                precaucion: "Recomendaciones y vigilancia en relación a las siguientes labores:",
                prohibicion: "Prohibición de trabajos en altura y uso de elementos móviles:"
            },
            precipitacion: {
                general: "Medidas preventivas por reducción de visibilidad y adherencia",
                precaucion: "Labores condicionadas por presencia de agua en calzada",
                prohibicion: "Prohibición de trabajos de pintura vial o aglomerado"
            }
        }
    },
    {
        label: 'CAT.III',
        value: 3,
        color: 'bg-amber-200 text-amber-900',
        titleByCat: {
            temperatura: 'Recomendaciones concretas',
            viento: 'Recomendaciones concretas',
            precipitacion: 'Recomendaciones concretas'
        },
        titlesByRisk: {
            temperatura: {
                general: "Protocolo de obligado cumplimiento por estrés térmico severo",
                precaucion: "Labores condicionadas a ventanas horarias específicas:",
                prohibicion: "Prohibición absoluta de las siguientes labores de esfuerzo físico:"
            },
            viento: {
                general: "Protocolo de seguridad ante rachas de viento severas",
                precaucion: "Labores en márgenes de calzada bajo condiciones estrictas:",
                prohibicion: "Prohibición de operaciones de izado, poda o mantenimiento en altura:"
            },
            precipitacion: {
                general: "Medidas de actuación ante lluvias intensas o persistentes",
                precaucion: 'Operaciones de vigilancia y limpieza de drenajes urgentes',
                prohibicion: 'Prohibición de labores en zanjas, taludes o zonas inundables'
            }
        }
    },
    {
        label: 'CAT.IV',
        value: 4,
        color: 'bg-orange-200 text-orange-900',
        titleByCat: {
            temperatura: 'Recomendaciones específicas',
            viento: 'Recomendaciones específicas',
            precipitacion: 'Recomendaciones específicas'
        },
        titlesByRisk: {
            temperatura: {
                general: "Recomendaciones concretas y reorganización por calor extremo",
            },
            viento: {
                general: 'Medidas preventivas generales / EPIs',
                precaucion: "Precaución ante viento de muy alta intensidad",
                prohibicion: "Se prohíben todas las actuaciones en exterior ante viento de muy alta intensidad"
            },
            precipitacion: {
                general: "Prevención ante lluvia de intensidad muy alta con",
                precaucion: 'Precaución ante lluvia de intensidad muy alta con:',
                prohibicion: 'Se prohíben todas las actuaciones en exterior ante lluvias de intensidad muy alta:'
            }
        }
    },
    {
        label: 'CAT.V',
        value: 5,
        color: 'bg-red-200 text-red-900',
        titleByCat: {
            temperatura: 'Recomendaciones excepcionales',
            viento: 'Recomendaciones excepcionales',
            precipitacion: 'Recomendaciones excepcionales'
        },
        titlesByRisk: {
            temperatura: {
                general: "Instrucciones específicas de seguridad y paralización de actividades",
            },
            viento: {
                general: "Instrucciones de emergencia y limitación estricta de labores en el sector"
            },
            precipitacion: {
                general: "Instrucciones específicas ante situaciones de emergencia por temporal"
            }
        }
    },
];
