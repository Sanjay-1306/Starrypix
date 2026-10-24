import { useEffect, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial } from '@react-three/drei'

function TiltRig({ children }) {
  const group = useRef(null)
  const target = useRef({ x: 0, y: 0 })

  useEffect(() => {
    function handleMove(e) {
      target.current.x = (e.clientX / window.innerWidth - 0.5) * 0.7
      target.current.y = (e.clientY / window.innerHeight - 0.5) * 0.5
    }
    window.addEventListener('pointermove', handleMove)
    return () => window.removeEventListener('pointermove', handleMove)
  }, [])

  useFrame((_, delta) => {
    if (!group.current) return
    const lerp = 1 - Math.pow(0.001, delta)
    group.current.rotation.y += (target.current.x - group.current.rotation.y) * lerp
    group.current.rotation.x += (-target.current.y - group.current.rotation.x) * lerp
  })

  return <group ref={group}>{children}</group>
}

function CoreBlob() {
  const mesh = useRef(null)
  useFrame((_, delta) => {
    if (mesh.current) mesh.current.rotation.z += delta * 0.08
  })
  return (
    <Float speed={1.6} rotationIntensity={0.7} floatIntensity={1.4}>
      <mesh ref={mesh}>
        <icosahedronGeometry args={[1.55, 16]} />
        <MeshDistortMaterial
          color="#8b5cf6"
          emissive="#4c1d95"
          emissiveIntensity={0.5}
          roughness={0.1}
          metalness={0.75}
          distort={0.4}
          speed={1.8}
        />
      </mesh>
    </Float>
  )
}

function WireShell() {
  const mesh = useRef(null)
  useFrame((_, delta) => {
    if (mesh.current) {
      mesh.current.rotation.y -= delta * 0.12
      mesh.current.rotation.x += delta * 0.05
    }
  })
  return (
    <mesh ref={mesh} scale={1.55}>
      <icosahedronGeometry args={[1.55, 1]} />
      <meshBasicMaterial color="#d8b4fe" wireframe transparent opacity={0.18} />
    </mesh>
  )
}

const SATELLITES = [
  { pos: [2.6, 1.1, -1], size: 0.16, color: '#d946ef' },
  { pos: [-2.4, -0.8, 0.5], size: 0.22, color: '#a78bfa' },
  { pos: [1.8, -1.6, -0.6], size: 0.13, color: '#6366f1' },
  { pos: [-2, 1.6, -0.8], size: 0.11, color: '#f0abfc' },
]

function Satellites() {
  return SATELLITES.map((s, i) => (
    <Float key={i} speed={1 + i * 0.3} floatIntensity={2.2} rotationIntensity={0.4}>
      <mesh position={s.pos}>
        <sphereGeometry args={[s.size, 24, 24]} />
        <meshStandardMaterial color={s.color} emissive={s.color} emissiveIntensity={0.9} roughness={0.3} />
      </mesh>
    </Float>
  ))
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[4, 4, 4]} intensity={90} color="#a78bfa" />
      <pointLight position={[-5, -3, -3]} intensity={60} color="#d946ef" />
      <pointLight position={[0, -2, 4]} intensity={30} color="#6366f1" />
      <TiltRig>
        <CoreBlob />
        <WireShell />
        <Satellites />
      </TiltRig>
    </>
  )
}

export default function HeroScene({ className = '' }) {
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const isSmall = window.matchMedia('(max-width: 640px)').matches
    setEnabled(!reduceMotion && !isSmall)
  }, [])

  if (!enabled) return null

  return (
    <div className={className}>
      <Canvas camera={{ position: [0, 0, 5.2], fov: 42 }} dpr={[1, 1.8]} gl={{ antialias: true, alpha: true }}>
        <Scene />
      </Canvas>
    </div>
  )
}
