import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
const data = [
    { dia: "Lunes", hora: 8, tlibre: 75 },
    { dia: "Lunes", hora: 12, tlibre: 75 },
    { dia: "Lunes", hora: 16, tlibre: 80 },
    { dia: "Martes", hora: 8, tlibre: 110 },
    { dia: "Martes", hora: 12, tlibre: 30 },
    { dia: "Martes", hora: 16, tlibre: 90 },
    { dia: "Miercoles", hora: 8, tlibre: 80 },
    { dia: "Miercoles", hora: 12, tlibre: 90 },
    { dia: "Miercoles", hora: 16, tlibre: 75 },
    { dia: "Jueves", hora: 8, tlibre: 70 },
    { dia: "Jueves", hora: 12, tlibre: 70 },
    { dia: "Jueves", hora: 16, tlibre: 80 },
    { dia: "Viernes", hora: 8, tlibre: 100 },
    { dia: "Viernes", hora: 12, tlibre: 15 },
    { dia: "Viernes", hora: 16, tlibre: 80 },
    { dia: "Sabado", hora: 8, tlibre: 75 },
    { dia: "Sabado", hora: 12, tlibre: 70 },
    { dia: "Sabado", hora: 16, tlibre: 65 },
    { dia: "Domingo", hora: 8, tlibre: 75 },
    { dia: "Domingo", hora: 12, tlibre: 75 },
    { dia: "Domingo", hora: 16, tlibre: 75 },
];

function SimpleAreaChart() {
    return (
        <div class="p-4 mb-5">
            <AreaChart
                style={{ width: '100%', maxWidth: '100%', maxHeight: '30vh', aspectRatio: 1.618 }}
                responsive
                data={data}
                margin={{
                    top: 20,
                    right: 0,
                    left: 0,
                    bottom: 0,
                }}
                onContextMenu={(_, e) => e.preventDefault()}
            >
                <defs>
                    <linearGradient id="colorGreen" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                        <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                    </linearGradient>
                </defs>

                {/* Cambiamos 'name' por 'dia' */}
                <XAxis
                    dataKey="dia"
                    tick={{ fontSize: 12, fill: '#6b7280' }}
                    axisLine={false}
                    tickLine={false}
                    interval={2} // Muestra los días de forma espaciada
                />

                {/* El eje Y lo ocultamos o lo dejamos muy sutil para igualar el diseño original */}
                <YAxis hide={true} />

                {/* - Cambiamos 'uv' por 'tlibre'
            - Usamos 'monotone' para suavizar la curva
            - Aplicamos el color verde esmeralda (#10b981)
          */}
                <Area
                    type="linear"
                    dataKey="tlibre"
                    stroke="#10b981"
                    strokeWidth={2}
                    fillOpacity={1}
                    fill="url(#colorGreen)"
                />
            </AreaChart>
        </div>

    );

}

export default SimpleAreaChart