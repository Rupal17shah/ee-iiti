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
                fontSize={18}
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
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden', 
            }}
        >
            {/* Pie Chart and Legend */}
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%',
                    flexWrap: 'wrap', 
                    overflow: 'hidden', 
                }}
            >
                <Box
                    sx={{
                        width: '100%', 
                        minWidth: 300, 
                        maxWidth: 600,
                    }}
                >
                    <ResponsiveContainer width="100%" height={350}>
                        <PieChart>
                            <Pie
                                data={data}
                                cx="50%"
                                cy="50%"
                                labelLine={false}
                                label={renderCustomizedLabel}
                                outerRadius={130}
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
                </Box>

                {/* Legend */}
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        justifyContent: 'center',
                        mt: 2,
                    }}
                >
                    {data.map((entry, index) => (
                        <Box
                            key={entry.name}
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                mb: 1,
                            }}
                        >
                            <Box
                                sx={{
                                    width: 16,
                                    height: 16,
                                    backgroundColor: COLORS[index % COLORS.length],
                                    borderRadius: '50%',
                                    mr: 1,
                                    ml : 4,
                                }}
                            />
                            <Typography variant="body1" sx={{ fontSize: '16px' }}>
                                {entry.name}
                            </Typography>
                        </Box>
                    ))}
                </Box>
            </Box>

            {/* Total */}
            <Typography
                variant="h6"
                sx={{
                    paddingTop: '15px',
                    mb: '30px',
                    fontWeight: 'bold',
                    color: '#1A2D5E',
                    fontSize: '22px',
                }}
            >
                Total: <span style={{ color: '#1976d2' }}>{total}</span> and counting...
            </Typography>
        </Box>
    );
};

export default PieChartComponent;
