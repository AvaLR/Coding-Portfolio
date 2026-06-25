let highestZ = 100;

function openWindow(id) {
    const win = document.getElementById(id);
    win.style.display = 'flex';
    highestZ++;
    win.style.zIndex = highestZ; 
    
    
    if (!win.dataset.dragInitialized) {
        makeDraggable(win);
        win.dataset.dragInitialized = "true";
    }
}

function closeWindow(id) {
    document.getElementById(id).style.display = 'none';
}

function makeDraggable(windowElement) {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    const header = windowElement.querySelector('.window-header');

    header.onmousedown = dragMouseDown;

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        
      
        highestZ++;
        windowElement.style.zIndex = highestZ;
        
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        
        
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        
       
        windowElement.style.top = (windowElement.offsetTop - pos2) + "px";
        windowElement.style.left = (windowElement.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}
