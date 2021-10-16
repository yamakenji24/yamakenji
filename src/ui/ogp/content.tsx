export const OGPContent = (props): JSX.Element => (
  <html>
    <head>
      <style>{styles}</style>
    </head>
    <body>
      <h1>yamakenji24 profile</h1>
      <h2>{props.title}</h2>
      <div className="logo">
        <img
          src="https://yamakenji.vercel.app/logo.png"
          width="100"
          height="100"
        />
        <h3>yamakenji24</h3>
      </div>
    </body>
  </html>
);

const styles = `
  html, body {
    height: 100%;
    display: grid;
    color: #696969;
    background: #fffafa;
    border: double 8px #20b2aa;
  }
  .logo {
    margin: auto;
    display: flex;
  }
  h1 {
    margin: auto auto 0 auto;
    font-size: xxx-large;
    color: black;
  }
  h2 {
    margin: auto auto 0 auto;
    font-size: xx-large;
    color: black;
  }
  h3 {
    margin: 0 auto 0 auto;
    font-size: xxx-large;
    color: black;
  }
`;
