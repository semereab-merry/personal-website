export default function Research() {
  const ResearchHeading = (props) => {
    return (
      <div className="research-head text-center">
        <div className="research-heading">
          <h6>
            <span className="bullet">● </span>
            {props.heading ? props.heading : ""}
          </h6>
        </div>
        <div className="research-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
          <br />
          <span className="smaller">
            ({props.description ? props.description : ""})
          </span>
        </div>
      </div>
    );
  };
  return (
    <>
      <h4 className="line text-center screen-heading">My Research Works</h4>
      <ResearchHeading
        heading={
          "Assessing the Perceptions of Cryptocurrency Among University Students in the United Arab Emirates"
        }
        subHeading={"Undergraduate Research Scholars Program, Zayed University"}
        description={"ZU Research Office, 2021-2023"}
      />
      <br />

      <ResearchHeading
        heading={
          "Non-Fungible Token (NFT) Certificate: A Solution for Certificate Forgery"
        }
        subHeading={"Undergraduate Research Competition, Abu Dhabi University"}
        description={"Department of Computer Science, 2022"}
      />
      <br />

      <ResearchHeading
        heading={"Virtual Communication and Organizational Culture"}
        subHeading={"Undergraduate Research Competition, Abu Dhabi University"}
        description={"Department of Management, 2021"}
      />
    </>
  );
}
