import React, { useEffect, useRef } from 'react';

const DNAAnimation = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let startTime = Date.now();

        // Configuration matches Flutter implementation
        const duration = 10000; // 10 seconds
        const wavelength = 200.0;
        const amplitude = 60.0;

        // Seeded random nodes equivalent
        // Generate them once to keep them consistent
        const nodeCount = 20;
        const nodes = Array.from({ length: nodeCount }, () => ({
            xRatio: Math.random(), // Store as ratio of width
            yBase: Math.random() * 2000, // Large Y range for looping
            speed: 50 // Movement speed from Flutter: animation.value * 50
        }));

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', resize);
        resize(); // Initial size

        const render = () => {
            const now = Date.now();
            const elapsed = now - startTime;
            const progress = (elapsed % duration) / duration; // 0.0 to 1.0 loops

            const width = canvas.width;
            const height = canvas.height;

            ctx.clearRect(0, 0, width, height);

            // Colors
            const blueColor = 'rgba(14, 165, 233, 0.2)'; // #0ea5e9 (Sky Blue)
            const greenColor = 'rgba(100, 255, 218, 0.2)'; // #64ffda (Biolum Cyan) matches "AppColors.accentGreen" intent
            const lineColor = 'rgba(136, 146, 176, 0.1)'; // #8892b0 (Slate Grey)

            // Draw double helix
            const centerX = width * 0.8;
            const shift = progress * wavelength; // animation.value * wavelength

            // Loop y from -wavelength to height + wavelength to ensure no gaps
            for (let y = -wavelength; y < height + wavelength; y += 20) {
                const relativeY = y - shift;

                // Strand 1 (Sine)
                const x1 = centerX + amplitude * Math.sin((relativeY) * 2 * Math.PI / wavelength);
                // Strand 2 (Sine + PI aka 180 degrees)
                const x2 = centerX + amplitude * Math.sin((relativeY) * 2 * Math.PI / wavelength + Math.PI);

                // Draw connecting lines (base pairs) every 40 units
                // We iterate by 20, so check modulo on the original Y before shift? 
                // Flutter: if (y % 40 == 0). y is the loop variable.
                if (Math.abs(y % 40) < 0.1) {
                    ctx.beginPath();
                    ctx.moveTo(x1, relativeY);
                    ctx.lineTo(x2, relativeY);
                    ctx.strokeStyle = lineColor;
                    ctx.lineWidth = 1.0;
                    ctx.stroke();
                }

                // Draw nucleotides (circles)
                ctx.beginPath();
                ctx.arc(x1, relativeY, 4, 0, Math.PI * 2);
                ctx.fillStyle = blueColor;
                ctx.fill();

                ctx.beginPath();
                ctx.arc(x2, relativeY, 4, 0, Math.PI * 2);
                ctx.fillStyle = greenColor;
                ctx.fill();
            }

            // Draw floating nodes
            // Flutter: rY = (random + animation.value * 50) % size.height
            const moveY = progress * 50 * (duration / 1000); // Wait, Flutter: animation.value * 50. animation.value is 0..1? 
            // Flutter Logic: `_controller.repeat()` goes 0->1. So `animation.value` is 0..1.
            // So total movement over 10s is 50 pixels? That's very slow.
            // Let's re-read: `rY = (_random.nextDouble() * size.height + animation.value * 50) % size.height;`
            // Yes, it moves 50px then wraps? Or is `_random.nextDouble() * size.height` the large part?
            // Actually `animation.value * 50` is added to the base. 
            // Since it's modulo height, it will just shift slightly down/up.

            nodes.forEach(node => {
                const nodeX = node.xRatio * width;
                // Flutter: rY = (rY_base + anim * 50) % height
                // In Flutter code, `rY` was calculated fresh every frame with fresh randoms?
                // `final Random _random = Random(42);` is in the Painter.
                // `paint` is called every frame.
                // `Random(42)` resets the seed EVERY paint call? 
                // In Dart, `Random(42)` creates a new generator. 
                // If it's inside `paint`, it's recreated every frame.
                // So `_random.nextDouble()` sequence is IDENTICAL every frame.
                // So the dots are at the same "random" positions, just shifted by `animation.value * 50`.
                // Correct.

                // My node.yBase is `_random.nextDouble() * size.height` equivalent.
                // But height changes on resize. 
                // Let's us `yBase` as ratio too?
                // Flutter uses fixed seed, so positions depend on `size.height` at that moment.

                let nodeY = (node.yBase + progress * 50) % height;
                if (nodeY < 0) nodeY += height; // specific check not needed if yBase positive

                ctx.beginPath();
                ctx.arc(nodeX, nodeY, 2.0, 0, Math.PI * 2);
                ctx.fillStyle = 'rgba(100, 255, 218, 0.05)'; // accentBlue (cyan here) with 0.05 opacity
                ctx.fill();
            });

            animationFrameId = requestAnimationFrame(render);
        };

        render();

        return () => {
            window.removeEventListener('resize', resize);
            if (animationFrameId) cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />;
};

export default DNAAnimation;
