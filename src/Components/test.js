<div>
  {latestRecords.map((records) => {
    return (
      <>
        <div className="card" key={records.id}>
          <div id="card_img">
            <img src={records.image} alt="img1" />
          </div>
          <div id="card_title">{records.title}</div>
          <div id="card_desc">{records.desc}</div>
        </div>
      </>
    );
  })}
</div>;
<div id="card">
  <div id="card_img">
    <img src={require("./../images/thumb.jpg")} alt="my_iamge" />
  </div>
  <div id="card_title">
    <h3>{props.title}</h3>
  </div>
  <div id="card_desc">
    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum has been the industry's standard dummy text ever since the
    1500s.
  </div>
</div>;
