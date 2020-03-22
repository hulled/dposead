const ThreeReasons = () => (
  <section>
    <article>
      <h3>3 motivos para escolher nossos cursos</h3>
      <ul>
        <li>
          <amp-img
            alt="Cursos com qualidade no MEC nota 4"
            src="/static/icons/star.webp"
            width="60"
            height="30"
            layout="responsive"
          ></amp-img>
          <span>
            Todos os nossos cursos possuem qualidade garantida pelo Decreto nº
            5.773/06 do MEC, avaliado como nota 4 (de 1 a 5) pelo IGC.
          </span>
        </li>
        <li>
          <amp-img
            alt="Certificado em 6 meses"
            src="/static/icons/school.webp"
            width="40"
            height="40"
            layout="responsive"
          ></amp-img>
          <span>
            Garanta a sua certificação em um prazo mínimo de 6 meses, de acordo
            com o que você precisa nesse momento.
          </span>
        </li>
        <li>
          <amp-img
            alt="O melhor horário para estudar"
            src="/static/icons/calendar.webp"
            width="40"
            height="40"
            layout="responsive"
          ></amp-img>
          <span>
            Você está no controle e decide qual o melhor horário e local para
            estudar.
          </span>
        </li>
      </ul>
    </article>

    <style jsx>{`
      section {
        position: relative;
        display: flex;
      }
      section > article {
        width: 100%;
        height: 1000px;
        background: url('/static/images/footer.webp');
        background-size: cover;
        background-repeat: no-repeat;
        display: flex;
        margin: 0 40px;
        flex-wrap: wrap;
        align-content: flex-end;
        color: var(--write);
      }
      section > article > h3 {
        width: 100%;
        font-size: 2.5rem;
        padding-bottom: 60px;
      }
      section > article > ul {
        list-style: none;
        font-size: 1.1rem;
        width: 100%;
      }
      section > article > ul > li {
        display: flex;
        padding-bottom: 40px;
        align-items: center;
      }
      section > article > ul > li > amp-img {
        width: 40px;
        height: 35px;
        padding-right: 30px;
        margin-right: 10px;
      }

      @media (min-width: 1000px) {
        section > article > h3,
        section > article > ul {
          padding-left: var(--margin-lg);
          padding-right: var(--margin-lg);
        }
      }
      @media (max-width: 999px) {
        section > article > h3,
        section > article > ul {
          padding-left: calc(var(--margin-sm) - 40px);
        }
      }
      @media (max-width: 750px) {
        section > article {
          margin: 0;
        }
        section > article > h3,
        section > article > ul {
          padding-left: 20px;
        }
      }
      @media (max-width: 650px) {
      }
      @media (max-width: 550px) {
        section {
          margin-top: 150px;
        }
      }
      @media (max-width: 450px) {
      }
      @media (max-width: 376px) {
        section {
          margin-top: 340px;
          margin-bottom: 150px;
        }
        section {
          margin-top: 340px;
          margin-bottom: 150px;
        }
      }
      @media (max-width: 330px) {
      }
    `}</style>
  </section>
)

export default ThreeReasons
