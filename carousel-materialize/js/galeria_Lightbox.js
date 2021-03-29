document.addEventListener('DOMContentLoaded', () => {
    const imgLighBox = document.querySelectorAll('.materialboxed');
    M.Materialbox.init(imgLighBox, {
        inDuration: 500,
        outDuration: 500,
        
    });
});