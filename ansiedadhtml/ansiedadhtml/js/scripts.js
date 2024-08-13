/*!
* Start Bootstrap - Grayscale v7.0.6 (https://startbootstrap.com/theme/grayscale)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

document.addEventListener("DOMContentLoaded", function() {
    const colors = ["#FF5733", "#33FF57", "#3357FF", "#F1C40F", "#9B59B6", "#E74C3C", "#1ABC9C"];
    let selectedColor = "#000000"; // Color por defecto

    const colorPalette = document.getElementById("colorPalette");
    colors.forEach(color => {
        const colorDiv = document.createElement("div");
        colorDiv.className = "colorOption";
        colorDiv.style.backgroundColor = color;
        colorDiv.addEventListener("click", () => {
            selectedColor = color;
        });
        colorPalette.appendChild(colorDiv);
    });

    const canvas = document.getElementById("mandalaCanvas");
    const ctx = canvas.getContext("2d");
    let currentMandala = 'mandala1'; // Forma por defecto
    let sections = []; // Para almacenar las secciones del mandala

    function drawMandala() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        sections = []; // Limpiar las secciones antes de dibujar

        switch (currentMandala) {
            case 'mandala1':
                drawMandala1(ctx);
                break;
            case 'mandala2':
                drawMandala2(ctx);
                break;
            case 'mandala3':
                drawMandala3(ctx);
                break;
            case 'mandala4':
                drawMandala4(ctx);
                break;
            default:
                drawMandala1(ctx); // Forma por defecto
                break;
        }
    }

    function drawMandala1(ctx) {
        const centerX = ctx.canvas.width / 2;
        const centerY = ctx.canvas.height / 2;
        const numSections = 12;
        const radius = 200;
        const angleIncrement = (2 * Math.PI) / numSections;

        for (let i = 0; i < numSections; i++) {
            const startAngle = i * angleIncrement;
            const endAngle = (i + 1) * angleIncrement;

            ctx.beginPath();
            ctx.moveTo(centerX, centerY);
            ctx.arc(centerX, centerY, radius, startAngle, endAngle);
            ctx.lineTo(centerX, centerY);
            ctx.closePath();

            sections.push({
                path: new Path2D(ctx),
                startAngle,
                endAngle,
                color: '#FFFFFF'
            });

            ctx.strokeStyle = '#000000';
            ctx.lineWidth = 2;
            ctx.stroke();
            ctx.fillStyle = '#FFFFFF';
            ctx.fill();
        }
    }

    function drawMandala2(ctx) {
        const centerX = ctx.canvas.width / 2;
        const centerY = ctx.canvas.height / 2;
        const numSections = 16;
        const radius = 200;
        const angleIncrement = (2 * Math.PI) / numSections;

        for (let i = 0; i < numSections; i++) {
            const startAngle = i * angleIncrement;
            const endAngle = (i + 1) * angleIncrement;

            ctx.beginPath();
            ctx.moveTo(centerX, centerY);
            ctx.arc(centerX, centerY, radius, startAngle, endAngle);
            ctx.lineTo(centerX, centerY);
            ctx.closePath();

            sections.push({
                path: new Path2D(ctx),
                startAngle,
                endAngle,
                color: '#FFFFFF'
            });

            ctx.strokeStyle = '#000000';
            ctx.lineWidth = 2;
            ctx.stroke();
            ctx.fillStyle = '#FFFFFF';
            ctx.fill();
        }
    }

    function drawMandala3(ctx) {
        const centerX = ctx.canvas.width / 2;
        const centerY = ctx.canvas.height / 2;
        const numSections = 24;
        const radius = 200;
        const angleIncrement = (2 * Math.PI) / numSections;

        for (let i = 0; i < numSections; i++) {
            const startAngle = i * angleIncrement;
            const endAngle = (i + 1) * angleIncrement;

            ctx.beginPath();
            ctx.moveTo(centerX, centerY);
            ctx.arc(centerX, centerY, radius, startAngle, endAngle);
            ctx.lineTo(centerX, centerY);
            ctx.closePath();

            sections.push({
                path: new Path2D(ctx),
                startAngle,
                endAngle,
                color: '#FFFFFF'
            });

            ctx.strokeStyle = '#000000';
            ctx.lineWidth = 2;
            ctx.stroke();
            ctx.fillStyle = '#FFFFFF';
            ctx.fill();
        }
    }

    function drawMandala4(ctx) {
        const centerX = ctx.canvas.width / 2;
        const centerY = ctx.canvas.height / 2;
        const numSections = 36;
        const radius = 200;
        const angleIncrement = (2 * Math.PI) / numSections;

        for (let i = 0; i < numSections; i++) {
            const startAngle = i * angleIncrement;
            const endAngle = (i + 1) * angleIncrement;

            ctx.beginPath();
            ctx.moveTo(centerX, centerY);
            ctx.arc(centerX, centerY, radius, startAngle, endAngle);
            ctx.lineTo(centerX, centerY);
            ctx.closePath();

            sections.push({
                path: new Path2D(ctx),
                startAngle,
                endAngle,
                color: '#FFFFFF'
            });

            ctx.strokeStyle = '#000000';
            ctx.lineWidth = 2;
            ctx.stroke();
            ctx.fillStyle = '#FFFFFF';
            ctx.fill();
        }
    }

    function changeMandala(shape) {
        currentMandala = shape;
        drawMandala();
    }

    function paintSection(x, y) {
        sections.forEach(section => {
            ctx.beginPath();
            ctx.moveTo(canvas.width / 2, canvas.height / 2);
            ctx.arc(canvas.width / 2, canvas.height / 2, 200, section.startAngle, section.endAngle);
            ctx.lineTo(canvas.width / 2, canvas.height / 2);
            ctx.closePath();

            if (ctx.isPointInPath(x, y)) {
                ctx.fillStyle = selectedColor;
                ctx.fill();
                section.color = selectedColor;
            }
        });
    }

    canvas.addEventListener('click', (event) => {
        const rect = canvas.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        paintSection(x, y);
    });

    document.getElementById('mandala1Button').addEventListener('click', () => changeMandala('mandala1'));
    document.getElementById('mandala2Button').addEventListener('click', () => changeMandala('mandala2'));
    document.getElementById('mandala3Button').addEventListener('click', () => changeMandala('mandala3'));
    document.getElementById('mandala4Button').addEventListener('click', () => changeMandala('mandala4'));

    drawMandala();
});

