
    function calculations() {
        with (document.calculate) {
            numberOne = firstNumber.value; <!-- variable numberOne is passed the value of firstNumber   -->
            firstN = parseFloat(numberOne);<!-- variable firstN converted to a float from numberOne  -->
            numberTwo = secondNumber.value;<!-- variable numberTwo is passed the value of secondNumber   -->
            secondN = parseFloat(numberTwo);<!-- variable secondN converted to a float from numberTwo  -->
            <!-- Selection of the arithmetic operation via the index  -->
            if (radio1[0].checked) result = firstN + secondN;
            if (radio1[1].checked) result = firstN - secondN;
            if (radio1[2].checked) result = firstN * secondN;
            if (radio1[3].checked) result = firstN / secondN;
            resultOfCalculation.value = result;
        }
    }

