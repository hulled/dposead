import Head from 'next/head'
import { useState } from 'react'

import { SharedStepProvider } from '../hooks/useSharedStep'
import Form from '../components/stepForm/Form'

const Enrolment = () => {
  const [progressBarValue, setProgressBarValue] = useState(0)
  const progressBar = (value) => {
    setProgressBarValue(value)
  }

  return (
    <>
      <Head>
        <title>Nova Matricula - Desconto Pos EaD</title>
        <script
          dangerouslySetInnerHTML={{
            __html:
              process.env.NODE_ENV === 'production'
                ? `var s=document.createElement('script');s.type='text/javascript';var v=parseInt(Math.random()*1000000);s.src='https://api.gerencianet.com.br/v1/cdn/${process.env.gnAccountId}/'+v;s.async=false;s.id='${process.env.gnAccountId}';if(!document.getElementById('${process.env.gnAccountId}')){document.getElementsByTagName('head')[0].appendChild(s);};$gn={validForm:true,processed:false,done:{},ready:function(fn){$gn.done=fn;}};$gn.ready((checkout) => {})`
                : `var s=document.createElement('script');s.type='text/javascript';var v=parseInt(Math.random()*1000000);s.src='https://sandbox.gerencianet.com.br/v1/cdn/${process.env.gnAccountId}/'+v;s.async=false;s.id='${process.env.gnAccountId}';if(!document.getElementById('${process.env.gnAccountId}')){document.getElementsByTagName('head')[0].appendChild(s);};$gn={validForm:true,processed:false,done:{},ready:function(fn){$gn.done=fn;}};$gn.ready((checkout) => {})`,
          }}
        ></script>
      </Head>
      <header>
        <div></div>
      </header>
      <SharedStepProvider>
        <Form onProgress={(value) => progressBar(value)} />
      </SharedStepProvider>
      <img
        id="logo"
        src="static/images/logo-prominas.png"
        alt="Logo da Instituição parceira ofertante dos cursos"
      />
      {/* Facebook Pixel */}
      <amp-pixel
        src="https://www.facebook.com/tr?id=2534781333293766&ev=PageView&noscript=1"
        layout="nodisplay"
      ></amp-pixel>
      <amp-analytics type="facebookpixel" id="facebook-pixel">
        <script
          type="application/json"
          dangerouslySetInnerHTML={{
            __html: `{
              "vars": {
                  "pixelId": "2534781333293766"
              },
              "triggers": {
                  "trackPageview": {
                    "on": "visible",
                    "request": "pageview"
                  }
               }
          }`,
          }}
        ></script>
      </amp-analytics>
      <style jsx>{`
        img#logo {
          position: fixed;
          right: 10px;
          bottom: 20px;
        }
        header {
          width: 100vw;
          height: 10px;
          border-right: 0;
          border-left: 0;
          background: #cecece;
        }
        header > div {
          width: ${progressBarValue > 100 ? 100 : progressBarValue}vw;
          height: 10px;
          background: #000;
          transition: 1s;
          border-top-right-radius: 5px;
          border-bottom-right-radius: 7px;
        }
      `}</style>
    </>
  )
}

export default Enrolment
