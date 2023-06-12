function convert() {
    var inputValue = parseFloat(document.getElementById("input").value);
    var fromUnit = document.getElementById("unit").value;
    var toUnit = document.getElementById("targetUnit").value;

    var result;

    // Km to All

    if (fromUnit === "km" && toUnit === "km") {
        result = inputValue;
    }
    else if (fromUnit === "km" && toUnit === "meter") {
        result = inputValue * 1000;
    }
    else if (fromUnit === "km" && toUnit === "cm") {
        result = inputValue * 100000;
    }
    else if (fromUnit === "km" && toUnit === "mm") {
        result = inputValue * 1000000;
    }
    else if (fromUnit === "km" && toUnit === "mirm") {
        result = inputValue * 1e+9;
    }
    else if (fromUnit === "km" && toUnit === "nm") {
        result = inputValue * 1e+12;
    }
    else if (fromUnit === "km" && toUnit === "mile") {
        result = inputValue * 0.621371;
    }
    else if (fromUnit === "km" && toUnit === "yard") {
        result = inputValue * 1093.61;
    }
    else if (fromUnit === "km" && toUnit === "foot") {
        result = inputValue * 3280.84;
    }
    else if (fromUnit === "km" && toUnit === "inch") {
        result = inputValue * 39370.1;
    }

    ////// Meter To All

    else if (fromUnit === "meter" && toUnit === "km") {
        result = inputValue * 0.001;
    }
    else if (fromUnit === "meter" && toUnit === "meter") {
        result = inputValue;
    }
    else if (fromUnit === "meter" && toUnit === "cm") {
        result = inputValue * 100;
    }
    else if (fromUnit === "meter" && toUnit === "mm") {
        result = inputValue * 1000;
    }
    else if (fromUnit === "meter" && toUnit === "mirm") {
        result = inputValue * 1000000;
    }
    else if (fromUnit === "meter" && toUnit === "nm") {
        result = inputValue * 1e+9;
    }
    else if (fromUnit === "meter" && toUnit === "mile") {
        result = inputValue * 0.000621371;
    }
    else if (fromUnit === "meter" && toUnit === "nm") {
        result = inputValue * 1e+9;
    }
    else if (fromUnit === "meter" && toUnit === "yard") {
        result = inputValue * 1.09361;
    }
    else if (fromUnit === "meter" && toUnit === "foot") {
        result = inputValue * 3.28084;
    }
    else if (fromUnit === "meter" && toUnit === "inch") {
        result = inputValue * 39.3701;
    }

    // CentiMeter To All

    else if (fromUnit === "cm" && toUnit === "km") {
        result = inputValue * 1e-5;
    }
    else if (fromUnit === "cm" && toUnit === "meter") {
        result = inputValue * 0.01;
    }
    else if (fromUnit === "cm" && toUnit === "cm") {
        result = inputValue;
    }
    else if (fromUnit === "cm" && toUnit === "mm") {
        result = inputValue * 10;
    }
    else if (fromUnit === "cm" && toUnit === "mirm") {
        result = inputValue * 10000;
    }
    else if (fromUnit === "cm" && toUnit === "nm") {
        result = inputValue * 1e+7;
    }
    else if (fromUnit === "cm" && toUnit === "mile") {
        result = inputValue * 6.21371e-6;
    }
    else if (fromUnit === "cm" && toUnit === "yard") {
        result = inputValue * 0.0109361;
    }
    else if (fromUnit === "cm" && toUnit === "foot") {
        result = inputValue * 0.0328084;
    }
    else if (fromUnit === "cm" && toUnit === "inch") {
        result = inputValue * 0.393701;
    }

    // Milli-Meter To All

    else if (fromUnit === "mm" && toUnit === "km") {
        result = inputValue * 1e-6;
    }
    else if (fromUnit === "mm" && toUnit === "meter") {
        result = inputValue * 0.001;
    }
    else if (fromUnit === "mm" && toUnit === "cm") {
        result = inputValue * 0.1;
    }
    else if (fromUnit === "mm" && toUnit === "mm") {
        result = inputValue;
    }
    else if (fromUnit === "mm" && toUnit === "mirm") {
        result = inputValue * 1000;
    }
    else if (fromUnit === "mm" && toUnit === "nm") {
        result = inputValue * 1000000;
    }
    else if (fromUnit === "mm" && toUnit === "mile") {
        result = inputValue * 6.21371e-7;
    }
    else if (fromUnit === "mm" && toUnit === "yard") {
        result = inputValue * 0.0109361;
    }
    else if (fromUnit === "mm" && toUnit === "foot") {
        result = inputValue * 0.00328084;
    }
    else if (fromUnit === "mm" && toUnit === "inch") {
        result = inputValue * 0.0393701;
    }

    // Micro-Meter To All

    else if (fromUnit === "mirm" && toUnit === "km") {
        result = inputValue * 1e-9;
    }
    else if (fromUnit === "mirm" && toUnit === "meter") {
        result = inputValue * 1e-6;
    }
    else if (fromUnit === "mirm" && toUnit === "cm") {
        result = inputValue * 1e-4;
    }
    else if (fromUnit === "mirm" && toUnit === "mm") {
        result = inputValue * 0.001;
    }
    else if (fromUnit === "mirm" && toUnit === "mirm") {
        result = inputValue;
    }
    else if (fromUnit === "mirm" && toUnit === "nm") {
        result = inputValue * 1000;
    }
    else if (fromUnit === "mirm" && toUnit === "mile") {
        result = inputValue * 6.21371e-10;
    }
    else if (fromUnit === "mirm" && toUnit === "yard") {
        result = inputValue * 1.09361e-6;
    }
    else if (fromUnit === "mirm" && toUnit === "foot") {
        result = inputValue * 3.28084e-6;
    }
    else if (fromUnit === "mirm" && toUnit === "inch") {
        result = inputValue * 3.93701e-5;
    }

    // Nano-Meter To All

    else if (fromUnit === "nm" && toUnit === "km") {
        result = inputValue * 1e-12;
    }
    else if (fromUnit === "nm" && toUnit === "meter") {
        result = inputValue * 1e-9;
    }
    else if (fromUnit === "nm" && toUnit === "cm") {
        result = inputValue * 1e-7;
    }
    else if (fromUnit === "nm" && toUnit === "mm") {
        result = inputValue * 1e-6;
    }
    else if (fromUnit === "nm" && toUnit === "mirm") {
        result = inputValue * 0.001;
    }
    else if (fromUnit === "nm" && toUnit === "nm") {
        result = inputValue;
    }
    else if (fromUnit === "nm" && toUnit === "mile") {
        result = inputValue * 6.21371e-13;
    }
    else if (fromUnit === "nm" && toUnit === "yard") {
        result = inputValue * 1.09361e-9;
    }
    else if (fromUnit === "nm" && toUnit === "foot") {
        result = inputValue * 3.28084e-9;
    }
    else if (fromUnit === "nm" && toUnit === "inch") {
        result = inputValue * 3.93701e-8;
    }

    // Mile To All

    else if (fromUnit === "mile" && toUnit === "km") {
        result = inputValue * 1.60934;
    }
    else if (fromUnit === "mile" && toUnit === "meter") {
        result = inputValue * 1609.34;
    }
    else if (fromUnit === "mile" && toUnit === "cm") {
        result = inputValue * 160934;
    }
    else if (fromUnit === "mile" && toUnit === "mm") {
        result = inputValue * 1.609e+6;
    }
    else if (fromUnit === "mile" && toUnit === "mirm") {
        result = inputValue * 1.609e+9;
    }
    else if (fromUnit === "mile" && toUnit === "nm") {
        result = inputValue * 1.609e+12;
    }
    else if (fromUnit === "mile" && toUnit === "mile") {
        result = inputValue;
    }
    else if (fromUnit === "mile" && toUnit === "yard") {
        result = inputValue * 1760;
    }
    else if (fromUnit === "mile" && toUnit === "foot") {
        result = inputValue * 5280;
    }
    else if (fromUnit === "mile" && toUnit === "inch") {
        result = inputValue * 63360;
    }

    // Yard To All

    else if (fromUnit === "yard" && toUnit === "km") {
        result = inputValue * 0.0009144;
    }
    else if (fromUnit === "yard" && toUnit === "meter") {
        result = inputValue * 0.9144;
    }
    else if (fromUnit === "yard" && toUnit === "cm") {
        result = inputValue * 91.44;
    }
    else if (fromUnit === "yard" && toUnit === "mm") {
        result = inputValue * 914.4;
    }
    else if (fromUnit === "yard" && toUnit === "mirm") {
        result = inputValue * 914400;
    }
    else if (fromUnit === "yard" && toUnit === "nm") {
        result = inputValue * 9.144e+8;
    }
    else if (fromUnit === "yard" && toUnit === "mile") {
        result = inputValue * 0.000568182;
    }
    else if (fromUnit === "yard" && toUnit === "yard") {
        result = inputValue;
    }
    else if (fromUnit === "yard" && toUnit === "foot") {
        result = inputValue * 3;
    }
    else if (fromUnit === "yard" && toUnit === "inch") {
        result = inputValue * 36;
    }

    // Foot To All

    else if (fromUnit === "foot" && toUnit === "km") {
        result = inputValue * 0.0003048;
    }
    else if (fromUnit === "foot" && toUnit === "meter") {
        result = inputValue * 0.3048;
    }
    else if (fromUnit === "foot" && toUnit === "cm") {
        result = inputValue * 30.48;
    }
    else if (fromUnit === "foot" && toUnit === "mm") {
        result = inputValue * 304.8;
    }
    else if (fromUnit === "foot" && toUnit === "mirm") {
        result = inputValue * 304800;
    }
    else if (fromUnit === "foot" && toUnit === "nm") {
        result = inputValue * 3.048e+8;
    }
    else if (fromUnit === "foot" && toUnit === "mile") {
        result = inputValue * 0.000189394;
    }
    else if (fromUnit === "foot" && toUnit === "yard") {
        result = inputValue * 0.333333;
    }
    else if (fromUnit === "foot" && toUnit === "foot") {
        result = inputValue;
    }
    else if (fromUnit === "foot" && toUnit === "inch") {
        result = inputValue * 12;
    }

    // Inch To All

    else if (fromUnit === "inch" && toUnit === "km") {
        result = inputValue * 2.54e-5;
    }
    else if (fromUnit === "inch" && toUnit === "meter") {
        result = inputValue * 0.0254;
    }
    else if (fromUnit === "inch" && toUnit === "cm") {
        result = inputValue * 2.54;
    }
    else if (fromUnit === "inch" && toUnit === "mm") {
        result = inputValue * 25.4;
    }
    else if (fromUnit === "inch" && toUnit === "mirm") {
        result = inputValue * 25400;
    }
    else if (fromUnit === "inch" && toUnit === "nm") {
        result = inputValue * 2.54e+7;
    }
    else if (fromUnit === "inch" && toUnit === "mile") {
        result = inputValue * 1.57828e-5;
    }
    else if (fromUnit === "inch" && toUnit === "yard") {
        result = inputValue * 0.0277778;
    }
    else if (fromUnit === "inch" && toUnit === "foot") {
        result = inputValue * 0.0833333;
    }
    else if (fromUnit === "inch" && toUnit === "inch") {
        result = inputValue;
    }
    else {
        result = "Invalid conversion";
    }

    document.getElementById("output").value = result.toFixed(13);
}




// Adjust footer position on window resize

// window.addEventListener('resize', function () {
//     var footer = document.querySelector('.footer');
//     var bodyHeight = document.body.offsetHeight;
//     var windowHeight = window.innerHeight;

//     if (bodyHeight < windowHeight) {
//         footer.style.position = 'fixed';
//     } else {
//         footer.style.position = 'static';
//     }
// });