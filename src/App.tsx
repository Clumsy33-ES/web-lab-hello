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
        <h1>Elif SAKAR - Portföyüm</h1>

        <nav aria-label="Ana navigasyon">
          <ul>
            <li><a href="#hakkimda">Hakkımda</a></li>
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
          <h2>Projeler</h2>

          <article>
            <h3>E-AVM</h3>
            <p>
              Web tabanlı bir e-ticaret uygulaması.
              React ve TypeScript kullanılarak geliştirildi.
            </p>

            <h4>Proje Teknolojileri</h4>
            <ul>
              <li>React</li>
              <li>TypeScript</li>
            </ul>
          </article>

          <article>
            <h3>Mobil Uygulama</h3>
            <p>
              Mobil uygulama geliştirmeye yönelik örnek bir proje.
              React Native kullanılarak geliştirildi.
            </p>

            <h4>Proje Teknolojileri</h4>
            <ul>
              <li>React Native</li>
            </ul>
          </article>
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