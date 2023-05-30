import { useState } from 'react';
import Chart from 'react-apexcharts';
import ScrollAnimation from 'react-animate-on-scroll';

const StatisticsChartTwo = (props) => {
    const {title, subTitle} = props;

    const [chartData] = useState({
        series: [{
            data: [25, 82, 41, 29, 63, 78, 63, 28, 48, 91]
        }],
        options: {
            chart: {
                sparkline: {
                    enabled: true
                }
            },
            colors: ['#198766'],
            stroke: {
                show: true,
                curve: 'smooth',
                width: 3
            },
            tooltip: {
                fixed: {
                    enabled: false
                },
                x: {
                    show: false
                },
                y: {
                    title: {
                        formatter: function (seriesName) {
                            return ''
                        }
                    }
                },
                marker: {
                    show: false
                }
            }
        }
    });

    return(
        <>
            <div className="col-12 col-sm-6">
                <ScrollAnimation animateIn="fadeInUp" delay={500} animateOnce={true} >
                    <div className="card border-0 shadow-sm">
                        <div className="card-body p-4">
                            <div className="d-flex align-items-center justify-content-between">
                                <div>
                                    <h5 className="mb-2">
                                        {title}
                                    </h5>
                                    <span>
                                        {subTitle}
                                    </span>
                                </div>

                                <Chart 
                                    className="ms-auto" 
                                    options={chartData.options} 
                                    series={chartData.series} 
                                    type="line" 
                                    width={100} 
                                    height={42}
                                />
                            </div>
                        </div>
                    </div>
                </ScrollAnimation>
            </div>
        </>
    )
}

export default StatisticsChartTwo;