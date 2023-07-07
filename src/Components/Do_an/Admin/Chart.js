import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js';

const UserDurationChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    // Mô phỏng dữ liệu lưu trú của người dùng (số phút)
    const userDurationData = [30, 45, 60, 25, 40, 55, 70];

    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Ngày 1', 'Ngày 2', 'Ngày 3', 'Ngày 4', 'Ngày 5', 'Ngày 6', 'Ngày 7'],
        datasets: [
          {
            label: 'Thời gian lưu trú (phút)',
            data: userDurationData,
            backgroundColor: 'rgba(75, 192, 192, 0.6)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'Thời gian lưu trú (phút)',
              font: {
                size: 14,
              },
            },
          },
          x: {
            title: {
              display: true,
              text: 'Ngày',
              font: {
                size: 14,
              },
            },
          },
        },
      },
    });
  }, []);

  return <canvas ref={chartRef}></canvas>;
};

export default UserDurationChart;
