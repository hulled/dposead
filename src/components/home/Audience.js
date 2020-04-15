const Audience = () => (
  <section>
    <amp-img
      media="(min-width: 500px)"
      alt="Aluna satisfeita com o portal do aluno"
      src="/static/images/smile_girl_mac.webp"
      width="835"
      height="550"
      layout="responsive"
    >
      <amp-img
        fallback=""
        alt="Aluna satisfeita com o portal do aluno"
        src="/static/images/smile_girl_mac.jpg"
        width="835"
        height="550"
        layout="responsive"
      ></amp-img>
    </amp-img>
    <amp-img
      media="(max-width: 499px)"
      alt="Aluna satisfeita com o portal do aluno"
      src="/static/images/smile_girl_mac__mobile.webp"
      width="835"
      height="550"
      layout="responsive"
    >
      <amp-img
        fallback=""
        alt="Aluna satisfeita com o portal do aluno"
        src="/static/images/smile_girl_mac.jpg"
        width="835"
        height="550"
        layout="responsive"
      ></amp-img>
    </amp-img>
    <article>
      <h4>O que estão falando sobre nós</h4>
      <div>

      <p>
         <span className="high">"</span> Meu nome é Tallis, eu trabalho no banco do Brasil
       e conclui um curso de Pós graduação na Faculdade Única.
       Depois de fazer o curso eu consegui aplicar muitos conhecimentos e obter resultados, 
       isso tudo fazendo o curso sem sair de casa. <span className="low">"</span>
       </p>
       
<div className="avatar">
<amp-img
        fallback=""
        alt="Aluna satisfeita com o portal do aluno"
        src="/static/images/avatar.jpg"
        width="10"
        height="10"
        layout="responsive"
      ></amp-img>
      <section>Tallis Gomes</section>
      </div>
      </div>
    </article>

    <style jsx>{`
      section {
        position: relative;
      }
      section > amp-img {
        width: 65%;
      }
      section > article {
        width: 50%;
        background: #08395a;
        height: 500px;
        padding: 20px;
        position: absolute;
        top: 60px;
        right: 0;
        color: var(--write);
        font-size: 2.5rem;
        text-align: center;
        
      }
      section > article > div{
        position: relative;
        top:13%;
        align-text: center;
        justify-content: center
        
        
      }
      section > article > div >  p{
        position: relative;
        width: 96%;
        color: var(--write);
        font-size: 1.6rem;
        top:30px;
        font-weight: lighter;
        left:16px;
        line-height:1.3;
      }
      section > article > div > p > span.low {
        position: absolute;
        font-size: 4rem;
        top:112px;
      }
      section > article > div > p > span.high {
        position: absolute;
        font-size: 4rem;
        top: -21px;
        left: -17px;
      }

      section > article > div > div.avatar > amp-img{
        position: relative;
        width:80px;
        border-radius:50px;
        left:30%;
      }
      section > article > div > div.avatar > section{
        position: relative;
        font-size: 1.5rem;
        left:5%;
        top:-51px;    
      }
      section > article > div >div.avatar{
        position:relative;
        top:54px;
        left:13px;
      }
      @media (max-width: 999px) {
        section > article {
          height: 400px;
        }
      }
      @media (max-width: 750px) {
      }
      @media (max-width: 650px) {
        section {
          position: relative;
          margin: 400px 0px;
        }
        section > amp-img {
          width: 90%;
        }
        section > article {
          width: 100%;
          top: 250px;
        }
        section > article > h3 {
          font-size: 2rem;
        }
      }
      @media (max-width: 550px) {
        section {
          margin: 500px 0px;
        }
      }
      @media (max-width: 450px) {
        section {
          height: 560px;
          margin: 100px 40px 0 40px;
        }
        section > article {
          top: 160px;
        }

        section > article > div{
          align-items: center;
          justify-content: center
        }
        section > article > div >  p{
          position: relative;
          color: var(--write);
          font-size: 1rem;
          text-aling: center;
          font-weight: lighter;
          width:100%;
          top:-30px;
          left:2px;
        }
        section > article > div >div.avatar{
          position:relative;
          top:-15px;
          left:13px;
          left:2px;
        }
        section > article > div > div.avatar > amp-img{
          position: relative;
          width:40px;
          border-radius:50px;
          left:27%;
        }
        section > article > div > div.avatar > section{
          position: relative;
          font-size: 1rem;
          left:14%;
          top:-129px;    
        }
        section > article > div > p > span.low {
          position: absolute;
          font-size: 2.5rem;
          top:109px;
        }
        section > article > div > p > span.high {
          position: absolute;
          font-size: 2.5rem;
          top: -15px;
          left: -17px;
        }





      }
      @media (max-width: 384px) {
        section {
          height: 560px;
          margin: 100px 20px 0 20px;
        }
        section > article {
          top: 160px;
        }
        section > article > div{
          align-items: center;
          justify-content: center
        }
        section > article > div >  p{
          position: relative;
          color: var(--write);
          font-size: 1rem;
          text-aling: center;
          font-weight: lighter;
          width:100%;
          top:-30px;
          left:2px;
        }
        section > article > div >div.avatar{
          position:relative;
          top:-15px;
          left:13px;
          left:2px;
        }
        section > article > div > div.avatar > amp-img{
          position: relative;
          width:40px;
          border-radius:50px;
          left:28%;
        }
        section > article > div > div.avatar > section{
          position: relative;
          font-size: 1rem;
          left:14%;
          top:-129px;    
        }
        section > article > div > p > span.low {
          position: absolute;
          font-size: 2.5rem;
          top:109px;
        }
        section > article > div > p > span.high {
          position: absolute;
          font-size: 2.5rem;
          top: -15px;
          left: -12px;
        }




      }

      @media (max-width: 360px) {

        section > article > div{
          align-items: center;
          justify-content: center
        }
        section > article > div >  p{
          position: relative;
          color: var(--write);
          font-size: 1rem;
          text-aling: center;
          font-weight: lighter;
          width:100%;
          top:-30px;
          left:2px;
        }
        section > article > div >div.avatar{
          position:relative;
          top:-15px;
          left:13px;
          left:2px;
        }
        section > article > div > div.avatar > amp-img{
          position: relative;
          width:40px;
          border-radius:50px;
          left:27%;
        }
        section > article > div > div.avatar > section{
          position: relative;
          font-size: 1rem;
          left:14%;
          top:-129px;    
        }
        section > article > div > p > span.low {
          position: absolute;
          font-size: 2.5rem;
          top:128px;
        }
        section > article > div > p > span.high {
          position: absolute;
          font-size: 2.5rem;
          top: -15px;
          left: 3px;
        }


      }




      @media (max-width: 330px) {

        section > article > div{
          align-items: center;
          justify-content: center
        }
        section > article > div >  p{
          position: relative;
          color: var(--write);
          font-size: 1rem;
          text-aling: center;
          font-weight: lighter;
          width:100%;
          top:-30px;
          left:2px;
        }
        section > article > div >div.avatar{
          position:relative;
          top:-15px;
          left:13px;
          left:2px;
        }
        section > article > div > div.avatar > amp-img{
          position: relative;
          width:40px;
          border-radius:50px;
          left:27%;
        }
        section > article > div > div.avatar > section{
          position: relative;
          font-size: 1rem;
          left:14%;
          top:-129px;    
        }
        section > article > div > p > span.low {
          position: absolute;
          font-size: 2.5rem;
          top:128px;
        }
        section > article > div > p > span.high {
          position: absolute;
          font-size: 2.5rem;
          top: -15px;
          left: -17px;
        }


      }
    `}</style>
  </section>
)

export default Audience
