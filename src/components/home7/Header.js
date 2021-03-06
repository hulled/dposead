import Toolbar from '../shared/Toolbar'
import BtnCta from '../shared/BtnCta'

const Header = (props) => (
  <>
    {props.onlyToolbar ? (
      <Toolbar ctaGoto="/matricular?voucher=listavip400" />
    ) : (
      <header>
        <Toolbar ctaGoto="/matricular?voucher=listavip400" />
        <div className="cta">
          <h1>O que você faz com 7 reais por dia?</h1>
          <hr />
          <div>
            <span>
              É exatamente o que você precisa para ser um especialista
            </span>
            <BtnCta
              goto="/matricular?voucher=listavip400"
              text={'Começar agora'}
              className="btn btn-red"
            />
          </div>
        </div>
      </header>
    )}

    <style jsx>{`
      header {
        background-image: url('/static/images/aluno_conversando_no_telefone_enquanto_realiza_atividades_no_portal.webp'),
          url('/static/images/aluno_conversando_no_telefone_enquanto_realiza_atividades_no_portal.jpg');
        background-repeat: no-repeat;
        background-size: cover;
        height: 600px;
        display: flex;
        flex-wrap: wrap;
        color: #fff;
      }
      header > div.cta {
        position: relative;
        z-index: 1;
        background: transparent;
        align-self: flex-end;
      }
      div.cta {
        display: flex;
        flex-wrap: wrap;
        align-content: flex-end;
      }
      div.cta > div {
        width: 100%;
        display: flex;
        justify-content: space-between;
      }
      div.cta > h1 {
        font-size: 3.5rem;
      }
      div.cta > div > span {
        font-size: 1.5rem;
      }
      div.cta > hr {
        width: 100%;
      }

      @media (min-width: 1000px) {
        header > div.cta > h1,
        header > div.cta > div {
          padding: 10px var(--margin-lg);
        }
        header > div.cta > hr {
          margin: 10px var(--margin-lg);
        }
      }
      @media (max-width: 999px) {
        header > div.cta > h1,
        header > div.cta > div {
          padding: 10px var(--margin-sm);
        }
        header > div.cta > hr {
          margin: 10px var(--margin-sm);
        }
      }
      @media (max-width: 750px) {
        header > div.cta > h1,
        header > div.cta > div {
          padding: 10px 20px;
        }
        header > div.cta > hr {
          margin: 10px 20px;
        }
      }
      @media (max-width: 650px) {
        header div.cta > div {
          flex-wrap: wrap;
        }
        header div.cta > div > * {
          margin-bottom: 10px;
        }
      }
      @media (max-width: 550px) {
      }
      @media (max-width: 450px) {
        header {
          background-image: url('/static/images/aluno_conversando_no_telefone_enquanto_realiza_atividades_no_portal.webp'),
            url('/static/images/aluno_conversando_no_telefone_enquanto_realiza_atividades_no_portal.jpg');
          background-position-x: -185px;
          height: 100vh;
          background-size: 777px;
          background-position-y: 65px;
        }
        header .cta {
          margin-top: 225px;
        }
        header .cta h1 {
          font-size: 2.5rem;
        }
      }
      @media (max-width: 384px) {
        header {
          height: 100vh;
        }
      }
      @media (max-width: 330px) {
        header {
          background-position-x: -213px;
          height: 100vh;
          background-size: 777px;
          background-position-y: 65px;
          height: 616px;
        }
      }
    `}</style>
  </>
)

export default Header
