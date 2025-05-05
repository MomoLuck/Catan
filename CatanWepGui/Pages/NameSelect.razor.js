window.getElementClass = (element) => {
    return element.className;
};

const colorInput = document.getElementById('colorInput');
const selectedColorDiv = document.getElementById('selectedColor');

colorInput.addEventListener('input', function() {
    const selectedColor = colorInput.value;
    selectedColorDiv.style.backgroundColor = selectedColor; // Hintergrund ändern
    selectedColorDiv.textContent = `Ausgewählte Farbe: ${selectedColor}`; // Text ändern
});