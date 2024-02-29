import "./subHeader.css";

export default function SubHeader(page) {
  return (
    <div className="heading-container contaier text-center">
      <div className="screen-heading">
        <h2>{page.title}</h2>
      </div>
      {page.subheading ? (
        <div className="screen-subheading">
          <h5>{page.subheading}</h5>
        </div>
      ) : (
        <div></div>
      )}
      <div className="heading-seperator">
        <div className="seperator-line"></div>
      </div>
    </div>
  );
}
