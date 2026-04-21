import { PieChart, Pie, Cell } from 'recharts';

const data = [
    { ventas: "Mensual", monto: 2300 },
    { ventas: "Semanal", monto: 700 },
    { ventas: "Diario", monto: 1000 },
];
const COLORS = ['#2563eb', '#1e293b', '#10b981'];

function MyPieChart() {
    return (
        <div class="h-full w-full">
            <PieChart
                responsive
                style={{
                    border: '1px solid #ddd',
                    maxWidth: '100%',
                    maxHeight: '100%',
                    aspectRatio: 1,
                }}
            >
                <Pie
                    data={data}
                    dataKey="monto"
                    nameKey="ventas"
                    cx="50%"
                    cy="50%"
                    innerRadius="60%"
                    outerRadius="100%"
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
            </PieChart>
        </div>
    );
}
export default MyPieChart