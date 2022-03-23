
const NotFound = () => {
  
  return (
    <div class="mainbox">
      <div className="err">4</div>
      <i className="far">0</i>
      <div className="err2">4</div>
      
      <div className="msg">
        Maybe this page moved? Got deleted? Is hiding out in quarantine? Never
        existed in the first place?
        <p>
          Let's go <a style ={{textDecoration:'under-line',cursor:'pointer'}} href='/'>home</a> and try from there.
        </p>
      </div>
    </div>
  );
};

export default NotFound;
