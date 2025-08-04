function wallpaper() {
    const colors = ["red", "yellow", "green", "black", "white", "gray"," aqua", "fuchsia", "lime", "maroon", "navy", "olive"," teal", "silver"];
    const randomIndex = Math.floor(Math.random() * colors.length);
    const selectedColor = colors[randomIndex];

    document.body.style.backgroundColor = selectedColor;
    document.getElementById('colorName').textContent = "Current Color: " + selectedColor;

    const btn = document.getElementById('colorBtn');
    const heading = document.getElementById('colorName');

    // Make text visible on light/dark backgrounds
    const darkBackgrounds = ["black", "red", "green", "blue","maroon", "navy",];
    if (darkBackgrounds.includes(selectedColor)) {
        btn.style.color = "white";
        btn.style.borderColor = "white";
        heading.style.color = "white";
    } else {
        btn.style.color = "black";
        btn.style.borderColor = "black";
        heading.style.color = "black";
    }
}
