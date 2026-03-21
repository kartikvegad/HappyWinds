import React, { useEffect, useRef } from 'react';

const InteractiveParticles = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        let animationFrameId;

        let particles = [];
        const spacing = 25;
        const mouse = { x: -1000, y: -1000, radius: 250 };

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initParticles();
        };

        const initParticles = () => {
            particles = [];
            const cols = Math.ceil(canvas.width / spacing) + 1;
            const rows = Math.ceil(canvas.height / spacing) + 1;

            for (let i = 0; i < cols; i++) {
                for (let j = 0; j < rows; j++) {
                    particles.push({
                        x: i * spacing,
                        y: j * spacing,
                        originalX: i * spacing,
                        originalY: j * spacing,
                        angle: Math.PI / 4,
                        size: 8 + Math.random() * 4,
                        width: 1,
                        opacity: 0.03,
                        phase: Math.random() * Math.PI * 2
                    });
                }
            }
        };

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            const time = Date.now() * 0.001;

            // Get theme color (black in light, white in dark)
            const style = getComputedStyle(document.documentElement);
            const rawColor = style.getPropertyValue('--color-text-primary').trim();

            // We need to convert hex/rgb to just the components to apply our own alpha
            // But since it's basically black or white, we can be more direct if we want.
            // However, grabbing it from CSS is more robust if the user changes themes later.

            particles.forEach(p => {
                const dx = mouse.x - p.x;
                const dy = mouse.y - p.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                let targetAngle = Math.PI / 4 + Math.sin(time + p.phase) * 0.1;
                let targetX = p.originalX;
                let targetY = p.originalY;
                let targetOpacity = 0.03; // Very subtle base opacity
                let targetWidth = 1;

                if (distance < mouse.radius) {
                    const force = (mouse.radius - distance) / mouse.radius;

                    targetAngle = Math.atan2(dy, dx) + Math.PI / 2;
                    targetX -= (dx / distance) * force * 30;
                    targetY -= (dy / distance) * force * 30;

                    targetOpacity = 0.03 + force * 0.25; // Lower peak opacity for readability
                    targetWidth = 1 + force * 1;
                }

                p.x += (targetX - p.x) * 0.1;
                p.y += (targetY - p.y) * 0.1;
                p.angle += (targetAngle - p.angle) * 0.1;
                p.opacity += (targetOpacity - p.opacity) * 0.1;
                p.width += (targetWidth - p.width) * 0.1;

                ctx.save();
                ctx.translate(p.x, p.y);
                ctx.rotate(p.angle);

                // Use the theme color with our calculated opacity
                ctx.globalAlpha = p.opacity;
                ctx.fillStyle = rawColor;

                const hf = p.size / 2;
                const hw = p.width / 2;

                ctx.beginPath();
                ctx.arc(0, hf - hw, hw, 0, Math.PI);
                ctx.arc(0, -hf + hw, hw, Math.PI, 0);
                ctx.fill();

                ctx.restore();
            });

            animationFrameId = requestAnimationFrame(draw);
        };

        const handleMouseMove = (e) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        };

        const handleMouseLeave = () => {
            mouse.x = -1000;
            mouse.y = -1000;
        };

        window.addEventListener('resize', resize);
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseleave', handleMouseLeave);

        resize();
        draw();

        return () => {
            window.removeEventListener('resize', resize);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseleave', handleMouseLeave);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: -1,
                pointerEvents: 'none',
                background: 'transparent'
            }}
        />
    );
};

export default InteractiveParticles;
