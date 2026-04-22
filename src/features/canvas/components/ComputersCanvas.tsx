import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '@shared/ui/Loader';

type ComputersProps = {
  isMobile: boolean;
  useLowPower: boolean;
};

const Computers = ({ isMobile, useLowPower }: ComputersProps) => {
  const computer = useGLTF(`${import.meta.env.BASE_URL}desktop_pc/scene.gltf`);

  return (
    <mesh>
      <hemisphereLight intensity={useLowPower ? 3.5 : 5.5} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={2}
        castShadow={!useLowPower}
        shadow-mapSize={useLowPower ? 512 : 1024}
      />
      <pointLight intensity={useLowPower ? 0.7 : 1} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.55 : 0.75}
        position={isMobile ? [0, -3.35, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isChromeMobile, setIsChromeMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia('(max-width: 500px)');

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener('change', handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);

  useEffect(() => {
    const userAgent = navigator.userAgent;
    const isChrome = /Chrome\//.test(userAgent) || /CriOS\//.test(userAgent);
    const isFirefox = /Firefox\//.test(userAgent) || /FxiOS\//.test(userAgent);
    const isAndroid = /Android/.test(userAgent);
    const isIOS = /iPhone|iPad|iPod/.test(userAgent);

    setIsChromeMobile(isChrome && !isFirefox && (isAndroid || isIOS));
  }, []);

  const useLowPower = isMobile && isChromeMobile;

  return (
    <div className={`w-full h-full ${isMobile ? 'pointer-events-none' : ''}`}>
      <Canvas
        frameloop="demand"
        shadows={!useLowPower}
        dpr={useLowPower ? [1, 1] : isMobile ? [1, 1.25] : [1, 2]}
        camera={{ position: [20, 3, 5], fov: 25 }}
        gl={{
          preserveDrawingBuffer: false,
          powerPreference: useLowPower ? 'low-power' : 'high-performance',
          antialias: !useLowPower,
          failIfMajorPerformanceCaveat: useLowPower,
          stencil: !useLowPower,
        }}
        style={{ touchAction: isMobile ? 'pan-y' : 'auto' }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            enableRotate={!isMobile}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Computers isMobile={isMobile} useLowPower={useLowPower} />
        </Suspense>

        {!useLowPower ? <Preload all /> : null}
      </Canvas>
    </div>
  );
};

useGLTF.preload(`${import.meta.env.BASE_URL}desktop_pc/scene.gltf`);

export default ComputersCanvas;
