import React from 'react'
import { motion } from 'framer-motion'



export default function PremiumPortfolio() {
  const projects = [
    {
      id: 1,
      title: 'Platforma de Reservas - Hotelify',
      desc: 'Landing, dashboard e integração de pagamentos. Responsive, PWA-ready, analytics básico.',
      tags: ['React', 'Node', 'Stripe', 'PWA'],
      img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1400&q=60'
    },
    {
      id: 2,
      title: 'Painel de Vendas - MercadoSimples',
      desc: 'Dashboard com tabelas, filtros e visualizações. Integração com API REST e auth JWT.',
      tags: ['React', 'Tailwind', 'API'],
      img: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1400&q=60'
    },
    {
      id: 3,
      title: 'App Educacional - Aprende.js',
      desc: 'SPA React com routes dinâmicas, quizzes e tracking de progresso do aluno.',
      tags: ['React', 'UX', 'Accessibility'],
      img: 'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=1400&q=60'
    }
  ]

  const stats = [
    { label: 'Projetos', value: '24' },
    { label: 'Clientes', value: '18' },
    { label: 'Tempo médio de entrega', value: '5 dias' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-tr from-slate-900 via-slate-800 to-indigo-900 text-slate-100 antialiased">
      {/* NAVBAR */}
      <nav className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-indigo-400 to-cyan-300 flex items-center justify-center text-slate-900 font-bold">JT</div>
          <div>
            <div className="font-semibold">Jorge-Tanguila</div>
            <div className="text-xs text-slate-300">Desenvolvedor • Frontend • Soluções Rápidas</div>
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


{/*avatar-apresentação*/}
        <motion.div initial={{ scale: 0.98, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.6 }} className="w-full md:w-1/2">
          <div className="rounded-3xl p-6 bg-gradient-to-br from-white/6 to-white/3 border border-white/6 shadow-xl">
            <div className="flex items-center gap-4">
              <img alt="avatar" src="https://images.unsplash.com/photo-1545996124-1b1a6a52f7b6?auto=format&fit=crop&w=400&q=60" className="w-20 h-20 rounded-2xl object-cover" />
              <div>
                <div className="font-semibold text-lg">Teu Nome</div>
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
              <a className="flex-1 text-center py-2 rounded-lg bg-cyan-500 hover:bg-cyan-600">Ver CV</a>
              <a className="flex-1 text-center py-2 rounded-lg border border-white/10">GitHub</a>
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
                  <a href="#" className="text-sm underline">Ver demo</a>
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
            <div className="font-semibold">Landing Pages</div>
            <div className="text-slate-300 mt-2 text-sm">Landing pages otimizadas para conversão e carregamento rápido.</div>
            <div className="mt-4 text-sm font-bold">A partir de 50 USD</div>
          </div>

          <div className="p-6 rounded-2xl bg-white/5 border border-white/6">
            <div className="font-semibold">Dashboards & Admins</div>
            <div className="text-slate-300 mt-2 text-sm">Painéis com filtros, gráficos e integrações.</div>
            <div className="mt-4 text-sm font-bold">A partir de 120 USD</div>
          </div>

          <div className="p-6 rounded-2xl bg-white/5 border border-white/6">
            <div className="font-semibold">Automação & Scripts</div>
            <div className="text-slate-300 mt-2 text-sm">Automatização de processos manuais e integração com APIs.</div>
            <div className="mt-4 text-sm font-bold">A partir de 40 USD</div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-bold">Sobre Mim</h2>
            <p className="text-slate-300 mt-2">Sou um desenvolvedor apaixonado por criar interfaces limpas, aplicações performáticas e experiências que encantam o utilizador. Trabalho com foco em resultados: conversão, retenção e velocidade.</p>

            <ul className="mt-4 grid grid-cols-2 gap-2 text-sm text-slate-300">
              <li>• UX-first development</li>
              <li>• Performance & SEO</li>
              <li>• Testes & QA</li>
              <li>• Acessibilidade (WCAG basics)</li>
            </ul>

            <div className="mt-6 flex gap-3">
              <a className="px-4 py-2 rounded bg-cyan-500">Ver GitHub</a>
              <a className="px-4 py-2 rounded border border-white/10">Baixar CV</a>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white/5 border border-white/6">
            <div className="font-semibold">Testemunhos</div>
            <div className="mt-4 space-y-4">
              <blockquote className="text-slate-300 text-sm">“Rápido, comunicativo e entregou tudo no prazo. Recomendo para qualquer startup.” — Maria, CEO</blockquote>
              <blockquote className="text-slate-300 text-sm">“O painel aumentou a produtividade da nossa equipa em 40%.” — João, COO</blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="max-w-6xl mx-auto px-6 py-12">
        <div className="p-8 rounded-2xl bg-gradient-to-br from-white/4 to-white/6 border border-white/6">
          <h3 className="text-xl font-semibold">Contacta-me</h3>
          <p className="text-slate-300 mt-2">Envie uma mensagem com uma breve descrição do projecto e eu respondo em até 24h.</p>

          <form className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <input className="p-3 rounded bg-transparent border border-white/6" placeholder="Nome" />
            <input className="p-3 rounded bg-transparent border border-white/6" placeholder="Email" />
            <input className="p-3 rounded bg-transparent border border-white/6 md:col-span-2" placeholder="Assunto" />
            <textarea className="p-3 rounded bg-transparent border border-white/6 md:col-span-2" placeholder="Descrição rápida do projeto" rows={4} />
            <div className="md:col-span-2 flex items-center gap-3">
              <button className="px-5 py-2 rounded bg-indigo-600">Enviar mensagem</button>
              <span className="text-slate-300 text-sm">Ou me chama no WhatsApp: +244 9XX XXX XXX</span>
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
