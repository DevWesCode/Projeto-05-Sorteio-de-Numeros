document.getElementById("sortear").addEventListener("click", () => {
    const min = parseInt(document.getElementById("minimo").value);
    const max = parseInt(document.getElementById("maximo").value);
    const resultadoDiv = document.getElementById("resultado");
  
    if (isNaN(min) || isNaN(max)) {
      resultadoDiv.innerText = "⚠️ Insira números válidos nos dois campos.";
      resultadoDiv.style.color = "#ff4d4d";
      return;
    }
  
    if (min > max) {
      resultadoDiv.innerText = "⚠️ O número mínimo deve ser menor que o máximo.";
      resultadoDiv.style.color = "#ff4d4d";
      return;
    }
  
    resultadoDiv.innerText = "🎲 Sorteando...";
    resultadoDiv.style.color = "aquamarine";
  
    setTimeout(() => {
      const numeroSorteado = Math.floor(Math.random() * (max - min + 1)) + min;
      resultadoDiv.innerText = `🎉 Número sorteado: ${numeroSorteado} 🎉`;
    }, 1500);
  });
  