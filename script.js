const lineColors = { //establishes colour of lines
    green: "#44bb66",
    red: "bb4466",
    blue: "4466bb"
}

const config = {
    displayModeBar: false, //disables user control
    responsive: true //allows scaling
}

const plot1Div = document.getElementById("vis1");
const plot2Div = document.getElementById("vis2");
const plot3Div = document.getElementById("vis3");

Plotly.d3.csv("", function(rows){
    
});