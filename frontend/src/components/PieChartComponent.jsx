import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import { Box, Typography } from '@mui/material';

const PieChartComponent = () => {
    const data = [
        { name: 'Granted', value: 29 },
        { name: 'Filed', value: 19 },
    ];

    const COLORS = ['#00BFFF', '#FF8042'];

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, value }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text
                x={x}
                y={y}
                fill="white"
                fontSize={29} // Increased font size for label
                textAnchor="middle"
                dominantBaseline="central"
            >
                {`${value}`}
            </text>
        );
    };

    const total = data.reduce((acc, curr) => acc + curr.value, 0);

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column', // Column layout to stack the pie chart and total text
                alignItems: 'center',
                justifyContent: 'center',
                height: '80vh', // Adjust height as needed
                pb: 7,
            }}
        >
            {/* Pie Chart and Legend container */}
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row', // Align pie chart and legend horizontally
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%',
                }}
            >
                {/* Pie Chart */}
                <ResponsiveContainer width="50%" height={400}>
                    <PieChart>
                        <Pie
                            data={data}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={renderCustomizedLabel} // Custom label rendering
                            outerRadius={150}
                            dataKey="value"
                        >
                            {data.map((entry, index) => (
                                <Cell
                                    key={`cell-${index}`}
                                    fill={COLORS[index % COLORS.length]}
                                />
                            ))}
                        </Pie>
                        <Tooltip />
                    </PieChart>
                </ResponsiveContainer>

                {/* Legend with Dots */}
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        ml: -4,
                        mt: -11, // Add space between pie chart and legend
                    }}
                >
                    {data.map((entry, index) => (
                        <Box
                            key={entry.name}
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                mb: 2, // Margin between legend items
                            }}
                        >
                            {/* Color Dot */}
                            <Box
                                sx={{
                                    width: 16,
                                    height: 16,
                                    backgroundColor: COLORS[index % COLORS.length],
                                    borderRadius: '50%',
                                    mr: 1,
                                }}
                            />
                            <Typography variant="body1" sx={{ fontSize: '20px' }}>
                                {entry.name}
                            </Typography>
                        </Box>
                    ))}
                </Box>
            </Box>

            <Typography variant="h6" sx={{ mr: 10, fontWeight: 'bold', color: '#1A2D5E', fontSize: '27px' }}>
                Total: <span style={{ color: '#1976d2' }}>{total}</span> and counting...
            </Typography>
        </Box>
    );
};

export default PieChartComponent;
