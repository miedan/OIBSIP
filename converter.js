function temperatureconverter() {

    
    
    const input_temperature = parseFloat(document.getElementById("input-temperature").value);

    const from_temperature_unit = document.getElementById("from-unit-selector").value;
    const to_temperature_unit = document.getElementById("to-unit-selector").value;

    const errorMessageElement = document.getElementById("errorMessage");
    
    errorMessageElement.textContent = "";

    if (isNaN(input_temperature)) {
        errorMessageElement.textContent = "Please enter a valid number for the temperature.";
        return; 
    }

    let temperature_in_kelvin;
    let temperature_in_farhenit;
    let temperature_in_celcius;
    
  

    if (from_temperature_unit === "Kelvin") {
        temperature_in_celcius = input_temperature - 273.15;
        // console.log("hwllo", temperature_in_celcius)
        
        temperature_in_farhenit = temperature_in_celcius * 9/5 + 32;
        
            if (to_temperature_unit === "celcius") {
               
                document.getElementById("result").textContent = ` The Temperature is: ${temperature_in_celcius.toFixed(1)} °F`;
               
            } else if (to_temperature_unit === "farhenit") {
                // console.log("hey")
                document.getElementById("result").textContent = ` The Temperature is: ${temperature_in_farhenit.toFixed(1)} °F`;
            }
        
        
    }

    else if (from_temperature_unit === "celcius") {
        temperature_in_kelvin = input_temperature + 273.15;
        temperature_in_farhenit = input_temperature * 9/5 + 32;

        if (to_temperature_unit === "Kelvin") {
            document.getElementById("result").textContent = ` The Temperature is: ${temperature_in_kelvin.toFixed(1)} K`;
        } else if (to_temperature_unit === "farhenit") {
            document.getElementById("result").textContent = ` The Temperature is: ${temperature_in_farhenit.toFixed(1)} °F`;
        }
    }

    else if (from_temperature_unit === "farhenit") {
        temperature_in_celcius = (input_temperature - 32) * 5/9;
        temperature_in_kelvin = temperature_in_celcius + 273.15;

        if (to_temperature_unit === "celcius") {
            document.getElementById("result").textContent = ` The Temperature is: ${temperature_in_celcius.toFixed(1)} °C`;
        } else if (to_temperature_unit === "Kelvin") {
            document.getElementById("result").textContent = ` The Temperature is: ${temperature_in_kelvin.toFixed(1)} K`;
        }
    }
}
