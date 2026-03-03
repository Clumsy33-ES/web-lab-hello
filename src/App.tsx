import "./App.css"

function App() {
  return (
    <>
      {/* Skip link */}
      <a href="#ana-icerik" className="skip-link">
        Ana içeriğe atla
      </a>

      {/* Header + Nav */}
      <header>
        <div className="site-title">
          Elif SAKAR - Portföyüm
        </div>

        <nav aria-label="Ana navigasyon">
          <ul>
            <li><a href="#hakkimda">Hakkımda</a></li>
            <ul className="skill-tags" role="list">
              <li>HTML5</li>
              <li>CSS3</li>
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>React</li>
              <li>Git</li>
            </ul>
            <li><a href="#projeler">Projeler</a></li>
            <li><a href="#iletisim">İletişim</a></li>
          </ul>
        </nav>
      </header>

      {/* Main */}
      <main id="ana-icerik" tabIndex={-1}>
        {/* Hakkımda */}
        <section id="hakkimda">
          <h2>Hakkımda</h2>

          <figure>
            <img
              src="/src/assets/profile.jpg"
              alt="Elif SAKAR profil fotoğrafı"
              width={160}
            />
            <figcaption>Elif SAKAR</figcaption>
          </figure>

          <p>
            Merhaba! Ben Elif SAKAR. Yazılım Mühendisliği öğrencisiyim.
            Web geliştirme, mobil uygulamalar ve oyun geliştirme ile
            ilgileniyorum.
          </p>

          <h3>Kullandığım Teknolojiler</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>React</li>
          </ul>
        </section>

        {/* Projeler */}
        <section id="projeler">
          <h2>Projelerim</h2>
          <div className="project-grid">
          <article className="project-card">
            <img src="/src/assets/proje1.jpg" alt="E-AVM Projesi" />
            <h3>E-AVM</h3>
            <p>
              Web tabanlı bir e-ticaret uygulaması.
              React ve TypeScript kullanılarak geliştirildi.
            </p>

            <h4>Proje Teknolojileri</h4>
            <ul className="skill-tags" >
              <li>React</li>
              <li>TypeScript</li>
            </ul>
          </article>

          <article className="project-card">
            <img src="/src/assets/proje2.jpg" alt="Mobil Uygulama Projesi" />
            <h3>Mobil Uygulama</h3>
            <p>
              Mobil uygulama geliştirmeye yönelik örnek bir proje.
              React Native kullanılarak geliştirildi.
            </p>

            <h4>Proje Teknolojileri</h4>
            <ul className="skill-tags">
              <li>React Native</li>
            </ul>
          </article>
          </div>
        </section>

        {/* İletişim */}
        <section id="iletisim">
          <h2>İletişim</h2>

          <form>
            <div>
              <label htmlFor="ad">Ad Soyad</label>
              <input
                id="ad"
                name="ad"
                type="text"
                required
                minLength={3}
              />
            </div>

            <div>
              <label htmlFor="email">E-posta</label>
              <input
                id="email"
                name="email"
                type="email"
                required
              />
            </div>

            <div>
              <label htmlFor="mesaj">Mesaj</label>
              <textarea
                id="mesaj"
                name="mesaj"
                required
                minLength={10}
                rows={5}
              />
            </div>

            <button type="submit">Gönder</button>
          </form>
        </section>
      </main>

      {/* Footer */}
      <footer>
        <p>© 2026 Elif SAKAR</p>
      </footer>
    </>
  )
}

export default App