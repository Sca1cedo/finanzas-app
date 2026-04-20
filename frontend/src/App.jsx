import { useState } from "react";
//import { motion } from "framer-motion";

export default function App() {
  const [page, setPage] = useState("home");

  const NavButton = ({ label, target }) => (
    <button
      onClick={() => setPage(target)}
      className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 transition backdrop-blur"
    >
      {label}
    </button>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white font-sans">
      {/* NAVBAR */}
      <div className="flex justify-between items-center p-6 border-b border-white/10 sticky top-0 backdrop-blur-xl">
        <h1 className="text-2xl font-bold tracking-wide">Finanzas Pro</h1>
        <div className="flex gap-3 flex-wrap">
          <NavButton label="Inicio" target="home" />
          <NavButton label="Presupuesto" target="budget" />
          <NavButton label="Gastos" target="expenses" />
          <NavButton label="Deudas" target="debts" />
          <NavButton label="Ahorro" target="savings" />
          <NavButton label="Inversiones" target="investments" />
          <NavButton label="Login" target="login" />
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-10 max-w-6xl mx-auto">
        {page === "home" && <Home />}
        {page === "budget" && <Budget />}
        {page === "expenses" && <Expenses />}
        {page === "debts" && <Debts />}
        {page === "savings" && <Savings />}
        {page === "investments" && <Investments />}
        {page === "login" && <Login />}
      </div>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="mb-16"
    >
      <h2 className="text-4xl font-semibold mb-6 tracking-wide">{title}</h2>
      <div className="text-gray-300 leading-relaxed space-y-4 text-lg">
        {children}
      </div>
    </div>
  );
}

function Home() {
  return (
    <Section title="Domina tu Sistema Financiero">
      <p>
        La gestión financiera moderna no se basa únicamente en registrar ingresos y gastos. Se trata de diseñar un sistema inteligente donde cada flujo de dinero tenga un propósito estratégico. Una persona financieramente organizada no improvisa: planifica, mide y optimiza.
      </p>
      <p>
        Esta plataforma ha sido diseñada bajo principios profesionales de administración financiera: control del flujo de caja, optimización de recursos, reducción de riesgos y crecimiento patrimonial.
      </p>
      <p>
        Aquí no solo visualizarás datos, sino que transformarás información en decisiones estratégicas.
      </p>
    </Section>
  );
}

function Budget() {
  return (
    <Section title="Presupuesto Estratégico">
      <p>
        Un presupuesto profesional no es una limitación, es una herramienta de control y proyección. Permite anticipar escenarios financieros y tomar decisiones con base en datos.
      </p>
      <p>
        Existen diferentes enfoques:
        • Método 50/30/20 (equilibrio entre necesidades, deseos y ahorro)
        • Presupuesto base cero (cada peso tiene un propósito)
        • Presupuesto flexible (adaptación dinámica según ingresos)
      </p>
      <p>
        El objetivo principal es asignar recursos de forma eficiente, evitando fugas de dinero y maximizando el rendimiento financiero personal.
      </p>
    </Section>
  );
}

function Expenses() {
  return (
    <Section title="Optimización de Gastos">
      <p>
        El control de gastos no consiste en eliminar consumo, sino en optimizarlo. Un análisis profundo permite identificar patrones, hábitos y decisiones ineficientes.
      </p>
      <p>
        Clasificar los gastos en fijos, variables y discrecionales permite entender el impacto real de cada categoría en tu flujo de caja.
      </p>
      <p>
        La clave es transformar gastos en decisiones conscientes, alineadas con tus objetivos financieros.
      </p>
    </Section>
  );
}

function Debts() {
  return (
    <Section title="Gestión Profesional de Deudas">
      <p>
        La deuda no es negativa por sí misma, pero su mala gestión puede comprometer la estabilidad financiera. La clave está en la estrategia.
      </p>
      <p>
        Métodos recomendados:
        • Método bola de nieve: prioriza deudas pequeñas para generar motivación
        • Método avalancha: prioriza tasas de interés altas para eficiencia financiera
      </p>
      <p>
        El objetivo es reducir la carga financiera, mejorar el flujo de caja y liberar capacidad de inversión.
      </p>
    </Section>
  );
}

function Savings() {
  return (
    <Section title="Ahorro Inteligente">
      <p>
        El ahorro no debe ser residual. Debe ser una decisión estructural dentro de tu sistema financiero.
      </p>
      <p>
        Estrategias:
        • Ahorro automático
        • Fondo de emergencia (3-6 meses)
        • Ahorro por objetivos
      </p>
      <p>
        Un sistema de ahorro sólido es la base de la estabilidad financiera y el punto de partida para la inversión.
      </p>
    </Section>
  );
}

function Investments() {
  return (
    <Section title="Inversiones y Crecimiento Patrimonial">
      <p>
        Invertir es el proceso mediante el cual el dinero genera más dinero. Es el siguiente nivel después del ahorro.
      </p>
      <p>
        Tipos de inversión:
        • Renta fija: estabilidad y menor riesgo
        • Renta variable: mayor riesgo, mayor retorno
        • Activos alternativos: diversificación
      </p>
      <p>
        La diversificación, el horizonte de inversión y la gestión del riesgo son los pilares fundamentales de cualquier estrategia de inversión.
      </p>
    </Section>
  );
}

function Login() {
  return (
    <div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="max-w-md mx-auto bg-white/5 p-8 rounded-2xl backdrop-blur-xl shadow-xl"
    >
      <h2 className="text-2xl mb-6 text-center">Acceso Seguro</h2>
      <input className="w-full p-3 mb-4 rounded bg-black/40" placeholder="Email" />
      <input className="w-full p-3 mb-4 rounded bg-black/40" placeholder="Password" type="password" />
      <button className="w-full py-3 bg-white text-black rounded-xl hover:scale-105 transition">
        Entrar
      </button>
    </div>
  );
}
