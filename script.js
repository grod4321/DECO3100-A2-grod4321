const lineColors = { //establishes colours of lines
    lightgreen: "#90ee90",
    green: "#44bb66",
    lightred: "#ffcccb",
    red: "bb4466",
    lightblue: "#add8e6"
}

const config = {
    displayModeBar: false, //disables too much user control
    responsive: true //allows scaling to window size
}

const plot1Div = document.getElementById("vis1"); //connects to html grid areas
const plot2Div = document.getElementById("vis2");
const plot3Div = document.getElementById("vis3");


//LINE GRAPH
Plotly.d3.csv("predictions.csv", function(rows){ //returns each row of csv file
    //the different variables for each column of data
    var trace0 = {
        type: "scatter", //sets up scatter plot
        mode: "lines", //uses lines to connect the dots
        name: "Australia",
        x: unpack(rows, "Year"), //sets x-coordinate as year column from the csv
        y: unpack(rows, "Australia"), //sets y-coordinate as Australia column from the csv
        line: { //manipulates color and width of the line
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
        xaxis: { //creates and manipulates a spike line
            showspikes: true,
            spikemode: "across",
            spikecolor: "black",
            spikethickness: 2
        },
        yaxis: {
            title: "Child Mortality (per 1000)" //places a name on the y-axis
        },
        legend: {
            "orientation": "h" //makes the legend horizontal as opposed to vertical
        },
        height: 500 //charts don't work with the grid unless a height is specifically allocated for them
    }

    Plotly.newPlot(plot3Div, data, layout, config); //plots the graph using Plotly inside the html element
});


//PICTOGRAM
Plotly.d3.csv("pictogram.csv", function(rows){
    var trace5 = { //trace numbering continued from previous chart, even though uneccessary, as to avoid confusion
        type: "scatter", //sets up scatter plot
        mode: "markers", //removes lines, keeps the markers only
        name: "CRA",
        x: unpack(rows, "X"),
        y: unpack(rows, "A"),
        marker: {
            color: lineColors.red,
            size: 15 //makes the markers quite large
        },
        hoverinfo: 'none' //removes hover interaction (not needed for this chart)
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
        showlegend: false //legend removed for all subsequent CRA columns as to keep only the 2 items on the legend
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
            color: lineColors.lightgreen, //color different to rest to differentiate that it is Australia
            size: 15
        },
        hoverinfo: 'none'
    }
    
    //even though trace numbering continued, data and layout numbering has not to simplify and show that they have the same function
    var data = [trace5, trace6, trace7, trace8, trace9, trace10, trace11, trace12, trace13, trace14, trace15]; 

    var layout = {
        title: "Child Deaths: CRA vs Australia (per 1000)",
        xaxis: {
            showgrid: false, //removes the gridlines
            visible: false //removes the grid numbers
        },
        yaxis: {
            showgrid: false,
            visible: false
        },
        legend: {
            "orientation": "h"
        },
        height: 500
    }

    Plotly.newPlot(plot1Div, data, layout, config);
});


//PIE CHARTS
Plotly.d3.csv("pie.csv", function(rows){
    var trace16 = {
        type: "pie", //sets up pie chart
        values: rows.map(row => parseFloat(row.CRA)), //converts cells to decimal float as they have % symbols in them
        labels: unpack(rows, "Causes"),
        name: "CRA",
        marker: {
            colors: unpack(rows, "Colors") //uses the colours on the csv file to set the colours for the different pie chart items
        },
        domain: { //sets the chart up on a domain as to be able to be placed in a grid-like structure, similar to grid in css, allowing the pie charts to be placed next to each other
            row: 0, //had to add row in as it didnt work without it
            column: 0 //places the pie chart on the first column of the only row
        },
        hoverinfo: "label+percent", //only shows the label and percent when hovering over, as the data is the same as the percent
        textinfo: 'none' //removes text from the pie charts, only text is legend and when hovered
    }
    var trace17 = {
        type: "pie", //sets up pie chart
        values: rows.map(row => parseFloat(row.Australia)),
        labels: unpack(rows, "Causes"),
        name: "Australia",
        marker: {
            colors: unpack(rows, "Colors")
        },
        domain: {
            row: 0,
            column: 1
        },
        hoverinfo: "label+percent",
        textinfo: 'none'
    }

    var data = [trace16, trace17];

    var layout = {
        title: "CRA vs Australian Avoidable Causes of Child Mortality",
        grid: {rows: 1, columns: 2},
        legend: {
            y: 0.5 //aligns the legend with the center of the pie chart
        },
        height: 500
    }

    Plotly.newPlot(plot2Div, data, layout, config);
});


function unpack(rows, key) { //unpacks csv data and provide each value of the rows
    return rows.map(function(row) {return row[key];}); //remaps a value from one array to the other, returning the individual value for each row
}