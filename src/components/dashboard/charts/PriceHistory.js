import { useState } from "react";
import Chart from 'react-apexcharts';
import ScrollAnimation from "react-animate-on-scroll";

const PriceHistory = (props) => {
    const { title, icon } = props;

    const [chartData] = useState({
        series: [{
            name: 'Bitcoin',
            data: [31, 40, 28, 51, 42, 109, 100, 79, 99, 68]
        }, {
            name: 'ETH',
            data: [11, 32, 45, 32, 34, 52, 41, 76, 62, 88]
        }],
        options: {
            colors: ["#0d6efd", "#0db7f0"],
            chart: {
                zoom: {
                    autoScaleYaxis: true
                },
                toolbar: {
                    show: false
                }
            },
            dataLabels: {
                enabled: false
            },
            legend: {
                show: true,
                position: 'top',
                fontSize: '14px',
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 500,
                labels: {
                    colors: ["#8480ae"],
                },
            },
            stroke: {
                curve: 'smooth'
            },
            xaxis: {
                type: 'datetime',
                categories: ["2022-09-19T00:00:00.000Z", "2022-09-19T01:00:00.000Z", "2022-09-19T02:00:00.000Z", "2022-09-19T03:00:00.000Z", "2022-09-19T04:00:00.000Z", "2022-09-19T05:00:00.000Z", "2022-09-19T06:00:00.000Z", "2022-09-19T07:00:00.000Z", "2022-09-19T08:00:00.000Z", "2022-09-19T09:00:00.000Z"],
                labels: {
                    style: {
                        colors: ["#8480ae"],
                        fontFamily: 'DM Sans, sans-serif',
                    },
                },
                tooltip: {
                    enabled: false,
                },
            },
            yaxis: {
                labels: {
                    style: {
                        colors: ["#8480ae"],
                        fontFamily: 'DM Sans, sans-serif',
                    },
                },
                title: {
                    style: {
                        fontSize: '12px',
                        fontFamily: 'DM Sans, sans-serif',
                    },
                },
                crosshairs: {
                    stroke: {
                        color: '#8480ae',
                    },
                },
            },
            tooltip: {
                theme: 'dark',
                x: {
                    format: 'dd/MM/yy HH:mm'
                },
                style: {
                    fontSize: '12px',
                    fontFamily: 'DM Sans, sans-serif',
                },
            },
            grid: {
                show: true,
                borderColor: '#8480ae',
                position: 'back',
            }
        }
    });

    return(
        <div className="col-12 col-xl-8">
            <ScrollAnimation animateIn="fadeInUp" delay={500} animateOnce={true} >
                <div className="card border-0 shadow-sm">
                    <div className="card-body p-4 pb-3">
                        <div className="d-flex align-items-center">
                            <img className="me-1" src={`${process.env.PUBLIC_URL}/${icon}`} alt="" />
                            <h5 className="mb-0">
                                {title}
                            </h5>
                        </div>

                        <Chart 
                            options={chartData.options} 
                            series={chartData.series} 
                            type="area" 
                            width="100%" 
                            height={300}
                        />
                    </div>
                </div>
            </ScrollAnimation>
        </div>
    )
}

export default PriceHistory;