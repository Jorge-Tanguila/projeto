import React, { useState } from 'react'
import { motion } from 'framer-motion'
import avatar from '../assets/my_avatar2.png'
//import CV from '../assets/Curriculo_Jorge_Tanguila.pdf'

export default function PremiumPortfolio() {
  
  const [formStatus, setFormStatus] = useState({ type: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const CV= "https://drive.google.com/file/d/1Sd5jPi7KScjN36RCWRU0NJvsPiFuZHoR/view?usp=drivesdk"
  const my_github = 'https://github.com/Jorge-Tanguila'
  
  const projects = [
  {
    id: 1,
    title: 'Platforma de Reservas - Hotelify',
    desc: 'Landing, dashboard e integração de pagamentos. Responsive, PWA-ready, analytics básico.',
    tags: ['React', 'Node', 'Stripe', 'PWA'],
    img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1400&q=60',
    demo: 'https://hotelify.vercel.app'
  },
  {
    id: 2,
    title: 'Painel de Vendas - MercadoSimples',
    desc: 'Dashboard com tabelas, filtros e visualizações. Integração com API REST e auth JWT.',
    tags: ['React', 'Tailwind', 'API'],
    img: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1400&q=60',
    demo: 'https://praca-360.vercel.app/'
  },
  {
    id: 3,
    title: 'App Educacional - Aprende.js',
    desc: 'SPA React com routes dinâmicas, quizzes e tracking de progresso do aluno.',
    tags: ['React', 'UX', 'Accessibility'],
    img: 'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=1400&q=60',
    demo: 'https://aprendejs.vercel.app'
  }
]

  const stats = [
    { label: 'Projetos', value: '24' },
    { label: 'Clientes', value: '18' },
    { label: 'Tempo médio de entrega', value: '9 dias' }
  ]

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setFormStatus({ type: '', message: '' })

    const formData = new FormData(e.target)
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message")
    }

    try {
      const res = await fetch("http://localhost:5000/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })

      if (!res.ok) {
        throw new Error('Erro na comunicação com o servidor')
      }

      const result = await res.json()

      if (result.success) {
        setFormStatus({ 
          type: 'success', 
          message: '✓ Mensagem enviada com sucesso! Respondo em até 24h.' 
        })
        e.target.reset()
      } else {
        setFormStatus({ 
          type: 'error', 
          message: result.message || 'Erro ao enviar mensagem' 
        })
      }
    } catch (error) {
      console.error(error)
      setFormStatus({ 
        type: 'error', 
        message: 'Erro ao conectar com o servidor. Verifique sua conexão.' 
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-tr from-slate-900 via-slate-800 to-indigo-900 text-slate-100 antialiased">
      {/* NAVBAR */}
      <nav className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-indigo-400 to-cyan-300 flex items-center justify-center text-slate-900 font-bold">JT</div>
          <div>
            <div className="font-semibold">Jorge-Tanguila</div>
            <div className="text-xs text-slate-300">Desenvolvedor • FullStack • Soluções Rápidas</div>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-6 text-slate-200">
          <a href="#projects" className="hover:underline">Projetos</a>
          <a href="#services" className="hover:underline">Serviços</a>
          <a href="#about" className="hover:underline">Sobre</a>
          <a href="#contact" className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-xl shadow">Contactar</a>
        </div>
      </nav>

      {/* HERO */}
      <header className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row gap-8 items-center">
        <motion.div initial={{ x: -30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.6 }} className="flex-1">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">Eu construo <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-indigo-200 to-purple-300">apps</span> que vendem e facilitam o dia-a-dia</h1>
          <p className="mt-4 text-slate-300 max-w-xl">Sou desenvolvedor full-stack focado em soluções rápidas e com excelente UX. Trabalho com startups, PMEs e freelancers para transformar ideias em produtos reais.</p>

          <div className="mt-6 flex gap-3">
            <a href="#contact" className="inline-flex items-center gap-2 bg-white/10 border border-white/10 px-4 py-2 rounded-lg backdrop-blur-sm">Contrata-me</a>
            <a href="#projects" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700">Ver projetos</a>
          </div>

          {/* STATS */}
          <div className="mt-8 grid grid-cols-3 gap-4 max-w-md">
            {stats.map((s) => (
              <div key={s.label} className="p-4 bg-white/5 rounded-xl backdrop-blur-sm">
                <div className="text-2xl font-bold">{s.value}</div>
                <div className="text-xs text-slate-300">{s.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* AVATAR-APRESENTAÇÃO */}
        <motion.div initial={{ scale: 0.98, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.6 }} className="w-full md:w-1/2">
          <div className="rounded-3xl p-6 bg-gradient-to-br from-white/6 to-white/3 border border-white/6 shadow-xl">
            <div className="flex items-center gap-4">
              <img alt="avatar" src={avatar} className="w-20 h-20 rounded-2xl object-cover" />
              <div>
                <div className="font-semibold text-lg">Jorge-Tanguila</div>
                <div className="text-sm text-slate-300">Frontend & Full-Stack Developer</div>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="p-4 bg-white/4 rounded-xl">
                <div className="text-xs text-slate-300">Stack</div>
                <div className="mt-2 text-sm">React · Node · Tailwind · PostgreSQL</div>
              </div>
              <div className="p-4 bg-white/4 rounded-xl">
                <div className="text-xs text-slate-300">Disponível</div>
                <div className="mt-2 text-sm">Freelas · Contrato remoto</div>
              </div>
            </div>

            <div className="mt-6 flex gap-3">
              <a className="flex-1 text-center py-2 rounded-lg bg-cyan-500 hover:bg-cyan-600" href={CV}>Ver CV</a>
              <a className="flex-1 text-center py-2 rounded-lg border border-white/10" href={my_github}>GitHub</a>
            </div>
          </div>
        </motion.div>
      </header>

      {/* PROJECTS */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold">Projetos Recentes</h2>
        <p className="text-slate-300 mt-2 max-w-2xl">Uma seleção dos meus melhores trabalhos — foco em performance, UX e resultados de negócio.</p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <motion.article key={p.id} whileHover={{ y: -6 }} className="rounded-2xl overflow-hidden bg-white/6 border border-white/6 shadow-lg">
              <div className="h-44 bg-cover bg-center" style={{ backgroundImage: `url(${p.img})` }} />
              <div className="p-4">
                <div className="font-semibold text-lg">{p.title}</div>
                <p className="mt-2 text-slate-300 text-sm">{p.desc}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map(t => (
                    <span key={t} className="text-xs bg-white/5 px-2 py-1 rounded">{t}</span>
                  ))}
                </div>

                <div className="mt-4 flex items-center justify-between">
  <a 
  href={p.demo}
  target="_blank"
  rel="noopener noreferrer"
  className="text-sm underline text-cyan-300 hover:text-cyan-400"
>
  Ver demo
</a>
                  <a href="#contact" className="text-sm bg-indigo-600 px-3 py-1 rounded">Contratar</a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold">Serviços</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">

          <div className="p-6 rounded-2xl bg-white/5 border border-white/6">
            <div className="font-semibold">Front-end & UI</div>
            <div className="text-slate-300 mt-2 text-sm">
              Interfaces modernas, animadas e responsivas usando React, Tailwind e Framer Motion.
            </div>
            <div className="mt-4 text-sm font-bold">A partir de 55.000 KZ/60 USD</div>
          </div>

          <div className="p-6 rounded-2xl bg-white/5 border border-white/6">
            <div className="font-semibold">Back-end & APIs</div>
            <div className="text-slate-300 mt-2 text-sm">
              Servidores escaláveis, autenticação, bases de dados e APIs seguras em Python e Node.js.
            </div>
            <div className="mt-4 text-sm font-bold">A partir de 100.000 KZ/120 USD</div>
          </div>

          <div className="p-6 rounded-2xl bg-white/5 border border-white/6">
            <div className="font-semibold">IA & Redes Neurais</div>
            <div className="text-slate-300 mt-2 text-sm">
              Implementação de modelos de IA, automações inteligentes e integração com RNAs.
            </div>
            <div className="mt-4 text-sm font-bold">A partir de 150.000 KZ/150 USD</div>
          </div>

          <div className="p-6 rounded-2xl bg-white/5 border border-white/6">
            <div className="font-semibold">Aulas de Programação</div>
            <div className="text-slate-300 mt-2 text-sm">
              Aulas particulares do nível básico ao profissional: lógica, web, React e back-end.
            </div>
            <div className="mt-4 text-sm font-bold">A partir de 3.000 KZ/h | 4 USD/h</div>
          </div>

        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-bold">Sobre Mim</h2>
            <p className="text-slate-300 mt-2">Sou um desenvolvedor full-stack focado em criar interfaces limpas, back-ends robustos e aplicações rápidas. Trabalho orientado a resultados — conversão, retenção e performance — e tenho experiência em IA com Redes Neurais Artificiais. Também dou aulas particulares de programação, desde o nível básico até o profissional.</p>

            <ul className="mt-4 grid grid-cols-2 gap-2 text-sm text-slate-300">
              <li>• UX-first development</li>
              <li>• Performance & SEO</li>
              <li>• Testes & QA</li>
              <li>• Acessibilidade (WCAG basics)</li>
            </ul>

            <div className="mt-6 flex gap-3">
              <a className="px-4 py-2 rounded bg-cyan-500" href={my_github}>Ver GitHub</a>
              <a className="px-4 py-2 rounded border border-white/10" href={CV}>Baixar CV</a>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white/5 border border-white/6">
            <div className="font-semibold">Testemunhos</div>
            <div className="mt-4 space-y-4">
              <blockquote className="text-slate-300 text-sm">"Rápido, comunicativo e entregou tudo no prazo. Recomendo para qualquer startup." — Maria, CEO</blockquote>
              <blockquote className="text-slate-300 text-sm">"O painel aumentou a produtividade da nossa equipa em 40%." — João, CEO</blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="max-w-6xl mx-auto px-6 py-12">
        <div className="p-8 rounded-2xl bg-gradient-to-br from-white/4 to-white/6 border border-white/6">
          <h3 className="text-xl font-semibold">Contacta-me</h3>
          <p className="text-slate-300 mt-2">Envie uma mensagem com uma breve descrição do projecto e eu respondo em até 24h.</p>

          {/* FEEDBACK VISUAL */}
          {formStatus.message && (
            <div className={`mt-4 p-4 rounded-lg ${
              formStatus.type === 'success' 
                ? 'bg-green-500/20 text-green-300 border border-green-500/30' 
                : 'bg-red-500/20 text-red-300 border border-red-500/30'
            }`}>
              {formStatus.message}
            </div>
          )}

          <form
            className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              name="name"
              required
              className="p-3 rounded bg-transparent border border-white/6 text-slate-100 placeholder:text-slate-400"
              placeholder="Nome *"
            />

            <input
              type="email"
              name="email"
              required
              className="p-3 rounded bg-transparent border border-white/6 text-slate-100 placeholder:text-slate-400"
              placeholder="Email *"
            />

            <textarea
              name="message"
              required
              className="p-3 rounded bg-transparent border border-white/6 md:col-span-2 text-slate-100 placeholder:text-slate-400"
              placeholder="Mensagem *"
              rows={4}
            />

         <div className="md:col-span-2 flex flex-col md:flex-row items-center gap-3">
  <button
    type="submit"
    disabled={isSubmitting}
    className="px-5 py-2 rounded bg-indigo-600 hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
  >
    {isSubmitting ? 'Enviando...' : 'Enviar mensagem'}
  </button>
  
  <span className="text-slate-400">ou</span>
  
  <a 
    href="https://wa.me/244947322354?text=Olá%20Jorge!%20Vi%20seu%20portfólio%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto."
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 px-5 py-2 rounded bg-green-600 hover:bg-green-700 transition-colors"
  >
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
    </svg>
    WhatsApp
  </a>
</div>
          </form>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="max-w-6xl mx-auto px-6 py-8 text-slate-400 text-sm flex flex-col md:flex-row items-center justify-between">
        <div>© {new Date().getFullYear()} Jorge-Tanguila • Feito com foco em UX</div>
        <div className="mt-4 md:mt-0">Made with  • React + Tailwind</div>
      </footer>

    </div>
  )
}