export function RenderCanvas() {
    const arr = [0, 1, 2];
    const result = arr.map((value, index) => {
        return <canvas style={{
            position: 'absolute', left: '0', top: '0'
        }} id={'canvas' + index}></canvas>
    })
    return result;
}

export function ToggleCanvas(screenNum) {
    const canvas0 = document.getElementById("canvas0");
    const canvas1 = document.getElementById("canvas1");
    const canvas2 = document.getElementById("canvas2");
    switch (screenNum) {
        case 0:
            console.log("00");
            canvas0.style.display = 'block';
            canvas1.style.display = 'none';
            canvas2.style.display = 'none';
            break;
        case 1:
            console.log("11");
            canvas0.style.display = 'none';
            canvas1.style.display = 'block';
            canvas2.style.display = 'none';
            break;
        case 2:
            console.log("22");
            canvas0.style.display = 'none';
            canvas1.style.display = 'none';
            canvas2.style.display = 'block';
            break;
        default:
            break;
    }
}

export function SetCanvasSize() {
    const arr = ['canvas1', 'canvas0', 'canvas2'];
    const canvases = arr.forEach((value) => {
        const canvas = document.getElementById(value);
        const parent = canvas.parentElement;
        canvas.style.width = parent.offsetWidth;
        canvas.style.height = parent.offsetHeight;
        canvas.width = parent.offsetWidth;
        canvas.height = parent.offsetHeight;
    })
}
