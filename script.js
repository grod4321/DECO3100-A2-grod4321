const lineColors = { //establishes colour of lines
    lightgreen: "#90ee90",
    green: "#44bb66",
    lightred: "#ffcccb",
    red: "bb4466",
    lightblue: "#add8e6"
}

const config = {
    displayModeBar: false, //disables user control
    responsive: true //allows scaling of window
}

const plot1Div = document.getElementById("vis1");
const plot2Div = document.getElementById("vis2");
const plot3Div = document.getElementById("vis3");


//LINE GRAPH
Plotly.d3.csv("predictions.csv", function(rows){ //returns each row of csv file
    //the different variables for each column of data
    var trace0 = {
        type: "scatter", //sets up scatter plot
        mode: "lines", //uses lines to connect the dots
        name: "Australia",
        x: unpack(rows, "Year"), //sets x-coordinate as year column
        y: unpack(rows, "Australia"), //sets y-coordinate as Australia column
        line: {
            color: lineColors.green,
            width: 5
        }
    }
    var trace1 = {
        type: "scatter",
        mode: "lines",
        name: "Future Australia",
        x: unpack(rows, "Year"),
        y: unpack(rows, "PredictionAustralia"),
        line: {
            color: lineColors.lightgreen,
            width: 5
        }
    }
    var trace2 = {
        type: "scatter",
        mode: "lines",
        name: "CRA",
        x: unpack(rows, "Year"),
        y: unpack(rows, "CRA"),
        line: {
            color: lineColors.red,
            width: 5
        }
    }
    var trace3 = {
        type: "scatter",
        mode: "lines",
        name: "Future CRA",
        x: unpack(rows, "Year"),
        y: unpack(rows, "PredictionCRA"),
        line: {
            color: lineColors.lightred,
            width: 5
        }
    }
    var trace4 = {
        type: "scatter",
        mode: "lines",
        name: "Future CRA w/o Avoidable",
        x: unpack(rows, "Year"),
        y: unpack(rows, "PredictionCRANB3"),
        line: {
            color: lineColors.lightblue,
            width: 5
        }
    }

    var data = [trace0, trace1, trace2, trace3, trace4]; //combines all data onto a single array

    var layout = { //customises layout of graph
        title: "CRA vs Australia Predicted Child Mortality",
        xaxis: { //creates spike lines
            showspikes: true,
            spikemode: "across",
            spikecolor: "black",
            spikethickness: 2
        },
        yaxis: {
            title: "Child Mortality (per 1000)"
        }
    }

    Plotly.newPlot(plot3Div, data, layout, config); //plots the graph using Plotly under the html element
});


//PICTOGRAM
Plotly.d3.csv("pictogram.csv", function(rows){
    var trace5 = {
        type: "scatter", //sets up scatter plot
        mode: "markers", //removes lines, keeps the markers only
        name: "CRA",
        x: unpack(rows, "X"),
        y: unpack(rows, "A"),
        marker: {
            color: lineColors.red,
            size: 15
        },
        hoverinfo: 'none' //removes hover interaction (not needed)
    }
    var trace6 = {
        type: "scatter",
        mode: "markers",
        x: unpack(rows, "X"),
        y: unpack(rows, "B"),
        marker: {
            color: lineColors.red,
            size: 15
        },
        hoverinfo: 'none',
        showlegend: false //removes legend as to keep only the 2 legends
    }
    var trace7 = {
        type: "scatter",
        mode: "markers",
        x: unpack(rows, "X"),
        y: unpack(rows, "C"),
        marker: {
            color: lineColors.red,
            size: 15
        },
        hoverinfo: 'none',
        showlegend: false
    }
    var trace8 = {
        type: "scatter",
        mode: "markers",
        x: unpack(rows, "X"),
        y: unpack(rows, "D"),
        marker: {
            color: lineColors.red,
            size: 15
        },
        hoverinfo: 'none',
        showlegend: false
    }
    var trace9 = {
        type: "scatter",
        mode: "markers",
        x: unpack(rows, "X"),
        y: unpack(rows, "E"),
        marker: {
            color: lineColors.red,
            size: 15
        },
        hoverinfo: 'none',
        showlegend: false
    }
    var trace10 = {
        type: "scatter",
        mode: "markers",
        x: unpack(rows, "X"),
        y: unpack(rows, "F"),
        marker: {
            color: lineColors.red,
            size: 15
        },
        hoverinfo: 'none',
        showlegend: false
    }
    var trace11 = {
        type: "scatter",
        mode: "markers",
        x: unpack(rows, "X"),
        y: unpack(rows, "G"),
        marker: {
            color: lineColors.red,
            size: 15
        },
        hoverinfo: 'none',
        showlegend: false
    }
    var trace12 = {
        type: "scatter",
        mode: "markers",
        x: unpack(rows, "X"),
        y: unpack(rows, "H"),
        marker: {
            color: lineColors.red,
            size: 15
        },
        hoverinfo: 'none',
        showlegend: false
    }
    var trace13 = {
        type: "scatter",
        mode: "markers",
        x: unpack(rows, "X"),
        y: unpack(rows, "I"),
        marker: {
            color: lineColors.red,
            size: 15
        },
        hoverinfo: 'none',
        showlegend: false
    }
    var trace14 = {
        type: "scatter",
        mode: "markers",
        x: unpack(rows, "X"),
        y: unpack(rows, "J"),
        marker: {
            color: lineColors.red,
            size: 15
        },
        hoverinfo: 'none',
        showlegend: false
    }
    var trace15 = {
        type: "scatter",
        mode: "markers",
        name: "Australia",
        x: unpack(rows, "X"),
        y: unpack(rows, "Different"),
        marker: {
            color: lineColors.green,
            size: 15
        },
        hoverinfo: 'none'
    }
    
    var data = [trace5, trace6, trace7, trace8, trace9, trace10, trace11, trace12, trace13, trace14, trace15];

    var layout = {
        title: "CRA vs Australian Child Mortalities",
        xaxis: {
            showgrid: false, //removes the gridlines
            visible: false //removes the grid numbers
        },
        yaxis: {
            showgrid: false,
            visible: false
        }
    }

    Plotly.newPlot(plot1Div, data, layout, config);
});


//PIE CHARTS
Plotly.d3.csv("pie.csv", function(rows){
    var trace16 = {
        type: "pie", //sets up pie chart
        values: unpack(rows, "Australia"),
        labels: unpack(rows, "Causes")
    }

    var data = [trace16];

    var layout = { //customises layout of graph
        title: "CRA vs Australia Causes of Child Mortality",
        height: 400,
        width: 500
    }

    Plotly.newPlot(plot2Div, data, layout, config);
});


function unpack(rows, key) {
    return rows.map(function(row) {return row[key];});
}

