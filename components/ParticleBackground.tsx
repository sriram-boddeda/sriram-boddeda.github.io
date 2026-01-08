import { useCallback, useEffect, useState } from "react";
import Particles from "react-tsparticles";
import type { Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";

const ParticleBackground = () => {
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const update = () => setReduceMotion(mediaQuery.matches);
    update();

    if (typeof mediaQuery.addEventListener === "function") {
      mediaQuery.addEventListener("change", update);
      return () => mediaQuery.removeEventListener("change", update);
    }

    // Safari fallback
    mediaQuery.addListener(update);
    return () => mediaQuery.removeListener(update);
  }, []);

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  if (reduceMotion) return null;

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      aria-hidden
      options={{
        fullScreen: {
          enable: true,
          zIndex: 1,
        },
        fpsLimit: 60,
        particles: {
          number: {
            value: 30,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          color: {
            value: ["#2ecc71", "#3498db"],
          },
          shape: {
            type: "circle",
          },
          opacity: {
            value: 0.5,
            random: true,
            animation: {
              enable: true,
              speed: 1,
              minimumValue: 0.1,
              sync: false,
            },
          },
          size: {
            value: 3,
            random: true,
            animation: {
              enable: true,
              speed: 2,
              minimumValue: 0.5,
              sync: false,
            },
          },
          links: {
            enable: true,
            distance: 100,
            color: "#2ecc71",
            opacity: 0.4,
            width: 1,
          },
          move: {
            enable: true,
            speed: 1,
            direction: "none",
            random: true,
            straight: false,
            outModes: {
              default: "bounce",
            },
            attract: {
              enable: false,
            },
          },
        },
        interactivity: {
          detect_on: "window",
          events: {
            onHover: {
              enable: true,
              mode: "connect",
            },
            onClick: {
              enable: true,
              mode: "push",
            },
            resize: true,
          },
          modes: {
            connect: {
              distance: 100,
              links: {
                opacity: 0.5,
              },
            },
            push: {
              quantity: 4,
            },
          },
        },
        background: {
          color: "transparent",
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticleBackground;
