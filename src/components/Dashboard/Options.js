const basicOption = {
    options: {
        chart: {
            height: 400,
            type: "area",
            toolbar: {
                show: false,
            },
        },
        colors: ["#F5693D", "#9B88FA"],
        dataLabels: {
            enabled: false,
        },
        stroke: {
            width: 6,
            curve: "smooth",
        },
        legend: {
            show: false,
        },
        grid: {
            borderColor: "#EBEBEB",
            strokeDashArray: 6,
        },
        markers: {
            strokeWidth: 6,
            hover: {
                size: 15,
            },
        },
        yaxis: {
            labels: {
                offsetX: -12,
                style: {
                    colors: "#787878",
                    fontSize: "13px",
                    fontFamily: "Poppins",
                    fontWeight: 400,
                },
            },
        },
        xaxis: {
            categories: [
                "Week 1",
                "Week 2",
                "Week 3",
                "Week 4",
                "Week 5",
                "Week 6",
                "Week 7",
            ],
            labels: {
                style: {
                    colors: "#787878",
                    fontSize: "13px",
                    fontFamily: "Poppins",
                    fontWeight: 400,
                },
            },
        },
        fill: {
            type: "solid",
            opacity: 0.1,
        },
        tooltip: {
            x: {
                format: "dd/MM/yy HH:mm",
            },
        },
    },
};

export default basicOption;