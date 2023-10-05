import "./App.css";
import { Header } from "./components/header";
import { Hero } from "./components/hero";
import Google from "./assets/google.png";
import { HIworks } from "./components/HIworks";
import Phone from "./assets/phone.png";
import People from "./assets/people.jpg"

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        margin: "30px 50px 0 50px",
      }}
    >
      <Header />
      <Hero />
      <section
        style={{
          margin: "100px 0",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <img
          style={{ height: "60px" }}
          src="https://static.vecteezy.com/system/resources/previews/014/018/561/original/amazon-logo-on-transparent-background-free-vector.jpg"
          alt="amazon"
        />
        <img
          style={{ height: "60px" }}
          src="data:image/png;base64,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"
          alt="stripe"
        />
        <img
          style={{ height: "60px" }}
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAw1BMVEX///8AAAD/Ghr/AADl5eX29vaTk5P/Fxf/FRX/ERF7e3v/Cwv/CAjIyMjCwsIcHBzw8PD39/fV1dX/8fH/9/fh4eEqKiqHh4erq6tvb2//Ly//tbX/2tr/w8P/09M+Pj7/pKS5ubn/Z2f/5ub/m5v/ysr/fn7/SUn/ra3/kZFnZ2cuLi5fX19KSkrY2Nj/OTn/jY3/X1//cnKioqJVVVX/UlL/Jib/vLylpaX/enpBQUERERH/NDT/WFj/ZGQ1NTX/QkIDF3aIAAAJpklEQVR4nO2ca1viPBCGKQEBCwgoCngAPKCigudVWV/9/7/qLT1lJpnSQtOte+3c+2mTGtOnk8lkklgoMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMBty9uv69PL3YP5wfpZ3V34GF5OqEMKuVatVW4j7vLuTP7vXFVGvFCXiOu8u5c25ENUiRuzm3al8uRSVoor4lXevcuVSaIo4mvzTHuWQkqRYf8+7X3nyYFOa2Kd59ytPLmuUJrWXvPuVJ6eknfzbmlyR/sR+yLtfebJLzMSOJo959ytXHuvUvDPJu1u5csTxic4LMfOI87x7lS+UoYirvHu1Jq1S2Wh7hEcRh0Z/Q9Y0vyzLeu4abJGYesSxwfYzZ8vyaBhs81obPeLCYPNZ07QCWgZbramGIk4Mtp41w1CTA4OtasGsODLYesaUQ0msfZPtDpRE29+UZytJTay2wXaPFUMRewYbzxioidEJ+RMvj4Vavzt5nf/QOC4zTXDgVqkq1cdCVGti8CM3fjLTBAdu1QGuvPIiGLv6E4dUdprsQkOpfaO6UVBnf5M/my/ZaYICt9onrBnJGvEDcwgZalKoyPnY/g+Uo+DlBwZzWWoCdjXqIM2G4zllVG1AeVUA3i5F1ba63YiqpJq0S93S2vHLd5hIAUNEDXFTrg57N8sQPKLrpalTeTNWi8vj/pcfp057ujCkJo3pcDhtymeenhfuAzf9ptbAKi7C15d76NqWWO1yrTYV+n7fS1Rlh1y1NG4txG1H+TFKE/9nnr3/zXATW+v0ONz/EiO/5Jeeb0qzFHoLurUgjLgVdhp8ys6XpXGHFSU0CaS3bp3/tPtaC2vYylmgQJBSOqa211Ocw5C96uuV8mPehWUHuiLal9Y1ASXdwoxqYJt8/cnp40j74hNfFD99ckHtc6Twsl0LdlahAyqDsjtaEqgapUlPFrw14hvwORLCrgsxuMey7NnufFzxloAn5NZPpbJxMAv7N1Ur4Zj3i4bqm0hupJvWNdmSBZGqfmi9e/WmmKoQc3R6zRss3k7GkXZSx9OktrEmyIwVNwvfzNJV0kVJpkk06kcBs0lNiMurPVDj4M7EZ7Qkxdp8U0mgP9GGNHyP2yRvFr7ThppYb7gD/6HMgCPLaRh17B0feoYzJzfXnXGV4ggT+vLYUGBNb1lA+kZIEMdsqomSva2qjsIWxQl2LcQs7MmXZpcDOTxkKD2tszeo/9vNzqyxhcvW0GT41Jh1msosdgs7cEa8r+NaBiPwzLu66bM8IyouR+myBcjlQUPZAeXuPD2GT/aCx1C4spVUk48wzEPSWzPQAdoGlrLILYwJfKbqzFHFh1H69R8aECBG6WhdBSZxA418GzzYTqYJjIvLH6ACuln6zImrSjiAwgytM1zE/P3QUIoNvhIY0FNQ6oYOYJTtt6Na6CXSRNngGGqPu5xHaVKsy3Nsp6LmDZf7Y4NJ/DbsbWgoLVjaVN5cje7kl75Losmz8uNg68MCy81oTaqv8qmr79eHc+PpkjfY38CjPIGyhVuyiPrMaPy5hhajibaQHss6MHiiNUm36k0E9KbB1LMPytwBAVYBenJAOmrXpFZrQmwNyt+2Iwsj/cmfOGOB5uOWXuSWyG/51SoptKRVuTPPak1meg+AVUrBo+aduvgTx2KfNUOBoZw3wUash1XcH1+pyYLoADBCmYvRT+FUlrPL4B2dJvj1+HiVxRYpmo+XHwp5WO+t9JQHST9WE9XDLgF+HjjZV7iUqSxnl5drdXZ5FHUnKplkoAqceA8K5PBfufxTnl6pCZkokS6tJwtDJ7sMxuzT0YmMTs/8QMSPT4S4N77PhZbAZbzUKa2lSSNWE/L0BalJ4UXU7aV5DCY4GDuaO2Vu3Hbvy1YR5s/7wcBtCxypkZNjMk2GhVhNSDuREz3Khx++f55qw6VwImrLwHVZLLfAKsIemVQEh00W8rnBLJHIn/gx/0pNhsSvB/4rPjG766VMXMO4AH64Il7N3nGCHgS+/p3+wML5Z+0E7C/5cvj4mCbLFRDJcDD1xx8LvPRSJt5FlSL0w1XxbfKEG4rwAeEhvXFYRE0cmNWaaLtFyAhj9w2D4eJloUd4wq6JF4PnuWAwLyHzibGfcrUmejIaDB1qZCFOwpXwt/t/9TyXLR7NTcwLiwB8Uxl/Exl2TMx6RzMUYCZxu1974WDxL+/ot+JEuBeWGpzc8YAx50F0x9vNpzFcBMXlCpQF0xhUqVuKKg9hYi24vDPXDuJXhLF7PTuWxhOohltBSJSu95lB3BGnyQ5yGnBtFXdMEriP4DLgBbEsMrYiGlsaqB7O0M9hlrIbGr4UKjbPtgDmgBwZjNgIjsD+VnhplLorKEydadM2gnHIidP2/UarUJ71YDo3nGQT5Kinvipj/EtjevgbvH540uKEMhRTc7K2aamM+221XiH8+Mn2Mm63t9U9QWKahqCMtLzQRFy0NWYn6mawtqtOeJwUmujERD74yLA8OaAnFdQTkSno4C5qcUiXfpWA8LlNNVl9YWEX/VELeMnrXTuIb/BiD3Sj1FeLOBLgkdDHknGQC5GAg3zi/S0Qhewqmtgm7x0jQ6Du3nSi3gdFcvp5e5griLKZmNBEO7IGkrL4ak/V6N0EmF/7Ip8o3US8EQxuwSrbzzmjXAG9jIixEu2aF9olt9HfijF61SlmqeZCJ2ZxaCud9YHW8LZjbfr4uY1b+000nwGPNkIjMntLEC2OI59q6XPygeId5RDzX1XNKSnjZz82a7KnL2vQRld4QrRq+OIkTJysiijLPeCMd/qERQWLp8BH6Hk2EO31E9wa1AMzrEkwH9fr6QdOq9lrBPEn3BDcWflTjkl1x73eW2/ciZg/Z1Onje2wkso9lju9t6feONndUj0GUU57jpb+piY+07vXA2D6Y2jNMRHlusTlY+N5VVc16uRyJYT4NnC5NtzDmI7HKAkdmyJZk/SaHAlFFO2SV+HMxH4GzM9jTF6WXpJek8LRAM3GaQ7xrSJyf8LkDVgXA5oof6Etq79pEbWmu4n/0TUxoklh77wohHfzupbVPVri5LwLeR8hFWY0cTi5n9eXh2O/s7puHXFWwOQfGfAxponD3tnFRXZXQ0ukJOtdp0kGWOIY91WGoXL1GVgJWk9nIblRNFE+zPsSl/AYIHUk54fRRWmkRUzefHPCYWo68smE7kGwwzfN0qxbbjB0l5EZmqc963Q6mfe21Wn8NYowDMMwDMMwDMMwDMMwDMMwDMMwDMMwDMMwDMMwDMMwDMMwDMMwDMMY5H+slpGDedN7RgAAAABJRU5ErkJggg=="
          alt="yelp"
        />
        <img
          style={{ height: "60px" }}
          src="https://logos-world.net/wp-content/uploads/2023/09/Miro-Logo-500x281.png"
          alt="microsoft"
        />
        <img style={{ height: "60px" }} src={Google} alt="google" />
        <img
          style={{ height: "60px" }}
          src="data:image/png;base64,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"
          alt="micro"
        />
        <img
          style={{ height: "40px" }}
          src="https://static-00.iconduck.com/assets.00/webflow-icon-2048x515-obs12sby.png"
          alt="webflow"
        />
        <img
          style={{ height: "60px" }}
          src="https://media.designrush.com/inspiration_images/135173/conversions/_1511457945_616_lyft-mobile.jpg"
          alt="lyft"
        />
        <img
          style={{ height: "60px" }}
          src="https://1000logos.net/wp-content/uploads/2020/08/Dropbox-Logo-2013.jpg"
          alt="dropbox"
        />
      </section>
      <HIworks />
      <section
        style={{
          display: "flex",
          border: "1px solid #0000ff",
          justifyContent: "space-evenly",
          borderRadius: "40px",
          padding: "10px 0 150px",
          alignItems: "center",
          width: "85vw",
          margin: "0 auto",
          marginTop: "80px",
        }}
      >
     
          <img src={People} height="350" alt="people" />
      

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <h2
            style={{
              color: "#09074C",
              fontSize: "50px",
            }}
          >
            Prepare better
          </h2>
          <div>
            <div
              style={{
                color: "#09074C",
                fontFamily: "sans-serif",
                fontSize: "17px",
                marginBottom: "30px",
              }}
            >
              Engage our intelligent system to help you prepare better for
              <br></br>
              interview and new roles
            </div>
            <div
              style={{
                color: "#09074C",
                fontFamily: "sans-serif",
                fontSize: "17px",
                marginBottom: "30px",
              }}
            >
              We understand the job market is changing and its requirements with
              <br></br>constantly change with the growth of industries
            </div>
            <div
              style={{
                color: "#09074C",
                fontFamily: "sans-serif",
                fontSize: "17px",
                marginBottom: "30px",
              }}
            >
              Our system ensure you get best prep materials before <br></br>you
              interview for your next role
            </div>
          </div>
        </div>
      </section>

      <section
        style={{
          display: "flex",
          border: "1px solid #0000ff",
          justifyContent: "space-between",
          borderRadius: "40px",
          padding: "30px 60px 180px",
          alignItems: "center",
          marginTop: "-70px",
          background: "#fff",
        }}
      >
        <div>
          <h2
            style={{
              color: "#09074C",
              fontSize: "50px",
            }}
          >
            Available on your favourite <br></br>platforms
          </h2>
          <div>
            <div
              style={{
                color: "#09074C",
                fontFamily: "sans-serif",
                fontSize: "17px",
                marginBottom: "30px",
              }}
            >
              Engage our intelligent system to help you prepare better for
              <br></br>
              interview and new roles
            </div>
            <div
              style={{
                color: "#09074C",
                fontFamily: "sans-serif",
                fontSize: "17px",
                marginBottom: "30px",
              }}
            >
              We understand the job market is changing and its requirements with
              <br></br>constantly change with the growth of industries
            </div>
            <div
              style={{
                color: "#09074C",
                fontFamily: "sans-serif",
                fontSize: "17px",
                marginBottom: "30px",
              }}
            >
              Our system ensure you get best prep materials before <br></br>you
              interview for your next role
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
            width: "550px",
          }}
        >
          <img src={Phone} height="250" alt="phone" />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <img
              style={{
                marginBottom: "30px",
              }}
              height="60"
              src="https://1000logos.net/wp-content/uploads/2020/08/apple-app-store-logo.jpg"
              alt="app store"
            />
            <img
              
              height="60"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8_GSGDneF42Y3lPYO4HHsKm8pyRHyWRJM7er0t0T381hvQAc_ii7Hme_O_Ym6G4fSbAg&usqp=CAU"
              alt="play store"
            />
          </div>
        </div>
      </section>

      <footer
        style={{
          height: "300px",
          background: "linear-gradient(to left, #0084FF, #F75ED7)",
          width: "100vw",
          margin: "-50px",
        }}
      >
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </footer>
    </div>
  );
}

export default App;
